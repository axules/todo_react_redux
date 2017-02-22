import React from 'react';
import Layout from './Layout';
import TodoAddContainer from '../containers/TodoAddContainer';

const PageHome = () => (
  <Layout>
    <h1>Главная страница</h1>
    <TodoAddContainer/>
    <hr/>
  </Layout>
);

export default PageHome;