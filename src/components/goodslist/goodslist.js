import React,{Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
class detail extends Component{
    constructor(){
        super();
        this.state={
            list:[]
        }
        this.getData=this.getData.bind(this);
        this.getList=this.getList.bind(this);
    }
    componentWillMount(){
        this.props.changeNav(false);
        // this.props.location.search()
        // console.log(this.props.match)
        let {gc_id,gc_name} = this.props.match.params
        this.getData({act:'goods',op:'goods_list',gc_id,curpage:'1',page:'10'})
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
    render(){
        console.log(this.state.list)
        return(
            <div>
                列表
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
