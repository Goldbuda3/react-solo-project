import React from 'react';
import PO from "./PO";
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './App.css'

class Book extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
      }
       
      addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
              text: this._inputElement.value,
              key: Date.now()
            };
         
            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newItem) 
              };
            });
           
            this._inputElement.value = "";
          }
           
          console.log(this.state.items);
             
          e.preventDefault();
      }

      deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }

    render() {
      return (
        <div className="logBook">
         <Card>
             <Card.Header>Receiving Log</Card.Header>
             <Card.Body>
             <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Date</th>
                <th>PO #</th>
                <th>Vendor</th>
                <th># of Boxes</th>
                <th>Notes</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>2/27/20</td>
                <td>CCSE 23624</td>
                <td>Nike</td>
                <td>4</td>
                <td>Missing 3 T-Shirts</td>
                <td>
                    <Button variant="success">Update</Button>
                    {' '}
                    <Button variant="danger">Remove</Button>
                </td>
                </tr>
            </tbody>
            </Table>
            </Card.Body>
            <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a} placeholder="PO #">
              </input>
              <button type="submit">add</button>
            </form>
        </Card>
          <PO entries={this.state.items}
                     delete={this.deleteItem}/>
        </div>
      );
    }
  }
   
  export default Book;