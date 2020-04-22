import React ,{Component} from "react";
import {
    List,
    ListItem,
    Page,
    LazyList
} from 'react-onsenui'; // Only import the necessary components
// import * as Ons from 'react-onsenui'; // Import everything and use it as 'Ons.Page', 'Ons.Button'

function renderRow(index) {
    return (
      <ListItem key={index}>
        {'Item ' + (index + 1)}
      </ListItem>
    );
  }

const Welcome = props => (
    <div style={{marginTop: 10}}>
        <List>
            <ListItem>
                Hello
            </ListItem>
            <ListItem>
                Hello 1
            </ListItem>
            <ListItem>
                Hello 1
            </ListItem>
            <ListItem>
                Hello 1
            </ListItem>
            <ListItem>
                Hello 1
            </ListItem>
        </List>
    </div>
);
export default Welcome;
