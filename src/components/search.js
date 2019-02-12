import React,{Component} from 'react';
import {connect} from 'react-redux';
import Top from './categoryMoudle/search'
class search extends Component{
    constructor(){
        super();
        this.goback=this.goback.bind(this);
    }
    componentWillMount(){
        this.props.changeNav(false);
    }
    goback(){
        this.props.history.go(-1)
    }
    render(){
        return(
            <div>
                <header>
                    <Top goback={()=>{this.goback()}}></Top>
                </header>
                搜索
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