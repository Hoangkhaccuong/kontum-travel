import React, { Component } from 'react';
import { connect } from 'react-redux';
import offers_slide1 from '../../assets/offers_slide1.jpg'
import HomeHeader from '../HomePage/HomeHeader';
import IntroProduct from '../Introduce/IntroProduct';
import Footer from '../HomePage/Footer';
import FormContact from './FormContact';
class Contact extends Component {


    render() {
        return (
            <div>
              <HomeHeader/>
                <IntroProduct title="Liên Hệ" anh={offers_slide1}/>
               <FormContact/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
