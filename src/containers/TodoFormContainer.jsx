import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as todoActions from '../actions/todo';
import Notification from '../components/Notification';

class TodoForm extends Component {
  state = {
    visible: false,
    message: '',
  }

  static propTypes = {
    onCancel: React.PropTypes.func.isRequired,
  }

  onCloseNotification = () => {
    this.setState({message: ''});
  }

  onFormOk = (e) => {
    e.preventDefault();
    const {todo, todoAdd, todoSave, onCancel} = this.props;
    const name = this.refs.name.value || '';
    const text = this.refs.text.value || '';
    if( name.trim().length == 0 ) {
      this.setState({message: 'Заполните поле Название задачи'});
    } else {
      if( todo && todo.uid ) {
        todoSave(todo.uid, name, text );
      } else {
        todoAdd(name, text);
      }
      onCancel();
    }
  }

  render() {
    const {onCancel, todo} = this.props;
    const {message} = this.state;
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={onCancel}></div>
          <div className="modal-content">
            <div className='box'>
              {message && String(message).trim() &&
                <Notification delay={5000} className='is-warning' onClose={this.onCloseNotification} buttonClose={true}>
                  {message}
                </Notification>
              }
              <label className="label">Название задачи</label>
              <p className="control">
                <input type="text" ref='name' className="input" placeholder="TODO name" defaultValue={todo && todo.name}/>
              </p>
              <label className="label">Описание задачи</label>
              <p className="control">
                <textarea ref='text' className="textarea" placeholder="TODO text" defaultValue={todo && todo.text}/>
              </p>
              <button type='button' className='button is-success medium' onClick={this.onFormOk}>
                {todo ? 'Сохранить' : 'Добавить'}
              </button>
              <button type='button' className='button is-link medium' onClick={onCancel}>Отменить</button>
            </div>
          </div>
        <button className="modal-close" onClick={onCancel}></button>
      </div>
    );
  }
}

const TodoFormContainer = connect(
  () => ({}),
  todoActions
)(TodoForm);

export default TodoFormContainer;
