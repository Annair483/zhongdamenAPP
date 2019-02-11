import React,{Component} from 'react';
import '@/sass/CategoryNav.scss'
class CategoryNav extends Component{
    render(){
        let {category} = this.props
        let result = [];
        if(category){
            for(var i=0,len=category.length;i<len;i+=4){
                result.push(category.slice(i,i+4));
            }
        }
        // console.log(result);
        return(
            category?
            (<div className="category_swiper">
                <div className="category_wrapper">
                    <div className="category_slider">
                        {
                            result.map(val=>(
                                <div className="category_flex">
                                    {val.map(item=>(
                                        <div className="category_item" key={item.gc_id}>
                                            <a href="javascript:;" className="block">
                                                <div style={{width: '1.2rem',height: '1.2rem',borderRadius: '50%',overflow: 'hidden',margin: 'auto'}}>
                                                    <img src={item.img_url} className="width100" />
                                                </div>
                                                <p style={{color:'#707070',textAlign:"center"}}>{item.name}</p>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>) : <div></div>
        )
    }
}

export default CategoryNav;