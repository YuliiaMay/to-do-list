import React, { Component } from "react";


export class TaskEditor extends Component {
    state = {
        newTask: '',
    };

    handelChange = ({target: { value }}) => {
        this.setState({
            newTask: value,
        })
    }


    handelSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.newTask);

        this.reset();
    }


    reset() {
        this.setState({ newTask: '' })
    }


    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <input
                    type="text"
                    name='text'
                    value={this.state.newTask}
                    onChange={this.handelChange}

                />
                <button type="submit">Create</button>
            </form>
        )
    }
}