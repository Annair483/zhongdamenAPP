import React,{Component} from 'react';
import '@/sass/ContentNav.scss'
class Centernav extends Component{
    render(){
        let {centerdata} = this.props;
        // console.log(centerdata)
        return(
            centerdata? (<div className="contentNav">
                {
                    centerdata.map(val=>(
                        <div className="contentNav_item" key={val.id}>
                            <a href="javascript:;" id={val.id}>
                                <img src={val.menu_img} />
                                <p>{val.menu_title}</p>
                            </a>
                        </div>
                    ))
                }
            </div>) : <div></div>
        )
    }
}
export default Centernav