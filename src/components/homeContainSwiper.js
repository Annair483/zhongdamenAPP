import React,{Component} from 'react';
import '@/sass/ContainSwiper.scss';
class Swiper extends Component{
    render(){
        let {contain} =this.props
        return(
            <div className="swiper_contain">
                <div className="swiper_wrapper">
                    {
                        contain.map(val=>(
                            <div className="swiper_slide" key={val.goods_id}>
                                <a href="javascript:;">
                                    <div className="slide_imgbox"><img src={val.goods_image_url} /></div>
                                    <div className="slide_inner">{val.goods_name}</div>
                                    <p>{'¥'+val.goods_promotion_price}</p>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default Swiper;