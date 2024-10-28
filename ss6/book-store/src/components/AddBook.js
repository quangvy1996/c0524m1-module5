import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState('');
    const navigate = useNavigate();

    const handleAdd = async () => {
        await axios.post('http://localhost:8080/books', {
            title,
            quantity,
        });
        alert('Book added successfully');
        navigate('/');
    };

    return (
        <div>
            <h1>Add a new Book</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Quantity"
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default AddBook;