import React from 'react';
import {Navigator} from 'react-onsenui';
// Learn more about the Navigator: https://www.npmjs.com/package/react.cordova-navigation_controller
import './app.css';
// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import {Home} from "./router";
export default class App extends React.Component {

  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;
    return React.createElement(route.component, props );
  }

  render() {
    return (

        <Navigator
          initialRoute={{component: Home}}
          key="app"
          renderPage={this.renderPage}/>
    );
  }


}






//       <Page>
//         <Toolbar>

//           <div className='left'>
//             <BackButton onClick={this.handleClick.bind(this)}>
//               Back
//             </BackButton>
//           </div>
//           <div className='center'>Back button</div>
//         </Toolbar>
//         <hr />
//         <hr />
//         <hr />
//         <hr />
//         <hr />
//         <h1> Hello </h1>
//         <ProgressBar value={55} secondaryValue={87} />
// <ProgressBar indeterminate />
// // <div className='myList'>
// //      <Ripple color='red' />hh
// //    </div>
//         <Checkbox
//   modifier='material' />

//   <Select modifier="material"
//   value={this.state.value}
//   onChange={(event) => this.setState({value: event.target.value})}>
//   <option value="1">1</option>
//   <option value="2">2nd</option>
//   <option value="3">3rd option</option>
// </Select>


// <template id="page2.html">
//   <ons-page>
//     hello
//   </ons-page>
// </template>


//         <AlertDialog  isOpen={this.state.isOpen} animation='default'
//           animationOptions={{
//             duration: 1.0,
//             delay: 0.3,
//             timing: 'ease-in'
//           }}

//           onCancel={this.handleCancel.bind(this)} isCancelable={false} >
//           <div className="alert-dialog-title">Warning!</div>
//           <div className="alert-dialog-content">
//             An error has occurred!
//           </div>
//           <div className="alert-dialog-footer">
//             <button onClick={this.handleCancel.bind(this)} className="alert-dialog-button">
//               Cancel
//             </button>
//             <button onClick={this.handleCancel.bind(this)} className="alert-dialog-button">
//               Ok
//             </button>
//           </div>
//         </AlertDialog>
      

//       </Page>
