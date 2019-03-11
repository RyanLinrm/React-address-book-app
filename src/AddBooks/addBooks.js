import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const addBooks = (props) =>{
    let addBook = [...props.books];
    let output = addBook.map( book =>
        <div>
            <div class="list-group0">
                <Card class="border border-dark">
                        <h4>{book.FirstName}{book.LastName}</h4>
                        <h5>{book.Birthday}</h5>
                        <p>{book.Telephone}</p>
                </Card>
            </div>
        </div>
    );
    return output;
};


export default addBooks;