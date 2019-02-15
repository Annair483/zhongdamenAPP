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
            nav:[
                {title:'自营商品',active:false,id:'1'},
                {title:'只看有货',active:false,id:'2'},
                {title:'贸易类型',active:false,id:'3'}
            ],
            navType:[{title:'一般贸易',active:false,id:'1'},{title:'E贸易',active:false,id:'2_3_4'}],
            navstatus:false,
            list:[],
            tit:''
        }
        this.getData=this.getData.bind(this);
        this.goback=this.goback.bind(this);
        this.getList=this.getList.bind(this);
        this.handleClick=this.handleClick.bind(this); 
        this.handleReset=this.handleReset.bind(this); 
        this.navstatus=this.navstatus.bind(this); 
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
    handleClick(id){
        let now = [];
        for( let i of this.state.nav){
            if(i.id==id){
                i.active=!i.active;
            }
            now.push(i);
        }
        this.setState({
            nav:now
        })
        // console.log(this.state)
    }
    changeSelect(id){
        let nowtype = [];
        for( let i of this.state.navType){
            if(i.id==id){
                i.active=!i.active;
            }
            nowtype.push(i);
        }
        this.setState({
            navType:nowtype
        })
        // console.log(this.state)
    }
    handleReset(){
        let nownav = [];
        for( let i of this.state.navType){
            i.active=false;
            nownav.push(i);
        }
        this.setState({
            navType:nownav
        })
    }
    navstatus(){
        let now =!this.state.navstatus
        console.log(now)
        this.setState({
            navstatus:now
        })

    }
    render(){
        // console.log(this.state.list)
        let {navType,navstatus} = this.state
        return(
            <div>
                <header>
                    <ListNav tit={this.state.tit} back={()=>{this.goback()}}><p>12</p></ListNav>
                    
                </header>
                    <div className="goods_searchList">
                        <GoodsNav ></GoodsNav>
                    </div>
                    <div className="goods_searchList" style={{top:'1.848rem'}}>
                        <Goodscategory navstatus={()=>{this.navstatus()}} nav={this.state.nav} click={(id)=>this.handleClick(id)}></Goodscategory>
                    </div>
                    <div className="shaixuan_box" style={navstatus?{display:'block'}:{display:'none'}}>
                        <div className="shaixuan_content">
                            <div className="content_box">
                                <div className={navType[0].active? "content_select active" : "content_select"} onClick={()=>{this.changeSelect('1')}}>一般贸易</div>
                                <div style={{width: '.44rem'}}></div>
                                <div className={navType[1].active? "content_select active" : "content_select"} onClick={()=>{this.changeSelect('2_3_4')}}>E贸易</div>
                            </div>
                        </div>
                        <div className="select">
                            <div className="select_flex reset" onClick={()=>{this.handleReset()}}>重置</div>
                            <div className="select_flex affirm">确定</div>
                        </div>
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
