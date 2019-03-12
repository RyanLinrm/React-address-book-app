import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const addBooks = (props) =>{
    const keyw = props.keyword;
    let addBooks = [];
    let addBook = [...props.books];
    if(keyw !== ''){
        addBooks = addBook.filter( (address) => 
            address.FirstName.toLowerCase().includes(keyw.toLowerCase()) ||
            address.LastName.toLowerCase().includes(keyw.toLowerCase()) ||
            address.Birthday.includes(keyw) ||
            address.Telephone.includes(keyw) 
        )
    }
    else {
        addBooks = addBook;
    }

    let output = addBooks.map( (book) =>
        <ListGroup.Item key={book.key}>
            <Card className="border border-info">
                <Card.Body className="text-center">
                    <Button key={book.key}
                        type="button" class="btn btn-sm" 
                        style={{position:'absolute', top:'0px',right:'0px'}}
                        onClick ={props.click.bind(null,book.key)}>
                        trash
                    </Button>
                    <Card.Title>{book.FirstName} {book.LastName}</Card.Title>
                    <Card.Text>{book.Birthday}<br />{book.Telephone}</Card.Text>
                </Card.Body>
            </Card>
        </ListGroup.Item>
        
    )
    return output;
};


export default addBooks;