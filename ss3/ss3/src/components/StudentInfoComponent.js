import { Component } from 'react';


function StudentInfoComponent() {
    const students = [{id: 1, name: "Thái Quang Vỹ", age: 28, address: "Đà Nẵng"}];
    return(
        <table border="1" cellPadding="5" cellSpacing="0">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
            {students.map(student => (
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
export default StudentInfoComponent;
