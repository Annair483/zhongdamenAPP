import React,{Component} from 'react';
import '@/sass/goodslist/Listnav.scss'
class nav extends Component{
    constructor(){
        super();
        this.goback=this.goback.bind(this);
    }
    goback(){
        this.props.back()
    }
    render(){
        let {tit , children} = this.props;
        // console.log(children)
        
        return(
            <div id="header">
                <div className="hearder_l">
                    <a href="javascript:;" onClick={()=>{this.goback()}}>
                        <i className="back"></i>
                    </a>
                </div>
                <div className="hearder_tit">
                    <h1>{tit}</h1>
                </div>
                <div className="hearder_r">
                    <a href="javascript:;" className="hearder_search">
                        <i style={{backgroundImage: `url(${require("../../img/search_ico.png")})`,backgroundSize: '70%',  opacity: 0.70}}></i>
                    </a>
                    <a href="javascript:;" className="hearder_show">
                        <i style={{backgroundImage: `url(${require("../../img/browse_list.png")})`,backgroundSize: '70%',  opacity: 0.70}}></i>
                    </a>
                </div>
            </div>
        )
    }
}
export default nav