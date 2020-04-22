import React ,{Component} from "react";
import SideNav from "../../components/nav/SideNav";

const User = props =>
    <tr>
        <td> props.id </td>
        <td> props.firstname </td>
        <td> props.lastname </td>
        <td> props.username </td>
    </tr>;

class Users  extends Component{

    static displayName = 'Users';
    constructor (props){
        super();
        this.pushUp = this.pushUp.bind(this);
        this.state = {
            "numbers": [1,2,3,4,5,6,7],
            "currentState": false
        }
    }

    pushUp(){
        this.state.numbers.push(this.state.numbers.length +1);
        this.setState({"numbers" : this.state.numbers });
    };
    
    users = function(){
        return this.state.numbers.map( num => {
            return (
            	<User id={num} firstname="Prince" lastname="Lastname" username="PK" key={num} />
            )
        });
    };

    render() {

        return (
            <div>
                <h2>Users</h2>
                <table border="2"> 
                    <thead>
                        <tr> 
                            <th> First Name </th>
                            <th> Last Name </th>
                            <th> Username </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.users()}
                    </tbody>
                </table>
            </div>
        )
    }
    

}

export default Users;