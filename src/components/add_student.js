import React, { Component } from 'react';

class AddStudent extends Component {
    //input name must match the state property name
    state = {
        name: '',
        course: '',
        grade: '',
        instructor: '',
        notes: '',
    }


    handleSubmit = (event) => {
        event.preventDefault();

        console.log('Student Info', this.state);

        this.props.add(this.state);

        this.resetForm();
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

        return (
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
        );
    }
}

export default AddStudent;