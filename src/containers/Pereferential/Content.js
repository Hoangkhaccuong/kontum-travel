import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Content.scss';
import maden from '../../assets/maden.jpg'
import song from '../../assets/song.jpg'
import catreo from '../../assets/catreo.jpg'
import nhatgo from '../../assets/nhatgo.jpg'





import post from '../../assets/post.png'
import sailboat from '../../assets/sailboat.png'
import compass from '../../assets/compass.png'
import bicycle from '../../assets/bicycle.png'
import Footer from '../HomePage/Footer';
class Content extends Component {
    render() {
        return (
            <div className='section-container'>
                                   <h1>Địa điểm yêu thích</h1>

               <div className='section-container-content'>
               <div className='left-content'>
                    <img src={maden}/>
                    <span>Măng Đen</span>
               </div>
               <div className='center-content'>
                   
                <h2>2,000,000đ</h2>
                <p>
                Đây là những Địa điểm du lịch tốt nhất hiện nay của chúng tôi.<br/>
Sẽ làm bạn hài lòng khi đăng ký những Địa điểm dưới đây.
                </p>

                <img src={post}/>
                                <img src={sailboat}/>
                                <img src={compass}/>
                                <img src={bicycle}/>
                                <button className='banner-buttom'>BOOK</button>

               </div>
               <div className='right-content'>
                   <div className='right-content-list'>
                   <h3>Very good</h3>
                    <p>100 lượt xem</p>
                   </div>
                    <div className='right-content-list1'>
                    <span>8.0</span>
                    </div>
                  
               </div>
               </div>
               <div className='section-container-content1'>
               <div className='left-content'>
                    <img src={song}/>
                    <span>Sông Đăk bla</span>
               </div>
               <div className='center-content'>
                   
                <h2>1,000,000đ</h2>
                <p>
                Dòng sông Đăk Bla không chỉ là nguồn cung cấp nước và phù sa trù phú cho công tác sản xuất nông nghiệp của người dân mà còn là một điểm du lịch hấp dẫn đông đảo du khách gần xa tìm đến khi du lịch Kon Tum.
                </p>

                <img src={post}/>
                                <img src={sailboat}/>
                                <img src={compass}/>
                                <img src={bicycle}/>
                                <button className='banner-buttom'>BOOK</button>

               </div>
               <div className='right-content'>
                   <div className='right-content-list'>
                   <h3>Very good</h3>
                    <p>100 lượt xem</p>
                   </div>
                    <div className='right-content-list1'>
                    <span>10.0</span>
                    </div>
                  
               </div>
               </div>
               <div className='section-container-content2'>
               <div className='left-content'>
                    <img src={catreo}/>
                    <span>Cầu Kon Klor</span>
               </div>
               <div className='center-content'>
                   
                <h2>1,500,000đ</h2>
                <p>
                Nhắc đến các điểm tham quan nổi tiếng của du lịch Kon Tum, cầu treo Kon Klor - cây cầu nối liền hai bờ sông Đăk Bla huyền thoại cũng là một địa điểm không thể thiếu.
                </p>

                <img src={post}/>
                                <img src={sailboat}/>
                                <img src={compass}/>
                                <img src={bicycle}/>
                                <button className='banner-buttom'>BOOK</button>

               </div>
               <div className='right-content'>
                   <div className='right-content-list'>
                   <h3>Very good</h3>
                    <p>100 lượt xem</p>
                   </div>
                    <div className='right-content-list1'>
                    <span>9.0</span>
                    </div>
                  
               </div>
               </div>
               <div className='section-container-content3'>
               <div className='left-content'>
                    <img src={nhatgo}/>
                    <span>Nhà thờ gỗ</span>
               </div>
               <div className='center-content'>
                   
                <h2>999,999đ</h2>
                <p>
                Nhà thờ gỗ thật sự là một kiệt tác kiển trúc vô cùng độc đáo của du lịch Kon Tum mà chúng ta khó có thể tìm thấy ở nơi nào khác. Công trình này được thiết kế theo kiến trúc Roman.
                </p>

                <img src={post}/>
                                <img src={sailboat}/>
                                <img src={compass}/>
                                <img src={bicycle}/>
                                <button className='banner-buttom'>BOOK</button>

               </div>
               <div className='right-content'>
                   <div className='right-content-list'>
                   <h3>Very good</h3>
                    <p>100 lượt xem</p>
                   </div>
                    <div className='right-content-list1'>
                    <span>8.0</span>
                    </div>
                  
               </div>
               </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Content);
