import React, { Component } from 'react'
import './Statistic.scss'
import { connect } from 'react-redux';
import {FormattedMessage}from 'react-intl'
import {LANGUAGES} from '../../utils/constant'
import { changeLanguageApp } from '../../store/actions';
 class Statistic extends Component {
     
    handleChangeLanguage=(language)=>{
        this.props.changeLanguageAppRedux(language)
       // khai bao actions
    }
    render() {
        const language=this.props.language
        // console.log('check prop' , this.props);
        return (
            <>
           
      <div className="statistic">
        <div className="box statistic__box">
          <h2>Thống kê theo năm</h2>
          <p className="statistic__text">Thống kê số lượng khách hàng, khách hàng quay lại, các hoạt động và số lượng
            tour giữa năm 2020 và 2021 của chúng tôi</p>
          <div className="statistic__content">
            <div className="statistic__item">
              <div className="stats">
                <div className="stats__icon"><i className="fas fa-user-friends" /></div>
                <div className="stats__content">
                  <div className="stats__number">13456</div>
                  <div className="stats__type">Khách hàng</div>
                </div>
              </div>
              <div className="stats__bar">
                <div className="stats__year">2021 <i className="fas fa-level-down-alt" /></div>
                <div className="stats__bar1" />
                <div className="tooltip bar_1 stats__bar2" title="Tăng 20%" />
              </div>
            </div>
            <div className="statistic__item">
              <div className="stats">
                <div className="stats__icon"><i className="fas fa-hiking" /></div>
                <div className="stats__content">
                  <div className="stats__number">6564</div>
                  <div className="stats__type">Khách hàng quay lại</div>
                </div>
              </div>
              <div className="stats__bar">
                <div className="stats__year">2021 <i className="fas fa-level-down-alt" /></div>
                <div className="stats__bar1" />
                <div className="tooltip bar_2 stats__bar2" title="Giảm 10%" />
              </div>
            </div>
            <div className="statistic__item">
              <div className="stats">
                <div className="stats__icon"><i className="fas fa-umbrella-beach" /></div>
                <div className="stats__content">
                  <div className="stats__number">906</div>
                  <div className="stats__type">Hoạt động</div>
                </div>
              </div>
              <div className="stats__bar">
                <div className="stats__year">2021 <i className="fas fa-level-down-alt" /></div>
                <div className="stats__bar1" />
                <div className="tooltip bar_3 stats__bar2" title="Giảm 7%" />
              </div>
            </div>
            <div className="statistic__item">
              <div className="stats">
                <div className="stats__icon"><i className="fas fa-globe-asia" /></div>
                <div className="stats__content">
                  <div className="stats__number">1320</div>
                  <div className="stats__type">Số lượng tour</div>
                </div>
              </div>
              <div className="stats__bar">
                <div className="stats__year">2021 <i className="fas fa-level-down-alt" /></div>
                <div className="stats__bar1" />
                <div className="tooltip bar_4 stats__bar2" title="Tăng 15%" />
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
export default connect(mapStateToProps, mapDispatchToProps)(Statistic);
