import React, { Component } from 'react';
import { connect } from 'react-redux';
import IntroProduct from './IntroProduct';
import about_slide from '../../assets/about_slide.jpg'
import Footer from '../HomePage/Footer';
import HomeHeader from '../HomePage/HomeHeader';
import AboutUs from './AboutUs';
import Statistic from './Statistic';
class Introduce extends Component {

    render() {
        return (
            <div>
                <HomeHeader/>
                <IntroProduct title="Giới Thiệu" anh={about_slide}/>
                <AboutUs />
                <Statistic/>
                <Footer/>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Introduce);
