import React,{Component} from 'react';
import {connect} from 'react-redux';
// import { NavBar , Icon} from 'antd-mobile';
import '@/sass/category/category.scss';
import Search from './categoryMoudle/search'
import CategoryRight from './categoryMoudle/categoryRight'
import axios from 'axios';
// import { url } from 'inspector';

const CancelToken = axios.CancelToken
let cancel1
let cancel2

class Category extends Component{
    constructor(){
        super();
        this.state={
            tuijian:[],
            list:[],
            current:'1',
            imgUrl:''
        }
        this.getTuijian=this.getTuijian.bind(this);
        this.getList=this.getList.bind(this);
        this.getData=this.getData.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.goback=this.goback.bind(this);
    }
    componentDidMount(){
        this.props.changeNav(true);
        this.getData({act:'goods_class'})
        
    }
    getTuijian(){
        var fd = new FormData()
        fd.append('tuijian', '1')
        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }
        
        return axios.post('http://www.zhongdamen.com/mobile/index.php?act=goods_class&op=get_gc_recommend',
            fd
        ,{
            cancelToken: new CancelToken(function executor (c) {
              cancel1 = c
            })
        },config)
    }
    getList({act,op,gc_id}){
        return axios.get('http://www.zhongdamen.com/mobile/index.php',{
            params:{
                act,
                op,
                gc_id
            }
        },{
            cancelToken: new CancelToken(function executor (c) {
              cancel2 = c
            })
        })
    }
    cancelRequest () {
        // 第一次执行videoService.cancelRequest()时还未发送getVideoList请求，会报错，添加如下判断
        if (typeof cancel === 'function' && typeof cancel === 'function') {
          // 取消请求
          cancel1()
          cancel2()
        }
    }
    getData({act,op,gc_id}){
        let _this = this,
            obj ={},
            arr =[]
        axios.all([this.getTuijian(), this.getList({act,op,gc_id})])
        .then(axios.spread(function (acct, perms) {
            obj.child=acct.data.datas.class_list;
            arr.push(obj)
            // 两个请求现在都执行完成
            _this.setState({
                tuijian:arr,
                list:perms.data.datas.class_list
            })
            // console.log(_this.state.tuijian,_this.state.list)
        }));
    }
    componentWillUnmount(){
        cancel1()
        cancel2()
    }
    handleChange(id){
        this.setState({
            current:id
        })
        if(id==='1'){
            let obj ={},
                arr =[]
            this.getTuijian().then(res=>{
                obj.child=res.data.datas.class_list;
                arr.push(obj)
                this.setState({
                    tuijian:arr,
                    imgUrl:''
                })
            }).catch(err => {
                console.log(err)
            })
        }else{
            let url = [];
            url = this.state.list.filter((item,idx,arr)=>{
                return (item.gc_id===id)
            });     
            this.getList({act:'goods_class',op:'get_child_all',gc_id:id}).then(res=>{
                // console.log(res.data.datas.class_list)
                this.setState({
                    tuijian:res.data.datas.class_list,
                    imgUrl:url[0].gc_image_url
                })
            }).catch(err => {
              console.log(err)
            })
            // console.log( this.getList({act:'goods_class',op:'get_child_all',gc_id:id}))
        }
    }
    handleClick(key){
        this.props.history.push(key)
        // console.log(key)
    }
    goback(){
        this.props.history.go(-1)
    }
    godetail(name,id){
        console.log(name,id)
        this.props.history.push({ pathname: '/list/'+name+'/'+id})
    }
    render(){
        return(
            <div>
                <header>
                    <Search category={(key)=>{this.handleClick(key)}} goback={()=>{this.goback()}}></Search>
                </header>
                <div className="categoty_main">
                    <div className="categoty_left">
                        <ul className="categoty_list">
                            <li className={this.state.current=='1'? "categoty_listItem select":"categoty_listItem"} onClick={()=>{this.handleChange('1')}}>
                                <a href="javascript:;"><div className="categoty_leftName">为您推荐</div></a>
                            </li>
                            {
                                this.state.list.map(val=>(
                                    <li className={this.state.current==val.gc_id? "categoty_listItem select":"categoty_listItem"} key={val.gc_id} onClick={()=>{this.handleChange(val.gc_id)}}>
                                        <a href="javascript:;"><div className="categoty_leftName">{val.gc_name}</div></a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <CategoryRight detail={(name,id)=>{this.godetail(name,id)}} data={this.state.tuijian} img={this.state.imgUrl}></CategoryRight>
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
Category = connect(mapStateToProps,mapDispatchToProps)(Category);
export default Category