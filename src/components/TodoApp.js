import React from 'react';
import ReactLogoAnimation from './ReactLogoAnimation'
import TodoInput from './TodoInput';
import './TodoApp.scss'
import TodoList from './TodoList';

const TodoApp = () => {
  return (
    <div className='todo_app_main_container'>
      <ReactLogoAnimation />
      <div className="sub_container">
        <h1 className='fw-bold text-info mb-4'>Todo Application</h1>
        <small className='sb-heading text-white text-uppercase mb-5 d-block'>React + Firebase</small>
        <TodoInput />
        <div className="todo_list_items_container">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
