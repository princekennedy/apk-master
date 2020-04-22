import React ,{Component} from "react";
import {
    Splitter,
    SplitterSide,
    Page,
    SplitterContent,
} from 'react-onsenui'; // Only import the necessary components
// import * as Ons from 'react-onsenui'; // Import everything and use it as 'Ons.Page', 'Ons.Button'


const SplitterPage = props => (
    <Page>
    <Splitter> 
     <SplitterSide
        side={ (props.side) ? props.side : "left"}
        width={300}
        collapse={true}
        isOpen={props.sideNav}
        swipeable={true}
        onClose={props.onCloseSideNav}
        onOpen={props.onOpenSideNav}>
        {props.nav}
      </SplitterSide>

      <SplitterContent>
        <Page>
          {props.header}
          {props.body}
        </Page>
      
      </SplitterContent>

    </Splitter>
  </Page>
);
export default SplitterPage;
