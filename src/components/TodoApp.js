import React, { useEffect, useState } from 'react';
import ReactLogoAnimation from './ReactLogoAnimation'
import TodoInput from './TodoInput';
import './TodoApp.scss'
import TodoList from './TodoList';
import axios from 'axios';
// import { useUserAuthContext } from '../contexts/AuthContexts';

const TodoApp = () => {
  
  // const { AUTH_TOKEN } = useUserAuthContext();
  const [todos, setTodos] = useState([]);

  const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTIzMDA0MjJ9.TVfqrAqrIKJTj1VbgimPGNCFYOtFBXIvDRuv5G6wH3A'
  
  console.log(todos);
  
  useEffect(() => {
    axios.get("http://localhost:5000/auto-config-vue/us-central1/todos/getTodos", {
      headers: { 'Content-Type': 'application/json', authorization: 'Bearer ' + AUTH_TOKEN }
    }).then(response => {
      setTodos(response.data);
    });
  }, []);


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
