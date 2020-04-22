import React ,{Component} from "react";
import ApiCall , {apiCallResponseAfter} from "../../services/ApiCall";
import {ToolbarHeader,SideNav ,SplitterPage , Welcome, Ons } from "../../components/components";
import { VerifyCompany } from "../../router";
// import {About} from "../../router";

class Home  extends Component {

    static displayName = 'Home Page';
    state = {
        company: '',
        currentState: false,
        sideNav:false
    };
    apiCall = new ApiCall; 

    constructor(props) {
        super(props);
        if ( !this.props.navigator.state.company)
            this.pushPage(VerifyCompany)
    }

    componentDidMount = () => {
        // if ( !this.props.navigator.state.company)
        //     this.pushPage(VerifyCompany)
    }

    pushPage(newComponent) {
        this.props.navigator.pushPage({component: newComponent});
    }

    toolBarBtn(){
        this.setState({sideNav : true });
    }

    render (){
        // navigator.app.exitApp();
        return (
          <SplitterPage 
            nav= {<SideNav side="right" sideNavTitle={false} pushPage={this.pushPage.bind(this)} />} 
            sideNav= {this.state.sideNav} 
            header= {
                <ToolbarHeader 
                    toolBarBtnCallBack={this.toolBarBtn.bind(this)} 
                    toolBarBtn={true} 
                    backButton={false} 
                    name="Home" /> 
                }
            body={ <Welcome />} 
            />
        );
    }

}

export default Home;

// navigator.app.exitApp();
// cameraSuccess(s){
//     Ons.notification.alert(s)
//     navigator.camera.getPicture(this.cameraSuccess ,this.cameraError);
// }

// cameraError(e){
//     Ons.notification.alert(e)
// }
// ons.ready(function() {
//     // To disable a navigator back button handler
//     navigator.getDeviceBackButtonHandler().disable();
    
//     // Or to change the behavior
//     navigator.getDeviceBackButtonHandler().setListener(function(event) {
//     console.log("back button pressed")});
//     }
//     Or
    
//     <ons-page on-device-backbutton="doSomething()">
//     Some page content
//     </ons-page>