import React,{Component} from 'react';
import {ReactReduxContext,connect} from 'react-redux';
import axios from 'axios';
import { Carousel,Toast } from 'antd-mobile';
import Centernav from './homeCenterNav.js';
import ContainTit from './containTit.js';
import ContainSwiper from './homeContainSwiper.js';
import BannerSpe from './bannerSpe.js';
import CategoryNav from './categoryNav.js';
import ThreeBanner from './threeBanner.js';
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
        let menu = [],
            category = [],
            limit_buy =[],
            banner_spe=[],
            goods_special=[],
            goods_list = [],
            ulike = [],
            banner_3 = []
        menu = this.state.homeData.filter((item,idx,arr)=>{
                return (item.type=='module_menu')
        });
        category = this.state.homeData.filter((item,idx,arr)=>{
            return (item.type=='module_category')
        });
        limit_buy = this.state.homeData.filter((item,idx,arr)=>{
            return (item.type=='module_limit_buy')
        });
        banner_spe = this.state.homeData.filter((item,idx,arr)=>{
            return (item.type=='module_banner_special')
        });
        goods_special = this.state.homeData.filter((item,idx,arr)=>{
            return (item.type=='module_goods_special')
        });
        goods_list = this.state.homeData.filter((item,idx,arr)=>{
            return (item.type=='module_goods_list')
        });
        ulike = this.state.homeData.filter((item,idx,arr)=>{
            return (item.type=='module_ulike')
        });
        banner_3 =this.state.homeData.filter((item,idx,arr)=>{
            return (item.type=='module_banner1vs2')
        });
        return(
            !this.state.haveData ? (<div> {this.loadingToast()}</div>):
            (<div className="contentBox">
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
                            <Centernav centerdata={menu[0] ? menu[0].module.array:null}></Centernav>
                            <div className="content_box fff">
                                <CategoryNav category={category[0]? category[0].module.array: null}></CategoryNav>
                            </div>
                            <div className="content_box fff">
                                <ContainTit title={banner_3[0] ?banner_3[0].module.title : null}></ContainTit>
                                <ThreeBanner banner_3={banner_3[0]? banner_3[0].module.array: null}></ThreeBanner>
                            </div>
                            <div className="content_box fff">
                                <ContainTit title={limit_buy[0] ?limit_buy[0].module.title : null}></ContainTit>
                                <ContainSwiper contain={limit_buy[0]? limit_buy[0].module.array : null}></ContainSwiper>
                            </div>
                            <div className="content_box fff">
                                <BannerSpe data={banner_spe[0]? banner_spe[0].module.banner : null}></BannerSpe>
                                <ContainSwiper contain={banner_spe[0]? banner_spe[0].module.array : null}></ContainSwiper>
                            </div>
                            {
                                goods_special.map(val=>(
                                    <div className="content_box fff">
                                        <BannerSpe data={val.module.banner}></BannerSpe>
                                        <ContainSwiper contain={val.module.array} goods={true}></ContainSwiper>
                                    </div>
                                ))
                            }
                            <div className="content_box fff">
                                <ContainTit title={goods_list[0] ?goods_list[0].module.title : null}></ContainTit>
                                <ContainSwiper contain={goods_list[0]? goods_list[0].module.array : null}></ContainSwiper>
                            </div>
                            <div className="content_box fff">
                                <ContainTit title={ulike[0] ?ulike[0].module.title : null}></ContainTit>
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