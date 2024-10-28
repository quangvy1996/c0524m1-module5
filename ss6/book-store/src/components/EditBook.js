import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetchBook().then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error("Error fetching book:", error);
        });
    }, []);

    const fetchBook = async () => {
        const response = await axios.get(`http://localhost:8080/books/${id}`);
        setTitle(response.data.title);
        setQuantity(response.data.quantity);
    };

    const handleSave = async () => {
        await axios.put(`http://localhost:8080/books/${id}`, {
            title,
            quantity,
        });
        alert('Book updated successfully');
        navigate('/');
    };

    return (
        <div>
            <h1>Edit</h1>
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
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default EditBook;