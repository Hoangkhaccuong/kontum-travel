import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Banners from './Banners';
import TravelAdd from './TravelAdd';
import Section from './Section';
import Offer from './Offer';
import Customer from './Customer';
import Hotel from './Hotel';
import Footer from './Footer';
class HomePage extends Component {

    render() {
        return (
            <div>
                <HomeHeader/>
                <Banners/>
                <TravelAdd/>
                <Section></Section>
                <Offer/>
                <Customer/>
                <Hotel/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
