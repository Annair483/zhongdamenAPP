import React,{Component} from 'react';
import '@/sass/goodslist/Goodscategory.scss'
class goodsnav extends Component{
    constructor(){
        super();
        this.state={
            nav:[
                {title:'自营商品',active:false,id:'1'},
                {title:'只看有货',active:false,id:'2'},
                {title:'贸易类型',active:false,id:'3'}
            ]
        }
        this.renderI=this.renderI.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    renderI(val){
        return(
            <i style={val.active? {backgroundImage: `url(${('../../img/btn_paixu1@2x.png')})` }:null}></i>
        )
    }
    handleClick(id){
        // let now = [];
        // for( let i of this.state.nav){
        //     if(i.id==id){
        //         i.active=!i.active;
        //     }
        //     now.push(i);
        // }
        // this.setState({
        //     nav:now
        // })
        this.props.click(id)
        if(id=='3'){
            this.props.navstatus();
        }
    }
    render(){
        let {nav} = this.props;
        return(
            <div className="flex_row">
                    {nav.map(val=>(
                        <div key={val.id} className="flex1">
                            <span className={val.active? "current active":"current"} onClick={()=>{this.handleClick(val.id)}}>{val.title}
                            {val.id=='3'? this.renderI(val):null}
                            </span>
                        </div>
                    ))}
            </div>
        )
    }
}
export default goodsnav;