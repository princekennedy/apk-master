import React ,{Component} from "react";
import css from "./Login.css";
import ApiCall from "../../services/ApiCall";
import $ from "jquery";
import {ToolbarHeader} from "../../components/components";
import {Home , VerifyCompany} from "../../router";
import {
    Page,
    Card,
    List,
    ListItem,
    Input,
    Button
} from 'react-onsenui';

export const LoginForm = props =>(
    <p>
        <Input
            modifier='material'
            className="block-input"
            {... props} />
    </p>
);

class Login  extends Component{
    static displayName = 'Login';
    constructor (props){
        super();
        this.state = {
            "currentState": false,
        };
        this.apiCall = new ApiCall;        
    }

    componentDidMount = () => {
        if(!this.props.navigator.state.data ) {
            this.pushPage(VerifyCompany);
        }
    }
    
    componentWillUnmount = () => {
        console.log('Is this getting unounted ?'); // This is working, the component is not getting unmounted
    }

    logout(){
        this.setState({"currentState" : "/"});
    }

    pushPage(newComponent) {
        this.props.navigator.pushPage({component: newComponent});
    }

    popPage() {
        this.props.navigator.popPage();
    }

    login(){
        this.pushPage(Home);
    }

    loginFormInputs=() =>{
        return this.props.navigator.state.data.form_data.map(function(value ,key) {
            return (
                    <LoginForm 
                        key={key}
                        type={value.type} 
                        name={value.field_id}
                        placeholder={value.label} 
                    /> 
                );
        })
    };

    render() {
        return (
            <Page>
                <ToolbarHeader backButton={true} name={Login.displayName} /> 
                <div className="company-form">

                    { this.loginFormInputs() }
                    <p>
                        <Button type="button" onClick={this.login.bind(this)} modifier="large--cta" className="block-btn" >Login</Button>
                    </p>
                </div>
            </Page>
        )
    }
    
}

export default Login;
