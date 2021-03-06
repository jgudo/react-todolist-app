import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
   
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {error}
        });

        if(!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
            <form className="add-option" onSubmit={this.handleAddOption}>
                <input type="text" className="add-option__input" name="option" placeholder="Enter your task here"/>
                 <button className="button button--add">+</button>
            </form>
            </div>
        );
    }
}