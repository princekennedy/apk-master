import React ,{Component} from "react";
import $ from "jquery";


export default class ApiCall extends React.Component {

	apiCallResponseBefore = {
        "data" : {},
		"error" : [],
		"success" : []
    };
    
    // API call 
    // Params ( url , Data Object)
    // Methos Get
    // return get url with params
    pushParams4Get(url ,objData){
        url += "?";
        for( let key in objData){
            url += key +"="+ objData[key] + "&";
        }
        return url;
    }

    // API call 
    // Params ( url , Data Object , callBack)
    // Optional params callBack
    // Methos Post
    // return response and  json to callback function
    async ajaxPost(url ,dataSent,callBack){
    	if(!url) {
    		this.apiCallResponseBefore.error = "No Url found";
    		return this.apiCallResponseBefore;
    	} 

    	const response = await fetch(url, {
            method: 'POST',
            body:JSON.stringify(dataSent)

        }).catch( err => {
            // console.log(err);
            return false;
        });

        if(!response){
            return response;
        }

        const data = await response;
        data.json().then( function (resp){
            if(callBack) callBack(resp); 
        });
        return data;
    }
    
    // API call 
    // Params ( url , Data Object , callBack)
    // Optional params callBack
    // Methos Get
    // return response and  json to callback function
    async ajaxGet(url ,dataSent,callBack){
        if(!url) {
            this.apiCallResponseBefore.error = "No Url found";
            return this.apiCallResponseBefore;
        }
        url = this.pushParams4Get(url , dataSent);
        const response = await fetch(url, {
            method: 'GET',
            data:JSON.stringify(dataSent)
        }).catch( err => {
                // console.log(err);
                return false;
        });

        if(!response){
            return response;
        }

        const data = await response;
        data.json().then( function (resp){
            if(callBack) callBack(resp); 
        });
        return data;
    }

// headers: {
//     'Accept': 'application/json',
//     'Access-Control-Allow-Origin' : '*',
//     'Content-Type': 'application/json',
// }
}