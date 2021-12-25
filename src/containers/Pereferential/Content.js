import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Content.scss';
class Content extends Component {
    render() {
        return (
            <div className='content-section'>
                <div className='content-section-top'>

                <div className='top-content'>
                    <ul className='top-content-list'>Giá
                        <li>
                            Hiện tất cả
                        </li>
                        <li>
                            Tăng dần
                        </li>
                        <li>
                           Giảm dần
                        </li>
                    </ul>
                    <ul className='top-content-list'>Giá
                        <li>
                            Hiện tất cả
                        </li>
                        <li>
                            Tăng dần
                        </li>
                        <li>
                           Giảm dần
                        </li>
                    </ul>
                    <ul className='top-content-list'>Giá
                        <li>
                            Hiện tất cả
                        </li>
                        <li>
                            Tăng dần
                        </li>
                        <li>
                           Giảm dần
                        </li>
                    </ul>
                    <ul className='top-content-list'>Giá
                        <li>
                            Hiện tất cả
                        </li>
                        <li>
                            Tăng dần
                        </li>
                        <li>
                           Giảm dần
                        </li>
                    </ul>
                </div>
                <div className='bottom-content'></div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Content);
