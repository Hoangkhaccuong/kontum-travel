import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../HomePage/HomeHeader';
import offers_slide from '../../assets/offers_slide.jpg'
import Footer from '../HomePage/Footer';
import IntroProduct from '../Introduce/IntroProduct'
import Content from './Content';
class Pereferential extends Component {

    render() {
        return (
            <div>
                <HomeHeader/>
                <IntroProduct title="Ưu Đãi" anh={offers_slide}/>
                <Content/>
                {/* <Footer/> */}
                {/* <Banners/>
                <TravelAdd/>
                <Section></Section>
                <Offer/>
                <Customer/>
                <Hotel/> */}
                {/* <Footer/> */}

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

export default connect(mapStateToProps, mapDispatchToProps)(Pereferential);
