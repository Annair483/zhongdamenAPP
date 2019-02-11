import React,{Component} from 'react';
import {connect} from 'react-redux';
class search extends Component{
    componentWillMount(){
        this.props.changeNav(false);
    }
    render(){
        return(
            <div>
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