import React, { Component } from 'react'
import './Footer.scss'
import logo from '../../assets/logo.png'
import logoft from '../../assets/logoft.jpg'

import { connect } from 'react-redux';
import {FormattedMessage}from 'react-intl'
import {LANGUAGES} from '../../utils/constant'
import { changeLanguageApp } from '../../store/actions';
 class Footer extends Component {
     
    handleChangeLanguage=(language)=>{
        this.props.changeLanguageAppRedux(language)
       // khai bao actions
    }
    render() {
        const language=this.props.language
        // console.log('check prop' , this.props);
        return (
            <>
            <div className='footer-content'>
                 <div className='logo-footer'>
                 <div className='logo-footer-top'>

                    <img src={logo}/>
                    <h1>Kon Tum</h1>
                </div>
                <div className='logo-footer-center'>
                    <p>
                    <FormattedMessage id="footer.title"/>                     </p>
                </div>
                <div className='logo-footer-bottom'>
                    <img src={logo}/>
                    <img src={logo}/>
                    <img src={logo}/>
                </div>
                </div>
                 <div className='infor-footer'>
                    <h3> <FormattedMessage id="footer.infor"/>  </h3>
                    <div className='infor-footer-item'>
                    <div className='img-item'>
                        <img src={logoft}/>
                        </div>
                        <div className='title-item'>
                       <p>
                       <FormattedMessage id="footer.diadiem"/> 
                       </p>
                       <span>
                       01/01/2021
                       </span>
                       </div>
                    </div>
                    <div className='infor-footer-item'>
                    <div className='img-item'>
                        <img src={logoft}/>
                        </div>
                        <div className='title-item'>
                       <p>
                       <FormattedMessage id="footer.diadiem"/> 
                       </p>
                       <span>
                       01/01/2021
                       </span>
                       </div>
                    </div>
                    <div className='infor-footer-item'>
                    <div className='img-item'>
                        <img src={logoft}/>
                        </div>
                        <div className='title-item'>
                       <p>
                       <FormattedMessage id="footer.diadiem"/> 
                       </p>
                       <span>
                       01/01/2021
                       </span>
                       </div>
                    </div>
                    <div className='infor-footer-item'>
                    <div className='img-item'>
                        <img src={logoft}/>
                        </div>
                        <div className='title-item'>
                       <p>
                       <FormattedMessage id="footer.diadiem"/> 
                       </p>
                       <span>
                       01/01/2021
                       </span>
                       </div>
                    </div>
                </div>
                 <div className='tags-footer'>
                     <h3>TAGS</h3>
                        <div className='btn-tags' >
                            <button><FormattedMessage id="banner.MangDen"/></button>
                            <button><FormattedMessage id="banner.woodenchurch"/></button>

                        </div>
                        <div className='btn-tags' >
                            <button>Kon Tum</button>
                            <button><FormattedMessage id="banner.dakbla"/></button>
                        </div>
                        <div className='btn-tags' >
                            <button><FormattedMessage id="banner.MangDen"/></button>
                        </div>
                </div>
                 <div className='contact-footer'>
                     <h3> <FormattedMessage id="footer.contact"/>  </h3>
                        <ul> 
                            <li><FormattedMessage id="footer.add"/></li>
                            <li>+84 975 219 875</li>
                            <li>ktravel@gmail.com</li>
                            <li>http://ktumtravel.vn</li>
                        </ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
