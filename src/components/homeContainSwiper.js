import React,{Component} from 'react';
import more from './SwiperMorebox.js';
import '@/sass/ContainSwiper.scss';
class Swiper extends Component{
    render(){
        let {contain,goods} =this.props
        return(
            contain? 
            (<div className="swiper_contain">
                <div className="swiper_wrapper">
                    {
                        contain.map(val=>(
                            <div className="swiper_slide" key={val.goods_id}>
                                <a href="javascript:;">
                                    {/* <div className="slide_imgbox"><img src={val.pic_url} /></div> */}
                                    <div className="slide_imgbox"><img src={val.goods_image_url || val.pic_url} /></div>
                                    {val.goods_name? (<div><div className="slide_inner">{val.goods_name}</div><p>{'¥'+val.goods_promotion_price}</p></div>) : <div></div>}
                                </a>
                            </div>
                            )) 
                    }
                    { goods ? (<div className="swipwe_slide" style={{marginRight:'.2rem',width: '2.1rem'}}>
                        <a href="javascript:;" className="block" style={{width:'2.1rem',textAlign:"center"}}>
                            <div className="slide_imgbox morebox" style={{marginTop:"0.24rem",border: ".02rem solid #eee",paddingTop: ".48rem",height: "1.64rem"}}>
                                <div className="slide_inner" style={{marginBottom:'0.12rem',fontSize:'0.24rem',color: '#2C2C2C',}}>查看全部</div>
                                <p className="block" style={{marginLeft:'auto',marginRight:'auto',textAlign:"center",width:"1.2rem",color:'#f00',borderTop:'0.02rem solid #f00',fontSize:'0.24rem'}}>see more</p>
                            </div>
                        </a>
                        </div>) :null}
                </div>
            </div>) :<div></div>
        )
    }
}
export default Swiper;