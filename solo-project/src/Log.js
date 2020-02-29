import React from 'react';
import PO from "./PO";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './App.css'

class Log extends React.Component {

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
        <div className="logEntry">
            <Card>
            <Card.Header>Log Entry</Card.Header>
            <Card.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPO">
                <Form.Label>PO#</Form.Label>
                <Form.Control type="interger" placeholder="ex: CCSE XXXXX" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridVendor">
                <Form.Label>Vendor</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>Nike</option>
                  <option>'47</option>
                  <option>Mitchell & Ness</option>
                  <option>New Era</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label># of Boxes</Form.Label>
                <Form.Control type="interger" placeholder="1, 2, 3, 4, ..." />
              </Form.Group>
              <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date"controlId="formGridDate"></Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridNotes">
                <Form.Label>Notes</Form.Label>
                <Form.Control type="text" placeholder="Item Description, Damaged Product, etc..." />
              </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Card.Body>
            <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a} placeholder="PO #">
              </input>
              <button type="submit">add</button>
            </form>
          
          <PO entries={this.state.items}
                     delete={this.deleteItem}/>
                       </Card>
        </div>
      );
    }
  }
   
  export default Log;