import React,{Component} from 'react';
import { NavBar } from 'antd-mobile';
import Headnav from './header.js';
import Container from './homeContainer.js';
import '@/sass/Home.scss';
import {ReactReduxContext,connect} from 'react-redux';
class Home extends Component{
    constructor(){
        super();
        this.state={
            tabs:[
                { title: '推荐',id:1 },
                { title: '母婴用品',id:2 },
                { title: '美妆个护',id:3 },
                { title: '营养保健',id:4 },
                { title: '居家日用',id:5 },
                { title: '进口美食',id:6 },
                { title: '服饰鞋包',id:7 },
            ],
        }
    }
    static contextType = ReactReduxContext;
    componentWillMount(){
        this.props.changeNav(true);
    }
    handleChange(key){
        //两个问题：1、如何获取路由路径，2、如何获取history对象
        this.setState({
            current:key
        });
    
        console.log(this.props.history);
    
        // 
        this.props.history.push(key)
    }
    render(){
        return(
            <div className="homeBox">
                <header>
                    <NavBar
                        mode="light"
                        onLeftClick={() => console.log('onLeftClick')}
                        rightContent={[
                            <a href="jacascript:;" className="top_btn"><img alt='' src={require("../img/home_topbtn.png")} /></a>
                        ]}
                        >
                            <a href="javascript:;" className="top_search" onClick={()=>{this.handleChange('/search')}}>商品搜索</a>
                    </NavBar>
                    <Headnav tabs={this.state.tabs} tid={this.props.tid}></Headnav>
                </header>
                <Container tid={this.props.tid}></Container>
            </div>
        )
    }
}

let mapStateToProps = (state)=>{
    console.log('mapStateToProps:',state)
    return {
        // 把goodslist属性映射到App的props中
        tid:state.home.tid,
        navstate:state.home.navstate
    }
}
let mapDispatchToProps = (dispatch)=>{
    // console.log('mapDispatchToProps:',dispatch)
    return {
        changeNav(tid){
            dispatch({
                type:'CHANGE_NAV',
                payload:tid
            })
        }
    }
}

Home = connect(mapStateToProps,mapDispatchToProps)(Home);
export default Home;