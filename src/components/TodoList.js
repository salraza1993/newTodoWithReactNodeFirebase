import React from 'react'

export default function TodoList() { 
  
  return (
    <div className='todo_list_items text-white d-flex justify-content-between align-items-start'>
      <div className='list-content text-start pe-3'>
        <h6 className='content'>sadfasfd</h6>
        <button className="btn-warning btn btn-sm py-0">
           In-progress
        </button>
        <br />
        <small className="text-sedonary timing d-block">
          <span>
            Created: <span>sadfs</span>,
          </span>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <span>
            Edited: <span>sadf</span>
          </span>
        </small>
      </div>
      <div className="actions d-flex gap-2 mt-1">
        <button type='button' className="btn border-0 btn-outline-info">
          <i className="fas fa-pencil pe-none"></i>
        </button>
        <button type='button' className="btn btn-outline-danger border-0">
          <i className="fas fa-trash-alt pe-none"></i>
        </button>
      </div>
    </div>
  )
}
