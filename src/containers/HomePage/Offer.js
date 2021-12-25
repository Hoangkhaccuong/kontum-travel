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
                        <h2><FormattedMessage id="offer.uudai"/></h2>
                    </div>
                    <div className='center-content'>
                        <div className='mangden-content'>
                            <div className='mangden-left'>
                                <img src={mden}/>
                            </div>
                            <div className='mangden-right'>
                                <h2 ><FormattedMessage id="traveladd.price1"/></h2>
                                <p>
                                <FormattedMessage id="offer.title"/>
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
                            <h2 ><FormattedMessage id="traveladd.price1"/></h2>
                                <p>
                                <FormattedMessage id="offer.title1"/>

                                 </p>
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
                            <h2 ><FormattedMessage id="traveladd.price1"/></h2>
                                <p>
                                <FormattedMessage id="offer.title2"/>                                 </p>
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
                            <h2 ><FormattedMessage id="traveladd.price1"/></h2>
                                <p>
                                <FormattedMessage id="offer.title3"/>                                                                   </p>
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
