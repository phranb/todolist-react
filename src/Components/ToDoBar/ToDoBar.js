import React from 'react';
import './ToDoBar.css';

class ToDoBar extends React.Component {

    render() {
        return (
            <div className="b11-div" >
            <input className="Todobar" placeholder="todo_title_"></input>
            <button className="button b11-button is-danger is-outlined" ><i class="fas fa-check"></i></button>
            </div>
        );
    }
}

export default ToDoBar;