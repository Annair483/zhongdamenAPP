import React,{Component} from 'react';
import { NavBar , Icon} from 'antd-mobile';
import '@/sass/category/search.scss';
class search extends Component{
    constructor(){
        super();
        this.handleClick=this.handleClick.bind(this);
        this.back=this.back.bind(this);
    }

    handleClick(key){
        // this.props.history.push(key)
        this.props.category(key);
    }
    back(){
        this.props.goback();
    }
    render(){
        let {category} = this.props;
        return(
            <div className="header">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" style={{ fontSize: '0.34rem' , color: '#707070'}}/>}
                    onLeftClick={() => this.back()}
                    rightContent={[
                        <Icon key="1" type="ellipsis" style={{ color: '#707070' }}/>
                    ]}
                    >
                        {/* <a href="javascript:;" className="top_search" onClick={()=>{this.handleChange('/search')}}>商品搜索</a> */}
                        <i className="icon"></i>
                        <input className="search_input" type="text" placeholder='爱他美' onClick={()=>{if(category){this.handleClick('/search')}}} ></input>
                </NavBar>
            </div>
        )
    }
}

export default search;