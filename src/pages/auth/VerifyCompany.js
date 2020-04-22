import React ,{Component} from "react";
import ApiCall from "../../services/ApiCall";
import css from "./Login.css";
import $ from "jquery";
import {
    Page,
    Input,
    ProgressCircular, 
    Button, 
    Icon,
} from 'react-onsenui';
import {Ons} from "../../components/components";
import {Login} from "../../router";


class VerityCompany  extends Component{
    
    static displayName = 'Verify Company';
    
    apiCall = new ApiCall; 
    state = {
        company: '',
        dataToNewState: {},
        currentState: false,
        url: "http://10.0.18.33:82",
        sideNav:false
    };

    constructor(props) {
        super(props);
    }
    
    handleChange(event) {
        this.setState({company: $("#company").val()});
        if($("#url").val() != "" ){
            this.setState({url: $("#url").val()});
        }
    }

    // CallBack function for verifying company api call
    // Change state dataToNewState and Load Login
    verifyCompany(response){
        if (response.data.form_data.length > 0 ) {
            response.url = this.state.url;
            this.props.navigator.setState(response)
            this.pushPage(Login)
        }else{
            Ons.notification.alert("No company registered by this Name");
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        var req = this.apiCall.ajaxGet(
            this.state.url.trim() + "/api/users",
            {"company": this.state.company} ,
            this.verifyCompany.bind(this)
        );

        if(req){
            req.then(error=>{
                if(error == false){
                    Ons.notification.alert("Server not found!");
                }
            });
        }
    }

    pushPage(newComponent) {
        this.props.navigator.pushPage({component: newComponent});
    }

    popPage() {
        this.props.navigator.popPage();
    }

    render() {
        
        return (
            <Page>
                {/* <ToolbarHeader backButton={false} name={VerityCompany.displayName} />  */}
                {/* <ProgressCircular indeterminate /> */}
                <div className="company-form"> 
                    <p >
                        <Input
                            onChange={this.handleChange.bind(this) }
                            modifier='material'
                            className="block-input"
                            id='url'
                            placeholder='Base url' />
                    </p>
                    <p>
                        <Input
                            onChange={this.handleChange.bind(this) }
                            modifier='material'
                            className="block-input"
                            id='company'
                            placeholder='Company' />
                    </p>
                    <p>
                        <Button onClick={this.handleSubmit.bind(this)} modifier="large--cta" className="block-btn">Verify</Button>
                        <Icon size="30px" spin icon="md-spinner"></Icon>

                    </p>
                </div>
            </Page>   
        )
    }
    
}

export default VerityCompany;
{/* <SearchInput
value={this.state.text}
onChange={(event) => { this.setState({text: event.target.value})} }
modifier='material'
placeholder='Username' /> */}