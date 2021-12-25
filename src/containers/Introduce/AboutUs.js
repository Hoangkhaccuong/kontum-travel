import React, { Component } from 'react'
import './AboutUs.scss'
import intro from '../../assets/intro.png'
import { connect } from 'react-redux';
import {FormattedMessage}from 'react-intl'
import {LANGUAGES} from '../../utils/constant'
import { changeLanguageApp } from '../../store/actions';
 class AboutUs extends Component {
     
    handleChangeLanguage=(language)=>{
        this.props.changeLanguageAppRedux(language)
       // khai bao actions
    }
    render() {
        const language=this.props.language
        // console.log('check prop' , this.props);
        return (
            <>
            <div className='about-content'>
                <div className='left-content'>
                    <img src={intro}/>
                </div>
                <div className='right-content'>
                <h1>VỀ CHÚNG TÔI</h1>
                <p>Kon Tum travel là trang website bán tour du lịch hàng đầu Việt Nam, với tiêu chí tour không hoàn, không hủy, không thay đổi lịch trình. Gía cả tốt nhất thị trường hơn hết đảm bảo cho du khách có những trải nghiệm thú vị nhất, dịch dụ chuyên nghiệp nhất khi mua tour tại đây. Kon Tum travel phục vụ du khách đi tham quan du lịch trên cả 5 châu, du lịch ra nước ngoài tại đây rất được khách hàng tin tưởng và đánh giá cao.</p>
                <button className='banner-buttom'>Đọc Thêm</button>

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
export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
