import React,{Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';
import Headnav from './header.js'
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
    render(){
        return(
            <div>
                <NavBar
                    mode="light"
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <a href="jacascript:;" className="top_btn"><img src={require("../img/home_topbtn.png")} /></a>
                    ]}
                    >
                        <a href="javascript:;" className="top_search">商品搜索</a>
                </NavBar>
                <Headnav tabs={this.state.tabs} tid={this.props.tid}></Headnav>
                home
            </div>
        )
    }
}

let mapStateToProps = (state)=>{
    console.log('mapStateToProps:',state)
    return {
        // 把goodslist属性映射到App的props中
        tid:state.home.tid,
    }
}
// let mapDispatchToProps = (dispatch)=>{
//     return {
//         addcart:(goods)=>{
//             dispatch({
//                 type:'CHANG_TID',
//                 payload:goods
//             })
//         }
//     }
// }

Home = connect(mapStateToProps)(Home);
export default Home;