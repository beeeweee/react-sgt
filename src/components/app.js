import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, { Component } from 'react';
import Table from './table';
import {Route} from 'react-router-dom';
import AddStudent from './add_student';
import ViewStudent from './view_student';




class App extends Component {
    

    render() { //will pass an array of objects into the table 
        return (
            <div className="container">
                <Route exact path="/" component={Table}/>
                <Route path="/add-student" component={AddStudent}/>
                <Route path="/student/:id" component={ViewStudent}/>
            </div>
        );
    }
}

export default App;
