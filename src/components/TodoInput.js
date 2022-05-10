import { React } from 'react'

export default function TodoInput() {
  return (
    <form className='d-flex todo_input_form mb-4'>
      <input
        autoComplete='off'
        type="text"
        name="todo-input"
        className='form-control'
        id=""
        placeholder='Enter todo heading' 
      />
      <button type='submit' className='btn btn-info px-3 fw-bold'>Submit</button>
    </form>
  )
}
