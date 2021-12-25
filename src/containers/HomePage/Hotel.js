import React, { Component } from 'react'
import './Hotel.scss'
import mden from '../../assets/mden.jpg'
import song from '../../assets/song.jpg'
import catreo from '../../assets/catreo.jpg'
import hotel_1 from '../../assets/hotel_1.jpg'
import hotel_2 from '../../assets/hotel_2.jpg'
import hotel_3 from '../../assets/hotel_3.jpg'
import hotel_4 from '../../assets/hotel_4.jpg'
import { connect } from 'react-redux';
import {FormattedMessage}from 'react-intl'
import {LANGUAGES} from '../../utils/constant'
import { changeLanguageApp } from '../../store/actions';
 class Hotel extends Component {
     
    handleChangeLanguage=(language)=>{
        this.props.changeLanguageAppRedux(language)
       // khai bao actions
    }
    render() {
        const language=this.props.language
        // console.log('check prop' , this.props);
        return (
            <>
            <div className='hotel-content'>
                <div className='top-content'>
                    <h1>KHÁCH SẠN ĐƯỢC ƯA THÍCH NHẤT</h1>
                </div>
                <div className='bottom-content'>
                <div className='bottom-content-list'>

                <div className='list-hotel'>
                    <img src={hotel_1}/>
                    </div>
                    <div className='hotel-infor'>
                        <h3>KON TUM PLAZA HOTEL</h3>
                        <p>1,000,000đ</p>
                        <span>KONTUM</span>
                    </div>
                </div>
                 <div className='bottom-content-list'>

                <div className='list-hotel1'>
                    <img src={hotel_2}/>
                    </div>
                    <div className='hotel-infor'>
                        <h3>INDOCHINE HOTEL</h3>
                        <p>1,000,000đ</p>
                        <span>KONTUM</span>
                    </div>
                </div>
                 <div className='bottom-content-list'>

                <div className='list-hotel2'>
                    <img src={hotel_3}/>
                    </div>
                    <div className='hotel-infor'>
                        <h3>
KONKLOR HOTEL</h3>
                        <p>1,000,000đ</p>
                        <span>KONTUM</span>
                    </div>
                </div>
                 <div className='bottom-content-list'>

                <div className='list-hotel3'>
                    <img src={hotel_4}/>
                    </div>
                    <div className='hotel-infor'>
                        <h3>WINDOW HOTEL</h3>
                        <p>1,000,000đ</p>
                        <span>KONTUM</span>
                    </div>
                </div>
                </div>
                <div className='bottom-content'>
                <div className='bottom-content-list'>

                <div className='list-hotel'>
                    <img src={hotel_1}/>
                    </div>
                    <div className='hotel-infor'>
                        <h3>KON TUM PLAZA HOTEL</h3>
                        <p>1,000,000đ</p>
                        <span>KONTUM</span>
                    </div>
                </div>
                 <div className='bottom-content-list'>

                <div className='list-hotel1'>
                    <img src={hotel_2}/>
                    </div>
                    <div className='hotel-infor'>
                        <h3>INDOCHINE HOTEL</h3>
                        <p>1,000,000đ</p>
                        <span>KONTUM</span>
                    </div>
                </div>
                 <div className='bottom-content-list'>

                <div className='list-hotel2'>
                    <img src={hotel_3}/>
                    </div>
                    <div className='hotel-infor'>
                        <h3>KONKLOR HOTEL</h3>
                        <p>1,000,000đ</p>
                        <span>KONTUM</span>
                    </div>
                </div>
                 <div className='bottom-content-list'>

                <div className='list-hotel3'>
                    <img src={hotel_4}/>
                    </div>
                    <div className='hotel-infor'>
                        <h3>WINDOW HOTEL</h3>
                        <p>1,000,000đ</p>
                        <span>KONTUM</span>
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
export default connect(mapStateToProps, mapDispatchToProps)(Hotel);
