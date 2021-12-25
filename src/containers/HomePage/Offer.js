import React, { Component } from 'react'
import './Offer.scss'
import mden from '../../assets/mden.jpg'
import song from '../../assets/song.jpg'
import catreo from '../../assets/catreo.jpg'
import nhathogo from '../../assets/nhathogo.jpg'

import post from '../../assets/post.png'
import sailboat from '../../assets/sailboat.png'
import compass from '../../assets/compass.png'
import bicycle from '../../assets/bicycle.png'
import { connect } from 'react-redux';
import {FormattedMessage}from 'react-intl'
import {LANGUAGES} from '../../utils/constant'
import { changeLanguageApp } from '../../store/actions';
 class Offer extends Component {
     
    handleChangeLanguage=(language)=>{
        this.props.changeLanguageAppRedux(language)
       // khai bao actions
    }
    render() {
        const language=this.props.language
        // console.log('check prop' , this.props);
        return (
            <>
            <div className='offer-container'>
                <div className='offer-container-content'>
                    <div className='top-content'>
                        <h2>CÁC ƯU ĐÃI TỐI NHẤT</h2>
                    </div>
                    <div className='center-content'>
                        <div className='mangden-content'>
                            <div className='mangden-left'>
                                <img src={mden}/>
                            </div>
                            <div className='mangden-right'>
                                <h2 >2,000,000đ</h2>
                                <p>
                                Địa điểm du lịch Măng Đen - Măng Đen sẽ đưa bạn đến thăm thung lũng Măng Đen yên bình trong sớm mai,
                                </p>
                                <img src={post}/>
                                <img src={sailboat}/>
                                <img src={compass}/>
                                <img src={bicycle}/>


                            </div>
                        </div>
                        <div className='dakbla-content'>
                            <div className='dakbla-left'>
                                <img src={song}/>
                            </div>
                            <div className='dakbla-right'>
                                <h2 >2,000,000đ</h2>
                                <p>
                                Dòng sông Đăk Bla không chỉ là nguồn cung cấp nước và phù sa trù phú cho công tác sản xuất nông nghiệp của người dân mà còn là một điểm du lịch hấp dẫn đông đảo du khách gần xa tìm đến khi du lịch Kon Tum.                                </p>
                                <img src={post}/>
                                <img src={sailboat}/>
                                <img src={compass}/>
                                <img src={bicycle}/>


                            </div>
                        </div>
                    </div>
                    <div className='bottom-content'>
                        <div className='mangden-content'>
                            <div className='mangden-left'>
                                <img src={catreo}/>
                            </div>
                            <div className='mangden-right'>
                                <h2 >2,000,000đ</h2>
                                <p>
                                Nhắc đến các điểm tham quan nổi tiếng của du lịch Kon Tum, cầu treo Kon Klor - cây cầu nối liền hai bờ sông Đăk Bla huyền thoại cũng là một địa điểm không thể thiếu.                                </p>
                                <img src={post}/>
                                <img src={sailboat}/>
                                <img src={compass}/>
                                <img src={bicycle}/>


                            </div>
                        </div>
                        <div className='dakbla-content'>
                            <div className='dakbla-left'>
                                <img src={nhathogo}/>
                            </div>
                            <div className='dakbla-right'>
                                <h2 >2,000,000đ</h2>
                                <p>
                                Nhà thờ gỗ thật sự là một kiệt tác kiển trúc vô cùng độc đáo của du lịch Kon Tum mà chúng ta khó có thể tìm thấy ở nơi nào khác. Công trình này được thiết kế theo kiến trúc Roman.                                 </p>
                                <img src={post}/>
                                <img src={sailboat}/>
                                <img src={compass}/>
                                <img src={bicycle}/>


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
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
