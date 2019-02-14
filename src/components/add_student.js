import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { formatPostData } from '../helpers';

class AddStudent extends Component {
    //input name must match the state property name
    state = {
        name: '',
        course: '',
        grade: '',
        instructor: '',
        notes: '',
    }

    addStudent = async (student) => {



        this.getStudentData();

        // student.id = randomString();
        // this.setState({
        //     students: [...this.state.students, student]//Taking the current list of states and placing them in the array and then taking the new parameter and adding the newly filled out student
        // });

    }

    handleSubmit = async (event) => {
        event.preventDefault();

        console.log('Student Info', this.state);

        const formattedStudent = formatPostData(this.state);

        await axios.post('/server/createstudent.php', formattedStudent);

        this.props.history.push('/');
    }

    resetForm = () => {
        this.setState({
            name: '',
            course: '',
            grade: '',
            instructor: '',
            notes: '',
        });
    }

    handleKeyPress = (event) => {
        this.setState({
            [event.target.name]: event.target.value//targeting the event object and taking the value
        });

        // //Set state will call render once it's "ready" or the values have been updated
        // switch(event.target.name){
        //     case 'name':
        //         this.setState({
        //             name: event.target.value
        //         });
        //         break;
        //     case 'course':
        //         this.setState({
        //             course: event.target.value
        //         });
        //     break;
        //     case 'grade':
        //         this.setState({
        //             grade: event.target.value
        //         });
        //         break;
        // }
    }

    render() {
        const { name, course, grade, instructor, notes } = this.state;
        console.log('Add Student :', this.props)

        return (
            <div>
                <h1 className="center">Add Student</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link className="btn blue" to="/">Home</Link>
                    </div>
                </div>  
                


                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col input-field s10 offset-s1">
                            <input onChange={this.handleKeyPress} name="name" type="text" id="name" value={name} />
                            <label htmlFor="name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col input-field s10 offset-s1">
                            <input onChange={this.handleKeyPress} name="course" type="text" id="course" value={course} />
                            <label htmlFor="course">Course</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col input-field s10 offset-s1">
                            <input onChange={this.handleKeyPress} name="grade" type="text" id="grade" value={grade} />
                            <label htmlFor="Grade">Grade</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col input-field s10 offset-s1">
                            <input onChange={this.handleKeyPress} name="instructor" type="text" id="instructor" value={instructor} />
                            <label htmlFor="Instructor">Instructor</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col input-field s10 offset-s1">
                            <input onChange={this.handleKeyPress} name="notes" type="text" id="notes" value={notes} />
                            <label htmlFor="Notes">Notes</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6 center">
                            <button onClick={this.resetForm} type="button" className="btn red darken-2 waves-effect waves-light">Clear</button>
                        </div>
                        <div className="col s6 center">
                            <button className="btn green darken-2">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddStudent;