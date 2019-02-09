import React,{Component} from 'react';
import {ReactReduxContext,connect} from 'react-redux';
import axios from 'axios';
import { Carousel,Toast } from 'antd-mobile';
import Centernav from './homeCenterNav.js';
import ContainTit from './containTit.js';
import ContainSwiper from './homeContainSwiper.js';
import '@/sass/Contain.scss'
class Container extends Component{
    constructor(){
        super();
        this.state={
            homeData:[],
            haveData:false
        }
        // this.updataNow=this.updataNow.bind(this)
        this.getDate=this.getDate.bind(this)
        this.loadingToast=this.loadingToast.bind(this)
    }
    componentDidMount(){
        // 获取商品信息
        // console.log(this.props.tid)
        this.getDate(this.props.tid)
    }
    componentWillReceiveProps(nowProps){
        
        console.log('componentWillReceiveProps:',nowProps)
        this.getDate(nowProps.tid)
    }
    // updataNow(tid){
    //     this.setState({
    //         now:tid
    //     })
    // }
    getDate(tid){
        var fd = new FormData()
        fd.append('id', tid)
        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }
        axios.post('http://www.zhongdamen.com/mobile/index.php?act=indexnew&op=getTwoClass',
            fd
        ,config).then(res=>{
            // console.log(res.data.datas)
            this.setState({
                homeData:res.data.datas,
                haveData:true
            })
        })
    }
    loadingToast() {
        Toast.loading('Loading...', 1, () => {
          console.log('Load complete !!!');
        });
      }
    shouldComponentUpdate(prevProps,nextState){
        if(this.state.homeData.length>0 ){
            // console.log('shouldComponentUpdate:',prevProps,nextState)
            // console.log('true',this.state.homeData)
                return true
                // this.updataNow(prevProps.tid)
        }
        return false
    }
    render(){
        // console.log(this.state.homeData[0].type)
        // let bannerData = this.state.homeData[0];
        // if(!bannerData){
        //     bannerData = ['1']
        // }
        // console.log('render:',this.state.homeData)
        return(
            !this.state.haveData ? (<div> {this.loadingToast()}</div>):
            (<div>
                <div className="contentList">
                    <Carousel
                        autoplay={true}
                        infinite={true}
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                            {this.state.homeData[0].module.array.map(val => (
                                <a
                                key={val.pic_url}
                                href="javascript:;"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                <img
                                    src={val.pic_url}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                                </a>
                            ))}
                            </Carousel>
                            <Centernav centerdata={this.state.homeData[1].module.array}></Centernav>
                            <div className="content_box">
                                <ContainTit title={this.state.homeData[2].module.title}></ContainTit>
                                <ContainSwiper contain={this.state.homeData[2].module.array}></ContainSwiper>
                            </div>
                        </div>
                    </div>
                    )
           
        )
    }
}

// let mapStateToProps = (state)=>{
//     console.log('mapStateToProps:',state)
//     return {
//         // 把goodslist属性映射到App的props中
//         tid:state.home.tid,
//     }
// }
// Container = connect(mapStateToProps)(Container);
export default Container;