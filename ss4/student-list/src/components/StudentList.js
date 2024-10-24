import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentList() {
    const [studentList, setStudentList] = useState([]);
    const [newStudent, setNewStudent] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [editStudentName, setEditStudentName] = useState("");
    const addStudent = () => {
        if (newStudent.trim() !== "") {
            setStudentList([...studentList, newStudent]);
        }
        setNewStudent("");
    }
    const removeStudent = (index) => {
        const updateStudent = studentList.filter((_, i) => i !== index);
        setStudentList(updateStudent);
    }
    const startEditing = (index) => {
        setEditingIndex(index);
        setEditStudentName(studentList[index]);
    }
    const editStudent = () => {
    const updateStudent = studentList.map((student, index) => index === editingIndex ? editStudentName : student);
        setStudentList(updateStudent);
        setEditingIndex(null);
        setEditStudentName("");
    }
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Student List</h1>

            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={newStudent}
                    onChange={(e) => setNewStudent(e.target.value)}
                    placeholder="Enter student name"
                />
                <button className="btn btn-primary" onClick={addStudent}>Add Student</button>
            </div>

            <ul className="list-group">
                {studentList.map((student, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {editingIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    className="form-control me-2"
                                    value={editStudentName}
                                    onChange={(e) => setEditStudentName(e.target.value)}
                                />
                                <button className="btn btn-success me-2" onClick={editStudent}>Save</button>
                            </>
                        ) : (
                            <>
                                {student}
                                <div>
                                    <button className="btn btn-warning btn-sm me-2" onClick={() => startEditing(index)}>Edit</button>
                                    <button className="btn btn-danger btn-sm" onClick={() => removeStudent(index)}>Delete</button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default StudentList;