import React from 'react';
import './style.scss'
import './App.css';
import axios from 'axios';


class UserDetail extends React.Component {
  constructor(props){
    super(props);
    this.state={
      users:[]
    }
    
  }
  

  componentDidUpdate(prevProps, prevState){
    const {id}=this.props.data;
    console.log(this.props.data);
    if(prevProps.data.id !== id){
        axios.get(`https://node-fake-api.herokuapp.com/user/${id}`)
      .then(response => {
        this.setState({
          users:response.data.data
        })
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
    }    
    
}


  render(){
      return (<div className="userdetail">
                        USER Details<br/><br/><br/><br/><br/>
                      <table align="center">
                      <tr>
                        <td colSpan="2"><img alt="" src={this.state.users.avatar}></img></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Id:</td>
                        <td>{this.state.users.id}</td>
                      </tr>
                      <tr>
                        <td>Email:</td>
                        <td>{this.state.users.email}</td>
                      </tr>
                      </table>
                </div>
            )}
}

export default UserDetail;
