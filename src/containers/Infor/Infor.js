import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../HomePage/HomeHeader';
import IntroProduct from '../Introduce/IntroProduct';
import offers_slide1 from '../../assets/offers_slide1.jpg'
import InforSection from './InforSection';
import Footer from '../HomePage/Footer';
class Infor extends Component {


    render() {
        return (
            <div>
              <HomeHeader/>
                <IntroProduct title="Tin Tức" anh={offers_slide1}/>
                <InforSection/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Infor);
