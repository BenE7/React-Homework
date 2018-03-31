import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {getArticles} from './utilities/api.js';

class App extends Component {
  componentDidMount(){
    getArticles().then(data =>{
      console.log(data);
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div id="headerfont">
            <h1 id="apptitle" className="App-title">
              NEW YORK TIMES REACT APP
            </h1>
          </div>
          <br />
        </header>
        <br />
        <br />

        <div className="panel panel-default">
          <div className="panel-heading panel-heading-custom">
            <p id="search">Search</p>
          </div>
          <br />

          <table className="table table-bordered">
            <div className="form-group">
              <label>Topic</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group">
              <label>Start Year</label>
              <input type="destination" className="form-control" />
            </div>

            <div className="form-group">
              <label>End Year</label>
              <input type="start date" className="form-control" />
            </div>

            <button id="submit" type="button" className="btn btn-primary">
              Submit
            </button>
            <br />
            <br />
          </table>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading panel-heading-custom">
            <p id="search">Results</p>
          </div>
        </div>

        <table id="results" className="table table-bordered">
          <div className="form-group" />
        </table>
      </div>
    );
  }
}

export default App;
