import React, { Component } from 'react'
import './Banners.scss'
import mangden1 from '../../assets/mangden1.jpg'
import cautreo1 from '../../assets/cautreo1.jpg'
import nhatgo from '../../assets/nhatgo.jpg'

import { connect } from 'react-redux';
import {FormattedMessage}from 'react-intl'
import {LANGUAGES} from '../../utils/constant'
import { changeLanguageApp } from '../../store/actions';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

 class Banners extends Component {
     
    handleChangeLanguage=(language)=>{
        this.props.changeLanguageAppRedux(language)
       // khai bao actions
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        const language=this.props.language
        // console.log('check prop' , this.props);
        return (
            <Slider {...settings}>
      <div className='banner-img'>
        <img src={mangden1}/>
        <h4 className='title-banner'><FormattedMessage id="banner.MangDen"/></h4>
        <button className='banner-buttom'><FormattedMessage id="banner.Watchnow"/></button>

      </div>
      <div className='banner-img'>
        <img src={cautreo1}/>
        <h4 className='title-banner'><FormattedMessage id="banner.bridge"/></h4>
        <button className='banner-buttom'><FormattedMessage id="banner.Watchnow"/></button>

      </div>
      <div className='banner-img'>
        <img src={nhatgo}/>
        <h4 className='title-banner'><FormattedMessage id="banner.woodenchurch"/></h4>
        <button className='banner-buttom'><FormattedMessage id="banner.Watchnow"/></button>

      </div>
    </Slider>
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
export default connect(mapStateToProps, mapDispatchToProps)(Banners);
