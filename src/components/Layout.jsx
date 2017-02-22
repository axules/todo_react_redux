import React, {Component} from 'react';
import Logo from '../assets/img/logo.svg';

class Layout extends Component {
  render() {
    const {children} = this.props;

    return (
      <div id='layout_root'>
        <header id="header" className="mb10">
          <img src={Logo} width='200px'/>
          <span>Эй, человек!</span>
        </header>

        <main id="main">
          {children}
        </main>
      </div>
    );
  }
}

export default Layout;
