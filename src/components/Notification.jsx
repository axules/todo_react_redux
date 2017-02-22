import React, {Component} from 'react';
import classNames from 'classnames';
import debounce from 'lodash/debounce';

export default class Notification extends Component {
  state = {display: true}
  
  delayedClose = debounce(
    () => this.onCloseClick(),
    5000
  );
  
  componentDidMount() {
    const {delay} = this.props;
    const delayInt = parseInt(delay) || 0;
    if( delayInt ) {
      this.delayedClose.cancel();
      this.delayedClose = debounce(
        () => this.onCloseClick(),
        Math.min(delayInt, 60000)
      );
      this.delayedClose();
    }
  }

  componentWillUnmount() {
    this.delayedClose.cancel();
  }

  componentWillReceiveProps() {
    const {delay} = this.props;
    const delayInt = parseInt(delay) || 0;
    if( delayInt ) {
      this.delayedClose();
    }
  }

  onCloseClick = () => {
    const {onClose} = this.props;
    this.setState({display: false});
    if(onClose && (onClose instanceof Function) ) {
      onClose();
    }
  }

  render() {    
    const {className, children, buttonClose} = this.props;
    if(!this.state.display) return null;
    return (
      <div 
        className={
          classNames(
            'notification has-text-centered',
            className
          )
        }
      >            
        {buttonClose &&
          <button className="delete" onClick={this.onCloseClick}></button>
        }
        {children}
      </div>
    );
  }
}
