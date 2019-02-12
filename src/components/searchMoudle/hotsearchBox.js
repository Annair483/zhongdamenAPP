import React,{Component} from 'react';
class latesearch extends Component{
    render(){
        let {data} = this.props;
        // console.log(data)
        return(
            <div className="hotsearch">
                <div className="ddtit">热门搜索</div>
                <div className="ddcontain">
                    <ul>
                        {data.map((val,idx)=>(<li key={idx}>
                            <a href="javascript:;">{val}</a>
                        </li>))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default latesearch