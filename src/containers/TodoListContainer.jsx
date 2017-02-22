import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoItem from '../components/TodoItem';
import * as todoActions from '../actions/todo';
import TodoFormContainer from '../containers/TodoFormContainer';
import Notification from '../components/Notification';

class TodoList extends Component {
  state = {
    editVisible: false,
    editTodo: null,
    sortedList: [],
  }

  setList = (list) => {
    if( list && list instanceof Object && Object.keys(list).length > 0 ) {
      let arr = [];
      Object.keys(list).forEach(k => arr.push(list[k]));
      this.setState({
        sortedList: arr.sort((a,b) => String(b.name).localeCompare(a.name)),
      });
    } else {
      this.setState({sortedList: []});
    }
  }

  componentWillMount() {
    this.setList(this.props.list);
  }

  componentWillReceiveProps(nextProps) {
    this.setList(nextProps.list);
  }

  onEditCancel = () => {
    this.setState({editVisible: false, editTodo: null});
  }

  onEditTodo = (todo) => {
    this.setState({editVisible: true, editTodo: todo});
  }

  render() {
    const {todoRemove, todoComplete} = this.props;
    const {editVisible, editTodo, sortedList} = this.state;
    
    if( !sortedList || Object.keys(sortedList).length == 0 ) {
      return (
        <Notification>
          Список заданий пуст
        </Notification>
      );
    }
    return (
      <div>
        {editVisible &&
          <TodoFormContainer onCancel={this.onEditCancel} todo={editTodo}/>
        }
        <div>
          {sortedList.map(todo => <TodoItem key={todo.uid} todo={todo} removeTodo={todoRemove} editTodo={this.onEditTodo} completeTodo={todoComplete}/>)}
        </div>
      </div>
    );
  }
}

const TodoListContainer = connect(
  state => ({
    list: state.todo,
  }),
  todoActions
)(TodoList);

export default TodoListContainer;
