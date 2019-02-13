import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, { Component } from 'react';
import axios from 'axios';
import Table from './table';
import AddStudent from './add_student';
import {formatPostData } from '../helpers'



class App extends Component {
    state = {
        students: [],
    }
    componentDidMount() {
        this.getStudentData();
    }

    deleteStudent = async (id) => {
        const formattedId = formatPostData({id});

        await axios.post('/server/deletestudent.php', formattedId);
        
        this.getStudentData();
        
        // const indexToDelete = this.state.students.findIndex((student)=>{
        //     return student.id === id;
        // });

        // if(indexToDelete >= 0){
        //     const tempStudents = this.state.students.slice();

        //     tempStudents.splice(indexToDelete, 1);

        //     this.setState({
        //         students: tempStudents
        //     });
        // }
    }

    addStudent = async (student) => {

        const formattedStudent = formatPostData(student);

        await axios.post('/server/createstudent.php', formattedStudent);

        this.getStudentData();

        // student.id = randomString();
        // this.setState({
        //     students: [...this.state.students, student]//Taking the current list of states and placing them in the array and then taking the new parameter and adding the newly filled out student
        // });

    }

    async getStudentData() { //updates the state of the component with the data
        const resp = await axios.get('/server/getstudentlist.php');
        this.setState({
            students: resp.data.data || []
        });
    console.log('resp: ',resp);

    //     axios.get('http://localhost/server/getstudentlist.php').then((response) => {
    //         console.log('Server Response', response.data.data);
    //     this.setState({
    //         students: response.data.data
    //     });
    // });
    }

    render() { //will pass an array of objects into the table 
        return (
            <div>
                <h1 className="center">SGT</h1>
                <div className="row">
                    <div className="col s12 m8">
                        <Table deleteStudent={this.deleteStudent} studentList={this.state.students}/>
                    </div>
                    <div className="col s12 m4">
                        <AddStudent add={this.addStudent}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
