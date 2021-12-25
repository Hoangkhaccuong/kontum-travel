import React, { Component } from 'react'
import './Customer.scss'
import { connect } from 'react-redux';
import test from '../../assets/test.jpg'
import hyen from '../../assets/hyen.jpg'
import tthanh from '../../assets/tthanh.jpg'
import {FormattedMessage}from 'react-intl'
import {LANGUAGES} from '../../utils/constant'
import { changeLanguageApp } from '../../store/actions';
 class Customer extends Component {
     
    handleChangeLanguage=(language)=>{
        this.props.changeLanguageAppRedux(language)
       // khai bao actions
    }
    render() {
        const language=this.props.language
        // console.log('check prop' , this.props);
        return (
            <>
            <div className='customer-container'>
                <div className='customer-container-content'>
                    <div className='top-content'>
                        <h1>
                        KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI?
                        </h1>
                    </div>
                    <div className='bottom-content'>
                        <div className='bottom-content-list'>
                           <div className='list-item'>
                                <div className='list-item-img'>
                                    <img src={test}/>
                                    <div className='list-item-title'>
                                    <h5>" Kỳ nghỉ thật tuyệt !!! "</h5>

                                    <p>Các thắng cảnh thật đẹp, khiến tôi không thể quên
                                            được. Tôi rất hài lòng về dịch cụ của Kon Tum Travel</p>
                                            <span>Trường Giang
                                              <p>12-04-2021</p>  
                                            </span>
                                </div>
                                </div>
                           </div>
                           <div className='list-item'>
                                <div className='list-item-img'>
                                    <img src={hyen}/>
                                    <div className='list-item-title'>
                                    <h5>" Kỳ nghỉ thật tuyệt !!! "</h5>

                                    <p>Các thắng cảnh thật đẹp, khiến tôi không thể quên
                                            được. Tôi rất hài lòng về dịch cụ của Kon Tum Travel</p>
                                            <span>Hoàng Yến 
                                              <p>12-04-2021</p>  
                                            </span>
                                </div>
                                </div>
                           </div>
                           <div className='list-item'>
                                <div className='list-item-img'>
                                    <img src={tthanh}/>
                                    <div className='list-item-title'>
                                    <h5>" Kỳ nghỉ thật tuyệt !!! "</h5>

                                    <p>Các thắng cảnh thật đẹp, khiến tôi không thể quên
                                            được. Tôi rất hài lòng về dịch cụ của Kon Tum Travel</p>
                                            <span>Trấn Thành
                                              <p>12-04-2021</p>  
                                            </span>
                                            
                                </div>
                                </div>
                           </div>
                           
                           
                        </div>
                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Customer);
