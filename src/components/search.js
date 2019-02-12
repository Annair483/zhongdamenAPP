import React,{Component} from 'react';
import {connect} from 'react-redux';
import Top from './categoryMoudle/search'
import '@/sass/Search.scss'
// import late from './searchMoudle/latesearchBox';
import Search from './searchMoudle/latesearchBox';
import HotSearch from './searchMoudle/hotsearchBox';
import axios from 'axios';

class search extends Component{
    constructor(){
        super();
        this.state={
            his_list:[],
            list:[]
        }
        this.goback=this.goback.bind(this);
        this.getData=this.getData.bind(this);
    }
    componentWillMount(){
        this.props.changeNav(false);
        let _this = this;
        // axios.defaults.withCredentials=true;
        this.getData({act:'index',op:'search_key_list'}).then(res=>{
            console.log(res.data.datas)
            _this.setState({
                his_list:res.data.datas.his_list,
                list:res.data.datas.list
            })
        })
        // console.log(this.state)
    }
    goback(){
        this.props.history.go(-1)
    }
    getData({act,op}){
        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }
        return axios.get('http://www.zhongdamen.com/mobile/index.php',{
            params:{
                act,
                op
            }
        })
    }
    search(val){
        // console.log(val)
        // this.props.history.push('/list')
        this.props.history.push({ pathname: '/list/'+val})
    }
    render(){
        return(
            <div className="searchBox">
                <header>
                    <Top search={(val)=>{this.search(val)}} goback={()=>{this.goback()}}></Top>
                </header>
                <div id="searchBox">
                    <Search data={this.state.his_list}></Search>
                    <HotSearch data={this.state.list}></HotSearch>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state)=>{
    // console.log('mapStateToProps:',state)
    return {
        // 把goodslist属性映射到App的props中
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
search = connect(mapStateToProps,mapDispatchToProps)(search);
export default search;