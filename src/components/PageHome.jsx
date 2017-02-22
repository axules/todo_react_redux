import React from 'react';
import Layout from './Layout';
import TodoAdd from '../components/TodoAdd';
import TodoListContainer from '../containers/TodoListContainer';

const PageHome = () => (
  <Layout>
    <div className='page_control_panel'>
      <TodoAdd/>
    </div>
    <TodoListContainer/>
  </Layout>
);

export default PageHome;