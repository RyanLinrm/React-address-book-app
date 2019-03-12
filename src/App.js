import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './App.css';
import AddBooks from './AddBooks/addBooks.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class App extends Component {
  state = {
    "addBooks": [
      { 
          key: Math.floor(Math.random()*100),
          FirstName: "Cathy" ,
          LastName: "Pierce",
          Birthday: "9/14/1996",
          Telephone: "200-910-8132"
      },
      {
          key: Math.floor(Math.random()*100),
          FirstName: "Alfonso",
          LastName: "Cooley",
          Birthday: "8/10/1973",
          Telephone: "200-657-9362"
      },
      {
          key: Math.floor(Math.random()*100),
          FirstName: "Victor",
          LastName: "Gordon",
          Birthday:  "8/3/1970",
          Telephone: "200-661-9407"
      },
      {
          key: Math.floor(Math.random()*100),
          FirstName: "Colleen",
          LastName: "Wright",
          Birthday: "10/28/1967",
          Telephone: "200-250-7949"
      },
      {
          key: Math.floor(Math.random()*100),
          FirstName: "James",
          LastName: "Johnston",
          Birthday: "5/11/1972",
          Telephone: "200-645-3176"
      },
      {
          key: Math.floor(Math.random()*100),
          FirstName: "Anna",
          LastName: "Reyes",
          Birthday: "9/10/1975",
          Telephone: "200-707-8670"
      }
    ],
    "FirstNameEntry" : '',
    "LastNameEntry" : '',
    "BirthdayEntry" : '',
    "TelephoneEntry" : '',
    "keyword" : ''
  }
  
  deleteAddressHandler = (index, e) => {
    const addBooks = [...this.state.addBooks];
    let deleteAddressIndex = addBooks.findIndex(
      (address)=>address.key===index);
    addBooks.splice(deleteAddressIndex, 1);
    this.setState({addBooks : addBooks});
  }

  addAddressHandler = (event) =>{
    event.preventDefault();
    const newAddress = {
      key: Math.floor(Math.random()*100),
      FirstName: this.state.FirstNameEntry,
      LastName: this.state.LastNameEntry,
      Birthday: this.state.BirthdayEntry,
      Telephone: this.state.TelephoneEntry
    };
    let addBooks = [...this.state.addBooks];
    addBooks.push(newAddress);
    this.setState({addBooks:addBooks});
    this.setState({FirstNameEntry:''});
    this.setState({LastNameEntry:''});
    this.setState({BirthdayEntry:''});
    this.setState({TelephoneEntry:''});
  }

  searchHandler = (event) => {
    this.setState({keyword : event.target.value});
   
}

  render() {
    return (
      <div className="App">
        <Container>
          <h1>Address-Book-app</h1>
          <Form.Group className="center" style={{width:"50%"}}>
            <Form.Control type="text" value ={this.state.keyword}
              placeholder="Search?" onChange={this.searchHandler} />
          </Form.Group>

          <AddBooks books={this.state.addBooks}
            click={this.deleteAddressHandler} />
          <div>
            <h2 className="text-left">Add an new address:</h2>
            
            <Form className="text-left" onSubmit = {this.addAddressHandler}>
              <Form.Group className="col-md-6">
                <Form.Label>FirstName</Form.Label>
                <Form.Control type="text" placeholder="Enter first name"
                  value={this.state.FirstNameEntry}
                  onChange={(e)=>this.setState({FirstNameEntry: e.target.value})}/>
              </Form.Group>

              <Form.Group className="col-md-6">
                <Form.Label>LastName</Form.Label>
                <Form.Control type="text" placeholder="Enter last name"
                  value={this.state.LastNameEntry}
                  onChange={(e)=>this.setState({LastNameEntry: e.target.value})}/>
              </Form.Group>

              <Form.Group className="col-md-6">
                <Form.Label>Birthday</Form.Label>
                <Form.Control type="text" placeholder="Enter birthday"
                  value={this.state.BirthdayEntry}
                  onChange={(e)=>this.setState({BirthdayEntry: e.target.value})}/>
              </Form.Group>

              <Form.Group className="col-md-6">
                <Form.Label>Telephone</Form.Label>
                <Form.Control type="text" placeholder="Enter telephone number"
                  value={this.state.TelephoneEntry}
                  onChange={(e)=>this.setState({TelephoneEntry: e.target.value})}/>
              </Form.Group>

              <Form.Group className="submit-button">
                <Button className="btn btn-info" type="submit">
                  Submit</Button>
              </Form.Group>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
