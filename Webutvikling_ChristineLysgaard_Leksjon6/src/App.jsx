import React from 'react';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import ToDosContainer from './components/Todos/TodosContainer';

// TODO: Add TodosContainer
const App = () => (
  <>
    <Navbar />
    <Layout>
      <ToDosContainer />
    </Layout>
  </>
);

export default App;
