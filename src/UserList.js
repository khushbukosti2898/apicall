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
        //console.log(response.data.data[0].id);
        this.setState({
          users:response.data.data
        })
        //console.log(this.state.users);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
}
  render(){
      return ( 
      <div className="userlist">
                  USER List
                  { this.state.users.map(user => 
                  <button key={user.id} className="btn" onClick={() => this.props.updateId(user.id)}>
                    {user.first_name+" "+user.last_name}
                  </button>)}
                </div>
              
    )}
}

export default UserList;
