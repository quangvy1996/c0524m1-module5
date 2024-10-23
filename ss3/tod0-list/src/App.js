import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: '',
            isEditing: false,
            currentIndex: null,
        };
    }

    handleChange = (event) => {
        this.setState({
            item: event.target.value
        });
    }

    handleAddItem = () => {
        const { list, item, isEditing, currentIndex } = this.state;

        if (item.trim()) {
            if(isEditing) {
                const updateList = list.map((todo,index) =>
                index === currentIndex ? item : todo);
                this.setState({
                    list: updateList,
                    item:'',
                    isEditing: false,
                    currentIndex: null
                })
            }
                else {this.setState({
                list: [...list, item],
                item: ''
            });
                }
        }
    }
    handleDeleteItem = (index) => {
        const {list} = this.state;
        const updateList = list.filter((_, i) => i !== index);
        this.setState({
            list: updateList
        });
    }
    handleEditItem = (index) => {
        const {list} = this.state;
        this.setState({
            item: list[index],
            isEditing: true,
            currentIndex: index
        })
    }

    render() {
        const { list, item, isEditing } = this.state;

        return (
            <div>
                <h1>Todo List</h1>
                <input
                    type="text"
                    value={item}
                    onChange={this.handleChange}
                    placeholder="Add a new list"
                />
                <button onClick={this.handleAddItem}>
                    {isEditing ? 'Update' : 'Add'}
                </button>
                <ul>
                    {list.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => this.handleEditItem(index)}>Edit</button>
                            <button onClick={() => this.handleDeleteItem(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
