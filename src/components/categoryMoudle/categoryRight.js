import React,{Component} from 'react';
class Category extends Component{
    constructor(){
        super();
        this.godetail=this.godetail.bind(this);
    }
    godetail(name,id){
        this.props.detail(name,id);
        // console.log(inpVal);
    }
    render(){
        let {data,img} =this.props;
        // console.log(data)
        return(
            <div className="categoty_right">
                <div className="categoty_right_top">
                    <img alt="" src={img? img : require('@/img/category_tuijian.jpg')}/>
                </div>
                <div id="categoty_right">
                    {data.map((item,idx)=>(<dl className="brands_recommend" key={idx}>
                        <div className="title" >
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><b>{item.gc_name? item.gc_name : '推荐分类'}</b><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </div>
                        {
                            item.child.map(val=>(
                                <dd onClick={()=>{this.godetail(val.gc_name,val.gc_id)}} key={val.gc_id} style={{margin: '0.22rem 0 0 0',width: '33.3%'}}>
                                    <a href="javascript:;">
                                        <div style={{backgroundImage:'url('+val.gc_image_url+')'}}></div>
                                        <p>{val.gc_name}</p>
                                    </a>
                                </dd>
                            ))
                        }
                    </dl>))}
                </div>
            </div>
        )
    }
}

export default Category;