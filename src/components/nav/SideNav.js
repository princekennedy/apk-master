import React from "react";
import ReactDOM from "react-dom";
import css from "./Nav.css";
import {
    Page,
    List,
    ListItem,
    ListTitle,
    Icon,
    Ripple
    
} from 'react-onsenui'; // Only import the necessary components
// import * as Ons from 'react-onsenui'; // Import everything and use it as 'Ons.Page', 'Ons.Button'
import {Home ,About, VerifyCompany ,Users ,Login} from "../../router";
import {ToolbarHeader} from "../components";

// const NavItemA = props => (
//     <ListTitle  style={{fontSize: 15}} > {props.name} </ListTitle>
// );

const NavItemButton = props => (
    <ListItem onClick={ ()=>props.pushMethod(props.pushComponent)}>
        <Icon icon="md-face" style={{color: "red"}}></Icon> &nbsp;&nbsp;
        <Ripple color='grey' />
        {props.pushComponent.displayName}
    </ListItem>
);

  
export default class SideNav extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){                  
        return (    
            <Page> 
                <ToolbarHeader name={(this.props.sideNavTitle)?this.props.sideNavTitle: "Main Menu" } />
                <List>
                    {
                        [Home ,About, VerifyCompany ,Users ,Login].map( (component ,key) => {
                            return <NavItemButton key={key} pushMethod={this.props.pushPage} pushComponent={component} /> 
                        })
                    }      
                </List>
            </Page>
        )        
    }

}


