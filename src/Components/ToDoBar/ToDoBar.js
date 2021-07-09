import React from 'react';
import './ToDoBar.css';

class ToDoBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
          };
          this.handleChange = this.handleChange.bind(this);
    }
     
    handleChange(event) {
        this.setState({
            title: event.target.value
        })
    }


    render() {
        return (
            <div className="b11-div" >
            <input input={this.state.input} onChange={this.handleChange} className="Todobar" placeholder="todo_title_"></input>
            <button className="button b11-button is-danger is-outlined" ><i className="fas fa-check"></i></button>
            </div>
        );
    }
}

export default ToDoBar;