import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoAdd extends Component {
  state = {
    visible: false,
  }

  onFormToggle = () => {
    this.setState({visible: true});
  }

  render() {
    if( !this.state.visible ) {
      return (
        <button type='button' className='button is-info'>Добавить задание</button>
      );
    }
    return (
      <div>
        <label className="label">Название задачи</label>
        <p className="control">
          <input className="input" type="text" placeholder="TODO name"/>
        </p>
        <label className="label">Описание задачи</label>
        <p className="control">
          <textarea className="textarea" placeholder="Textarea"></textarea>
        </p>
      </div>
    );
  }
}

const TodoAddContainer = connect(
  state => ({
    
  }),
  {}
)(TodoAdd);

export default TodoAddContainer;
