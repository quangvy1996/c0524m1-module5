import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  // Lấy danh sách todos từ API
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTodos(response.data.slice(0, 10)); // Giới hạn 10 mục đầu tiên
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Hàm thêm todo mới
  const addTodo = async () => {
    if (!task) {
      alert('Please enter a task');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/tasks', {
        title: task,
        completed: false,
      });
      alert(`Todo added: ${response.statusText}`);

      setTodos([{ id: Date.now(), title: task, completed: false, userId: 1 }, ...todos]);
      setTask('');
    } catch (error) {
      console.error('Error adding todo:', error);
      alert('Failed to add todo');
    }
  };

  return (
      <div className="App" style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Todo List</h1>
        <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a todo task"
            style={{ padding: '8px', width: '300px' }}
        />
        <button onClick={addTodo} style={{ marginLeft: '10px', padding: '8px' }}>
          Submit
        </button>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {todos.map((todo) => (
              <li key={todo.id} style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>
                <p><strong>User ID:</strong> {todo.userId}</p>
                <p><strong>Task ID:</strong> {todo.id}</p>
                <p><strong>Title:</strong> {todo.title}</p>
                <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default App;
