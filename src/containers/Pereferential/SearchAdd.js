import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchAdd.scss';
class SearchAdd extends Component {
    render() {
        return (
            <div className='search-content'>
                <div className='from-content'>
                    <label className='add-label'>
                        <h5> Địa điểm</h5>
                        <input/>
                    </label>
                    <label>
                        <h5>Bắt đầu</h5> 
                        <input/>
                    </label>
                    <label>
                        <h5>Kết thúc</h5> 
                        <input/>
                    </label>
                    <label> <h5>Trẻ Em</h5>
                        <input/>
                    </label>
                    <label> <h5>Người lớn</h5>
                        <input/>
                    </label>
                    <button className='banner-buttom'>Tìm Kiếm
                   </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchAdd);
