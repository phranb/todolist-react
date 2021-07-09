import React from 'react';
import './DescriptionBox.css';

class DescriptionBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            description: ''
          };
        this.handleTextBoxChange = this.handleTextBoxChange.bind(this);
        
    }

    handleTextBoxChange(event) {
        this.setState({
            description: event.target.value
        })
    }

    render() {
        return (
          <div className="b11-div">
            <textarea input={this.state.description} onChange={this.handleTextBoxChange} className="is-danger b11-textarea" placeholder="description_" rows="5"></textarea>
            <div className="b11-side-buttons">
            <button className="button b12-button is-danger"></button>
            <button className="button b12-button is-info"></button>
            <button className="button b12-button is-success"></button>
            <button className="button b12-button is-warning"></button>
            
            </div>
            </div>
        );
    }
}

export default DescriptionBox;