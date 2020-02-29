import React from 'react';
import FlipMove from "react-flip-move";
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

class PO extends React.Component {
    
    constructor(props) {

        super(props);

    this.createTasks = this.createTasks.bind(this);
    }
    
    delete(key) {
        this.props.delete(key);
    }

    
    createTasks(item) {
      return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
    }
   
    render() {
      var todoEntries = this.props.entries;
      var listItems = todoEntries.map(this.createTasks);
   
      return (
        <ul className="theList">
          <FlipMove duration={250} easing="ease-out">
            {listItems}
            <ButtonGroup aria-label="Update/Delete">
              <Button variant="secondary">Update</Button>
              <Button variant="secondary">Remove</Button>
            </ButtonGroup>
          </FlipMove>
        </ul>
      );
    }
  };
   
  export default PO;