import React,{Component} from 'react';
class Category extends Component{
    render(){
        let {data} =this.props;
        return(
            <div className="categoty_right">
                <div className="categoty_right_top">
                    <img alt="" src={require('@/img/category_tuijian.jpg')}/>
                </div>
                <div id="categoty_right">
                    <dl className="brands_recommend">
                        <div className="title">
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><b>推荐分类</b><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </div>
                        {
                            data.map(val=>(
                                <dd style={{margin: '0.22rem 0 0 0',width: '33.3%'}}>
                                    <a href="javascript:;">
                                        <div style={{backgroundImage:'url('+val.gc_image_url+')'}}></div>
                                        <p>{val.gc_name}</p>
                                    </a>
                                </dd>
                            ))
                        }
                    </dl>
                </div>
            </div>
        )
    }
}

export default Category;