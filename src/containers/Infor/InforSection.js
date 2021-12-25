import React, { Component } from 'react'
import './InforSection.scss'
import mden from '../../assets/mden.jpg'
import blog_2 from '../../assets/blog_2.jpg'
import latest_1 from '../../assets/latest_1.jpg'
import gallery_1 from '../../assets/gallery_1.jpg'
import gallery_2 from '../../assets/gallery_2.jpg'
import gallery_3 from '../../assets/gallery_3.jpg'
import gallery_4 from '../../assets/gallery_4.jpg'
import gallery_5 from '../../assets/gallery_5.jpg'
import gallery_6 from '../../assets/gallery_6.jpg'

import { connect } from 'react-redux';
import {FormattedMessage}from 'react-intl'
import {LANGUAGES} from '../../utils/constant'
import { changeLanguageApp } from '../../store/actions';
 class InforSection extends Component {
     
    handleChangeLanguage=(language)=>{
        this.props.changeLanguageAppRedux(language)
       // khai bao actions
    }
    render() {
        const language=this.props.language
        // console.log('check prop' , this.props);
        return (
            <>
           <div className='infor-container'>
            <div className='infor-container-content'>
            <div className='infor-container-left'>
                <img src={mden}/>
                <ul className='comment'>
                    <li>By Kon Tum Travel</li>
                    <li>Tây Nguyên</li>
                    <li>99 bình luận</li>
                </ul>
                <h2>Tây Nguyên tình nghĩa vơi đầy</h2>
                <p>Tôi sẽ kể cho bạn nghe về chuyến đi đầy thơ mộng, bình dị của mình ở Tây Nguyên yêu dấu. Nơi ấy đầy nắng, đầy gió, những cảnh đẹp ngút ngàn và nhiều di sản văn hóa độc đáo. Nơi ấy có những nụ cười ấm áp, món ăn tuyệt vời và có cả những trái tim “lạc lối” không muốn quay về…</p>
                <span>Xem Tiếp...</span>
            </div>  
            <div className='infor-container-right'>
           <h3>Thời gian</h3> 
                <ul className='time-line'>
                    <li>
                    Tháng 1,2021
                    </li>
                    <li>
                    Tháng 2,2021
                    </li>
                    <li>
                    Tháng 3,2021
                    </li>
                    <li>
                    Tháng 4,2021
                    </li>
                </ul>
                <h3 className='danhmuc'>Danh mục</h3> 
                <ul className='time-line'>
                    <li>
                   Măng Đen
                    </li>
                    <li>
                    Kon Tum
                    </li>
                    <li>
                    Nhà thờ gỗ
                    </li>
                    <li>
                    Cầu treo Kon Klor
                    </li>
                    <li>
                    Sông Đăk Bla
                    </li>
                   
                </ul>
            </div>
            </div>
            <div className='infor-container-content1'>
            <div className='infor-container-left'>
                <img src={blog_2}/>
                <ul className='comment'>
                    <li>By Kon Tum Travel</li>
                    <li>Miền Bắc</li>
                    <li>59 bình luận</li>
                </ul>
                <h2>Một hành trình ba điểm đến phương bắc</h2>
                <p>Chỉ một hành trình, du khách có thể khám phá đến ba di sản nổi tiếng của Việt Nam: vịnh Hạ Long, Tràng An và thành nhà Hồ… Đặc biệt, dịch vụ nghỉ dưỡng cao cấp, sự kết hợp của Vietravel cùng hãng hàng không Bambo Airways đã mang đến cho bạn mức giá tốt nhất trong mùa hè này.</p>
                <span>Xem Tiếp...</span>
            </div>  
            <div className='infor-container-right'>
           <h3>Bài viết mới nhất</h3> 
                <ul className='time-line'>
                    <li >
                    <img src={gallery_2}/>
                   <span className='diadiem'> Địa điểm du lịch hot ở Kon Tum</span>
                    </li>
                    <li>
                    <img src={gallery_3}/>
                    <span className='diadiem'> Cẩm nang du lịch Kon Tum</span>
                    </li>
                    <li>
                    <img src={gallery_1}/>
                    <span className='diadiem'>Các địa điểm du lịch Kon Tum</span>
                    </li>
                   
                </ul>
                <h3 className='danhmuc'>Bộ sưu tập</h3> 
                <div className='time-line1'>
                    <div className='line-one'>
                    <img src={gallery_3}/>

                    </div>
                   
                    <div className='line-two'>
                    <img src={gallery_4}/>
                    </div>
                    <div className='line-three'>
                    <img src={gallery_6}/>
                    </div>
                
                   
                </div>
                <ul className='time-line2'>
                <div className='line-one'>
                    <img src={gallery_2}/>

                    </div>
                   
                    <div className='line-two'>
                    <img src={gallery_5}/>
                    </div>
                    <div className='line-three'>
                    <img src={gallery_1}/>
                    </div>
                   
                </ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(InforSection);
