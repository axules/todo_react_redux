import React, {Component} from 'react';
import TodoFormContainer from '../containers/TodoFormContainer';

class TodoAdd extends Component {
  state = {
    visible: false,
  }

  onFormToggle = () => {
    this.setState({visible: !this.state.visible});
  }

  render() {
    return (
      <div className=' level-right'>
        <button type='button' className='button is-info medium' onClick={this.onFormToggle}>Добавить задание</button>
        {this.state.visible &&
          <TodoFormContainer onCancel={this.onFormToggle}/>
        }
      </div>
    );
  }
}

export default TodoAdd;
