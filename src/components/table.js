import React, { Component } from 'react';
import StudentRow from './student_row';

const Table = (props) => {
    const studentRow = props.studentList.map((student) => { //props.studentList = attr and then pulls the value
        return <StudentRow delete={props.deleteStudent} key={student.id} student={student} />
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {studentRow}
            </tbody>
        </table>
    );
}

export default Table;