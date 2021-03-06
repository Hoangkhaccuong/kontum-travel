import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../System/userManage.scss'
import {getAllUser}from '../../services/userService'
class UserManage extends Component {
    constructor(props){
        super(props)
        this.state={
            arrUsers:[]
            
        }
    }
    state = {

    }

    async componentDidMount () {
        let response=await getAllUser('ALL')
        if(response && response.errCode === 0){
            this.setState({
                arrUsers:response.users
            },()=>{
            })
        }
    }


    render() {
        console.log('check render', this.state);
        let arrUsers=this.state.arrUsers
        return (
            <div className="users-center">
            <div className="title text-center">
                Manage Users 
                </div>
                <div className="user-table mt-3 mx-1">
                <table id="customers">
  <tr>
    <th>Email</th>
    <th>First name</th>
    <th>Last name</th>
    <th>Address</th>
    <th>Actions</th>
  </tr>
  
            {arrUsers&&arrUsers.map((item,index)=>{
                    return (
                        <>
                        <tr>
                            <td>
                            {item.email}
                            </td>
                             <td>
                            {item.firstName}
                            </td>
                             <td>
                            {item.lastName}
                            </td>
                            <td>
                            {item.address}
                            </td>
                            
                            <td>
                            <button className="btn-edit"><i className="fas fa-user-edit"></i></button>
                            <button className="btn-delete"><i className="far fa-trash-alt"></i></button>

                            </td>
                            </tr>
                        </>
                    )
            })}
  
  

</table>
                </div>
            </div>
           
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
