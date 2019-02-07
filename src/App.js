import React, { Component } from 'react';
import {Route,Link,NavLink,Switch,Redirect,withRouter} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import PropTypes from 'prop-types';

import Home from './components/home';
import Category from './components/category';
import Mine from './components/mine';
import Cart from './components/cart';

import './sass/Navbar.scss';

import {ReactReduxContext,connect} from 'react-redux';
// import { Icon } from 'antd';
// const {
//   Header, Footer, Sider, Content,
// } = Layout;

class App extends Component {
  constructor(){
    super();
    this.state = {
        menu:[
            {
                text:'首页',
                path:'/home',
                name:'Home',
                icon:'home'
            },{
                text:'分类',
                path:'/category',
                name:'Category',
                icon:'search'
            },{
              text:'购物车',
              path:'/cart',
              name:'Cart',
              icon:'cart'
            },{
                text:'我的',
                path:'/mine',
                name:'Mine',
                icon:'mine'
            },
        ],
        current:'/home'

    }

    // this绑定
    this.handleChange = this.handleChange.bind(this);
  }
    // 设置静态属性，用户获取Provider提供的store数据
    static contextType = ReactReduxContext;

  handleChange(key){
    //两个问题：1、如何获取路由路径，2、如何获取history对象
    this.setState({
        current:key
    });

    console.log(this.props.history);

    // 
    this.props.history.push(key)
  }
  componentDidMount(){

      // 利用生命周期函数来保持当前路由高亮
      // 获取当前路由（hash,history）
      let hash1 = window.location.hash;// 可能得到的值：/home,/list,/list/computer
        hash1 = hash1.split('/')[1];
        this.setState({
            current:'/'+hash1
      })
      //监听路由变化 
      this.props.history.listen(() => {
        let hash = window.location.hash;
        hash = hash.split('/')[1];
        this.setState({
            current:'/'+hash
        })
      })

  }
  render() {
    return (
      <div className="App">
          {/* <Header>Header</Header>
          <Content> */}
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/category" component={Category}/>
                <Route path="/mine" component={Mine}/>
                <Route path="/cart" component={Cart}/>
                <Redirect from="/" to="/home"/>
                {/* <Route path="/" component={Home} exact/> */}
            </Switch>
          {/* </Content> */}
          <div className="navbar">
            <ul >
            {
              this.state.menu.map(menu=>{
                  return (
                      <li key={menu.path} onClick={()=>{this.handleChange(menu.path)}}>
                          {/* <Icon type={menu.icon} style={this.state.current===menu.path? { fontSize:'.40rem',color: '#fb9756'}:{ fontSize:'.40rem',color: '#999'}}/> */}
                          <img src={this.state.current===menu.path? require('./img/'+menu.icon+'_now.png') : require('./img/'+menu.icon+'.png')}/>
                          <p className={this.state.current===menu.path? 'active':''}>{menu.text}</p>
                          
                      </li>
                  )
              })
            }
            </ul>
          </div>
      </div>
    );
  }
}

// App.contextTypes = {
//   router:PropTypes.object
// }
// App = connect(mapStateToProps,mapDispatchToProps)(App);
// 利用withRouter高阶组件包装App组件
App = withRouter(App);

export default App;
