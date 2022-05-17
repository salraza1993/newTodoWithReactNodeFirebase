import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TodoApp from '../components/TodoApp';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="content_body">
        <TodoApp />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
