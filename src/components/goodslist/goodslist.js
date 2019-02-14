import React,{Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import ListNav from './listNav';
import GoodsNav from './goodsNav';
import Goodscategory from './goodscategory';
import '@/sass/goodslist/Goodslist.scss';
class detail extends Component{
    constructor(){
        super();
        this.state={
            list:[],
            tit:''
        }
        this.getData=this.getData.bind(this);
        this.goback=this.goback.bind(this);
        this.getList=this.getList.bind(this);
    }
    componentWillMount(){
        this.props.changeNav(false);
        // this.props.location.search()
        // console.log(this.props.match)
        let {gc_id,keyword} = this.props.match.params
        keyword = keyword.replace(/[^\u4E00-\u9FA5]/g,'/')
        this.getData({act:'goods',op:'goods_list',gc_id,curpage:'1',page:'10'})
        this.setState({
            tit:keyword
        })
    }
    getList({act,op,gc_id,curpage,page}){
        return axios.get('http://www.zhongdamen.com/mobile/index.php',{
            params:{
                act,
                op,
                gc_id,
                page,
                curpage
            }
        })
    }
    getData({act,op,gc_id,curpage,page}){
        let _this = this
        this.getList({act,op,gc_id,curpage,page}).then(res=>{
            _this.setState({
                list:res.data.datas.goods_list
            })
            // console.log(_this.state.list)
        })
    }
    goback(){
        this.props.history.go(-1)
    }
    render(){
        console.log(this.state.list)
        return(
            <div>
                <header>
                    <ListNav tit={this.state.tit} back={()=>{this.goback()}}><p>12</p></ListNav>
                    
                </header>
                    <div className="goods_searchList">
                        <GoodsNav></GoodsNav>
                    </div>
                    <div className="goods_searchList" style={{top:'1.848rem'}}>
                        <Goodscategory></Goodscategory>
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
detail = connect(mapStateToProps,mapDispatchToProps)(detail);
export default detail;
