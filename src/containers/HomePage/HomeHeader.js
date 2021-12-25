import React, { Component } from 'react'
import './Homeheader.scss'
import mangden from '../../assets/mangden.jpg'
import { connect } from 'react-redux';
import {FormattedMessage}from 'react-intl'
import {LANGUAGES} from '../../utils/constant'
import { changeLanguageApp } from '../../store/actions';
import { BrowserRouter, Link } from 'react-router-dom';
 class HomeHeader extends Component {
     
    handleChangeLanguage=(language)=>{
        this.props.changeLanguageAppRedux(language)
       // khai bao actions
    }
    render() {
        const language=this.props.language
        console.log('check prop' , this.props);
        return (
            <>
            <div className='home-header-container'>
               <div className='home-header-content'>
              <div className='left-content'>
               <div className='header-logo'>
                       </div>
                       <div className='header-logo1'>
                       <Link to='home'>     Kon Tum </Link>
                       </div>
                      
                   </div>
                   
                   <div className='center-content'>
                        <div className='child-content'>
                       <Link to='home'> <FormattedMessage id="home-header.HomePage"/> </Link>
                        </div>
                        <div className='child-content'>
                       <Link to="/gioi-thieu"><FormattedMessage id="home-header.Introduce"/> </Link>
                        </div>
                        <div className='child-content'>
                        <Link to='/uu-dai'><FormattedMessage id="home-header.Preferential"/> </Link>
                        </div>
                        <div className='child-content'>
                        <Link to='/tin-tuc'><FormattedMessage id="home-header.Information"/> </Link>
                        </div>
                        <div className='child-content'>
                        <Link to='/lien-he'><FormattedMessage id="home-header.Contact"/></Link>
                        
                        </div>
                   </div>
                   <div className='right-content'>
                   <form action=""><input className="input_search" type="text" /></form>
                <div className="search__item"><i className="fas fa-search"></i></div>
                <div className={language===LANGUAGES.VI ?'language-vn action' : 'language-vn'}>
                  <span onClick={()=>this.handleChangeLanguage(LANGUAGES.VI)}> VN</span> 
                </div>
                <div className={language===LANGUAGES.EN ?'language-en action' : 'language-en'}>
                <span onClick={()=>this.handleChangeLanguage(LANGUAGES.EN)}> EN</span> 
                </div>
                   </div>
               </div>
            </div>
            {/* <div className='home-header-banner'>
                <div className='banner-top'>
                   <h1><FormattedMessage id="home-header.MangDen"/></h1>
                </div>
                <div className='banner-buttom'>
                    <button><FormattedMessage id="home-header.Watchnow"/></button>
                </div>

            </div> */}
            {/* <div className='home-header-booking'>
                <div className='booking-top'>
                    <ul className='booking-top-list'>
                        <li>Khách sạn</li>
                        <li>Khách sạn</li>
                        <li>Khách sạn</li>
                        <li>Khách sạn</li>
                        <li>Khách sạn</li>
                       
                    </ul>
                </div>
                <div className='booking-bottom'>
                    <label className='bottom-list'> Địa điểm
                        <input/>
                    </label>
                    <label className='bottom-list'> Bắt đầu
                        <input/>
                    </label>
                    <label className='bottom-list'> Kết thúc
                        <input/>
                    </label>
                    <label className='bottom-list'> Người lớn
                        <input/>
                    </label>
                    <label className='bottom-list'> Trẻ em
                        <input/>
                    </label>
                    <button>Tìm kiếm</button>
                </div>
            </div> */}
            {/* <div className='home-header-add'>
                <div className='add-top'>
                    <h1>
                    Những Địa điểm du lịch tốt nhất
                    </h1>
                    <p>
                    Những Địa điểm du lịch tốt nhất
                    </p>
                </div>
                <div className='add-bottom'>
                <div className='add-bottom-list'>
                    
                </div>
                <div className='add-bottom-list'>
                    <img src={mangden}/>
                    <h1>Măng Đen</h1>
                    <p>Giá:1.000.000</p>
                    <div className="rating rating_4">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                <div className='add-bottom-list'>
                    <img src={mangden}/>
                    <h1>Măng Đen</h1>
                    <p>Giá:1.000.000</p>
                    <div className="rating rating_4">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                <div className='add-bottom-list'>
                    <img src={mangden}/>
                    <h1>Măng Đen</h1>
                    <p>Giá:1.000.000</p>
                    <div className="rating rating_4">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                </div>
            </div> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
