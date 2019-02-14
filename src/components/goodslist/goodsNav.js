import React,{Component} from 'react';
import '@/sass/goodslist/Goodsnav.scss'
class goodsnav extends Component{
    constructor(){
        super();
        this.state={
            nav:[
                {title:'综合',key:'0',order:'1'},
                {title:'销量',key:'1',order:'1'},
                {title:'新品',key:'2',order:'1'},
                {title:'价格',key:'3',order:'1'}
            ],
            order:'1',
            current:'0'
        }
        this.renderImg=this.renderImg.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    renderImg(){
        let {order} = this.state
        return(
            <img alt="" src={order=='1'? require('../../img/paixu_xia@2x.png') : require('../../img/paixu_shang@2x.png')}></img>
        )
    }
    handleClick(key){
        if(key!=='3'){
            this.setState({
                current:key
            })
        }else{
            let now = '';
            if(this.state.order=='1'){
                now='2'
            }else{
                now='1'
            }
            this.setState({
                current:key,
                order:now
            })
        }
    }
    render(){
        let {nav,current} = this.state;
        return(
            <div>
                <ul id="nav_ul">
                    {nav.map(val=>(
                        <li key={val.key} onClick={()=>{this.handleClick(val.key)}}>
                            <a href="jacascript:;" className={current==val.key? 'current':null}>{val.title}
                            {val.key=='3'? this.renderImg():null}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="filtrate">
                    <a href="javascript:;">筛选<img alt='' src={require('../../img/shaixuan@2x.png')} style={{height: '.26rem', marginTop: '.3rem',opacity: 0.6}}></img></a>
                </div>
            </div>
        )
    }
}
export default goodsnav;