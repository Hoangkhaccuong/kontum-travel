import React, { Component } from 'react'
import './Section.scss'
import mden from '../../assets/mden.jpg'
import nhathogo from '../../assets/nhathogo.jpg'
import cautreo from '../../assets/cautreo.jpg'
import { connect } from 'react-redux';
import {FormattedMessage}from 'react-intl'
import {LANGUAGES} from '../../utils/constant'
import { changeLanguageApp } from '../../store/actions';
 class Section extends Component {
     
    handleChangeLanguage=(language)=>{
        this.props.changeLanguageAppRedux(language)
       // khai bao actions
    }
    render() {
        const language=this.props.language
        // console.log('check prop' , this.props);
        return (
          <>
          <div className='section-out'>

            <div className='section-in'>
                <h1><FormattedMessage id="sectionadd.addsang"/></h1>
                <p>
                <FormattedMessage id="sectionadd.addtitle"/>
                </p>
                <button className='banner-buttom1'>  <FormattedMessage id="sectionadd.seemore"/></button>

            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Section);
