import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            item: event.target.value
        });
    }

    handleAddItem = () => {
        const { list, item } = this.state;

        if (item.trim()) {
            this.setState({
                list: [...list, item],
                item: ''
            });
        }
    }

    render() {
        const { list, item } = this.state;

        return (
            <div>
                <h1>Todo List</h1>
                <input
                    type="text"
                    value={item}
                    onChange={this.handleChange}
                    placeholder="Add a new list"
                />
                <button onClick={this.handleAddItem}>Add</button>
                <ul>
                    {list.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
