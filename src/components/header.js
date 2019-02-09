import React,{Component} from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import '@/sass/Header.scss';
import {connect} from 'react-redux';

class Demo extends React.Component {

  render() {
    const {tabs,tid,changeTid} = this.props
    // console.log(changeTid)
    return (
      <div>
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    tabs.map(tab=>{
                        return(
                            <div className="swiper-slide" key={tab.id} onClick={()=>{changeTid(tab.id)}}>
                                <span id={tab.id} className={tid===tab.id? 'span-active':''}>{tab.title}</span>
                            </div>

                        )
                    })
                    
                }
            </div>
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state)=>{
    // console.log('mapStateToProps:',state)
    return {
        // 把goodslist属性映射到App的props中
        tid:state.home.tid,
    }
}

let mapDispatchToProps = (dispatch)=>{
    // console.log('mapDispatchToProps:',dispatch)
    return {
        changeTid(tid){
            dispatch({
                type:'CHANG_TID',
                payload:tid
            })
        }
    }
}
Demo = connect(mapStateToProps,mapDispatchToProps)(Demo);
export default Demo;