import React from 'react';
import './style.scss'
import './App.css';
import axios from 'axios';

class UserList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      users:[]
    }
  }
  componentDidMount(){
        axios.get('https://node-fake-api.herokuapp.com/user/')
      .then(response => {
        //console.log(response.data.data);
        this.setState({
          users:response.data.data
        })
        console.log(this.state.users);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  
  render(){
      return ( 
      <div className="userlist">
                  USER List
                  { this.state.users.map(user => 
                  <button className="btn" onClick={}>
                    {user.first_name+" "+user.last_name }
                  </button>)}
               
                </div>
    )}
}

export default UserList;
