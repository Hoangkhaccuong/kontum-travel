import React, { Component } from 'react'
import './TravelAdd.scss'
import mden from '../../assets/mden.jpg'
import nhathogo from '../../assets/nhathogo.jpg'
import cautreo from '../../assets/cautreo.jpg'
import { connect } from 'react-redux';
import {FormattedMessage}from 'react-intl'
import {LANGUAGES} from '../../utils/constant'
import { changeLanguageApp } from '../../store/actions';
 class TravelAdd extends Component {
     
    handleChangeLanguage=(language)=>{
        this.props.changeLanguageAppRedux(language)
       // khai bao actions
    }
    render() {
        const language=this.props.language
        // console.log('check prop' , this.props);
        return (
            <>
            <div className='add-content'>
                 <div className='add-top'>
                   <h3>
                   Những Địa điểm du lịch tốt nhất
                   </h3>
                   <p>
                   Đây là những Địa điểm du lịch tốt nhất hiện nay của chúng tôi.
                   <br/>Sẽ làm bạn hài lòng khi đăng ký những Địa điểm dưới đây.
                   </p>
                </div>
                <div className='add-bottom'>
                    <div className='add-bottom-list'>
                        <div className='list-item'>
                             <img src={mden}/>
                            <h3>Măng Đen</h3>
                            <p>Giá:1,000,000đ</p>
                            <button className='banner-buttom'> Xem Ngay</button>
                        </div>
                        <div className='list-item1'>
                             <img src={nhathogo}/>
                            <h3>Nhà thờ gỗ</h3>
                            <p>Giá:1,000,000đ</p>
                            <button className='banner-buttom'> Xem Ngay</button>
                        </div>
                        <div className='list-item2'>
                             <img src={cautreo}/>
                            <h3>Cầu treo Kon Klor</h3>
                            <p>Giá:1,000,000đ</p>
                            <button className='banner-buttom'> Xem Ngay</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(TravelAdd);
