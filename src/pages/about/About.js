import React from "react";
import {Page, Toolbar, Button} from 'react-onsenui';
import {ToolbarHeader,SideNav ,SplitterPage , Welcome} from "../../components/components";

export default class About extends React.Component {
    
    static displayName = 'About';
    constructor(props){
        super(props);
    }

    pushPage(newComponent) {
        this.props.navigator.pushPage({component: newComponent});
    }

    popPage() {
        this.props.navigator.popPage();
    }

    render(){
        return (
            <ToolbarHeader backButton={true} name={About.displayName} /> 
        );
    }
}
  