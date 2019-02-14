import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import StudentRow from './student_row';
import { formatPostData } from '../helpers';


class Table extends Component {

    state = {
        students: [],
    }
    componentDidMount() {
        this.getStudentData();
    }

    deleteStudent = async (id) => {
        const formattedId = formatPostData({ id });

        await axios.post('/server/deletestudent.php', formattedId);

        this.getStudentData();


    }

    async getStudentData() { //updates the state of the component with the data
        const resp = await axios.get('/server/getstudentlist.php');
        this.setState({
            students: resp.data.data || []
        });
        console.log('resp: ', resp);

    }


    render() {

        const { students } = this.state;
        let studentRows = [];

        if (Array.isArray(students) && students.length) {
            studentRows = students.map((student) => { //props.studentList = attr and then pulls the value
                return <StudentRow delete={this.deleteStudent} key={student.id} student={student} />
            });
        } else {
            studentRows.push(
                <tr>
                    <td colSpan="4">
                        <h4 className="center grey-text">No Student Data Available</h4>
                    </td>
                </tr>
            )
        }

        return (
            <div>
                <h1 className="center">Student Grade Table</h1>

                <div className="row">
                    <div className="col s12 right-align">
                        <Link className="btn blue" to="/add-student" >Add Student</Link>
                    </div>
                </div>
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
                        {studentRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;