import React, {Component} from 'react';

class TodoItem extends Component {
  state = {
    opened: false,
  }

  static propTypes = {
    editTodo: React.PropTypes.func.isRequired,
    removeTodo: React.PropTypes.func.isRequired,
    completeTodo: React.PropTypes.func.isRequired,
    todo: React.PropTypes.object.isRequired,
  }

  onEdit = () => { 
    this.props.editTodo(this.props.todo);
  }
  onRemove = () => { 
    this.props.removeTodo(this.props.todo.uid);
  }
  onComplete = () => { 
    this.props.completeTodo(this.props.todo.uid);
  }

  openToggle = () => {
    this.setState({opened: !this.state.opened});
  }

  render() {
    const {opened} = this.state;
    const {todo} = this.props;
    return (
      <div className="card">
        <header className="card-header todo_item_header" onClick={this.openToggle}>
          <p className="card-header-title">
            {todo.name} {todo.state == 9 && ' (Завершено)'}
          </p>
        </header>
        {opened && 
          <div>
            <div className="card-content">
              <div className="content">
                {todo.text}
              </div>
            </div>
            {todo.state < 9 &&
              <footer className="card-footer">
                <a className="card-footer-item card_item_edit" onClick={this.onEdit}>Изменить</a>
                <a className="card-footer-item card_item_end" onClick={this.onComplete}>Завершить</a>
                <a className="card-footer-item card_item_remove" onClick={this.onRemove}>Удалить</a>
              </footer>
            }
          </div>
        }
      </div>
    );
  }
}

export default TodoItem;



