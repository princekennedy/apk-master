import React from 'react';
import {Navigator, Page, Button, Toolbar, BackButton} from 'react-onsenui';

import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import About from "./pages/about/About";
import Login from "./pages/auth/Login";
import VerifyCompany from "./pages/auth/VerifyCompany";

export {
	Home,
	Users,
	About,
	Login,
	VerifyCompany,
};
// export default class Router extends React.Component {
//   renderPage(route, navigator) {
//     const props = route.props || {};
//     props.navigator = navigator;
//     return React.createElement(route.component, props);
//   }

//   render() {
//     return (
//       <Navigator
//         initialRoute={{component: Home}}
//         renderPage={this.renderPage}
//       />
//     );
//   }
// }








// class MainPage extends React.Component {
//   pushPage() {
//     this.props.navigator.pushPage({component: SecondPage});
//   }

//   render() {
//     return (
//       <Page>
//         <Toolbar>
//           <div className="center">Navigator OKy</div>
//         </Toolbar>
//           <hr/>
//           <hr/>
//           <hr/>
//           <hr/>
//         <p style={{textAlign: 'center'}}>
//           <Button onClick={this.pushPage.bind(this)}>Push page</Button>
//         </p>
//       </Page>
//     );
//   }
// }

// class SecondPage extends React.Component {
//   pushPage() {
//     this.props.navigator.pushPage({component: SecondPage});
//   }

//   popPage() {
//     this.props.navigator.popPage();
//   }

//   render() {
//     return (
//       <Page>
//         <Toolbar>
//           <div className="left"><BackButton>Back</BackButton></div>
//           <div className="center">Another page</div>
//         </Toolbar>

//         <p style={{textAlign: 'center'}}>
//           <Button onClick={this.pushPage.bind(this)}>Push page</Button>
//           <Button onClick={this.popPage.bind(this)}>Pop page</Button>
//         </p>
//       </Page>
//     );
//   }
// }