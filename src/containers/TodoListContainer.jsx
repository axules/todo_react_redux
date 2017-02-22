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
  }

  onEditCancel = () => {
    this.setState({editVisible: false, editTodo: null});
  }

  onEditTodo = (todo) => {
    this.setState({editVisible: true, editTodo: todo});
  }

  render() {
    const {list, todoRemove} = this.props;
    const {editVisible, editTodo} = this.state;

    if( !list || Object.keys(list).length == 0 ) {
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
          {Object.keys(list).map(k => <TodoItem key={k} todo={list[k]} removeTodo={todoRemove} editTodo={this.onEditTodo}/>)}
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
