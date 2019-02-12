import React,{Component} from 'react';
import { NavBar , Icon} from 'antd-mobile';
import '@/sass/category/search.scss';
class search extends Component{
    constructor(){
        super();
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(key){
        // this.props.history.push(key)
        console.log(this.props)
    }
    render(){
        let {category} = this.props;
        return(
            <div className="header">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" style={{ fontSize: '0.34rem' }}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="1" type="ellipsis" style={{ color: '#707070' }}/>
                    ]}
                    >
                        {/* <a href="javascript:;" className="top_search" onClick={()=>{this.handleChange('/search')}}>商品搜索</a> */}
                        <i className="icon"></i>
                        <input className="search_input" type="text" placeholder='爱他美' onClick={()=>{category()}} ></input>
                </NavBar>
            </div>
        )
    }
}

export default search;