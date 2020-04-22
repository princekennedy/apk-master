import React from "react";
import {
    Toolbar,
    BackButton,
    ToolbarButton,
    Icon,
    List,
    ListItem
} from 'react-onsenui'; // Only import the necessary components
// import * as Ons from 'react-onsenui'; // Import everything and use it as 'Ons.Page', 'Ons.Button'

const ToolbarHeader = props => (
    <div>
        <Toolbar>
            { 
                (props.toolBarBtn)? (
                    <div className='left' onClick ={(props.toolBarBtnCallBack)? props.toolBarBtnCallBack : null}>
                        <ToolbarButton >
                            <Icon icon="md-menu"></Icon>
                        </ToolbarButton>
                    </div>
                ):(null)
            }
            {
                (props.backButton)? (
                    <div className='left'>
                        <BackButton>
                            Back
                        </BackButton>
                    </div>
                ):(null)
            }
        <div className='center'>
            {props.name}
        </div>
        </Toolbar>
        <List>
            <ListItem modifier='longdivider'></ListItem>
        </List>
    </div>
);
export default ToolbarHeader;
