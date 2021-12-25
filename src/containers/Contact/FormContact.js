import React, { Component } from 'react'
import './FormContact.scss'
import { connect } from 'react-redux';
import test from '../../assets/test.jpg'
import {FormattedMessage}from 'react-intl'
import {LANGUAGES} from '../../utils/constant'
import { changeLanguageApp } from '../../store/actions';
 class FormContact extends Component {
     
    handleChangeLanguage=(language)=>{
        this.props.changeLanguageAppRedux(language)
       // khai bao actions
    }
    render() {
        const language=this.props.language
        // console.log('check prop' , this.props);
        return (
            <>
           
           <div className="form">
        <form action id="form1">
          <input type="text" id="fname" name="fname" placeholder="Họ tên" /><br />
          <input type="text" id="femail" name="femail" placeholder="Địa chỉ Email" /><br />
          <input type="text" id="fcontent" name="fcontent" placeholder="Nội dung yêu cầu" /><br />
          <input type="submit" defaultValue="Gửi yêu cầu" />
        </form>
      </div>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language:state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux:(language)=>dispatch(changeLanguageApp(language))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormContact);
