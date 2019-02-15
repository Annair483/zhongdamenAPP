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
    search(){
        const inpVal = this.input.value;
        this.props.search(inpVal);
        // console.log(inpVal);
    }
    render(){
        let {category} = this.props;
        return(
            <div className="header">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" style={{ fontSize: '0.34rem' , color: '#707070'}}/>}
                    onLeftClick={() => this.back()}
                    rightContent={
                        category? 
                        
                        <Icon key="1" type="ellipsis" style={{ color: '#707070' }} onClick={()=>{this.search()}}/> 
                        : <p onClick={()=>{this.search()}} style={{zIndex:'2',marginLeft:'-0.6rem',color:'#333',fontSize:'0.3rem',whiteSpace:'nowrap',padding:'1rem'}}>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    }
                    >
                    <div className="navbar_tit">
                        {category? null:(<p onClick={()=>{this.search()}} style={{width:'0.5rem',zIndex:'2',marginLeft:'-0.6rem',color:'#333',fontSize:'0.3rem',whiteSpace:'nowrap',position:'absolute',right:'-0.7rem',top:'0.17rem'}}>搜索</p>)}
                        {/* <a href="javascript:;" className="top_search" onClick={()=>{this.handleChange('/search')}}>商品搜索</a> */}
                        <i className="icon"></i>
                        <input ref={input => this.input = input} className="search_input" type="text" autoFocus={category? false : true} placeholder='爱他美' onClick={()=>{if(category){this.handleClick('/search')}}} ></input>
                    </div>
                </NavBar>
            </div>
        )
    }
}

export default search;