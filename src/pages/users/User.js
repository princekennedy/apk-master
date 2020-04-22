import React ,{Component} from "react";

class User  extends Component{

    constructor (){
        super();

        this.pushUp = this.pushUp.bind(this);
        this.state = {
            "numbers" : [1,2,3,4,5,6,7]
        }
    }

    async ajax(){
    	const response = await fetch("http://localhost/api");
    	const data = await response;
        console.log("-----------");
    	console.log(data);
    }


    pushUp(){
        this.state.numbers.push(this.state.numbers.length +1);
        this.setState({"numbers" : this.state.numbers });
    };
    
    listItems = function(){
    	this.ajax();
        return this.state.numbers.map( num => {
            return (
            	<li key={num.toString()} onClick={this.pushUp}>
                    {num}
            	</li>
            )
        });
    };
 

    render() {
        return (
            <div>
                <h2>Users</h2>
                <ul>{this.listItems()}</ul>
            </div >
        )
    }
    

}

export default User;