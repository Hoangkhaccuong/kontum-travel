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
                <h1>Địa điểm du lịch Kon Tum sang trọng</h1>
                <p>
                Tour du lịch Kon Tum 4 ngày 3 đêm đưa du khách đến với một thành
                                phố thuộc vùng Bắc Tây Nguyên, Việt Nam. Đây là trung tâm kinh tế, văn hoá, giáo dục, khoa
                                học và công nghệ lớn của khu vực Tây Nguyên.
                </p>
                <button className='banner-buttom'> Xem Thêm</button>

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
