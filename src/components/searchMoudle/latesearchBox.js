import React,{Component} from 'react';
class latesearch extends Component{
    render(){
        let {data} = this.props;
        console.log(data)
        if(!data){
            data=[]
        }
        return(
            <div className="latesearch">
                <div className="ddtit">最近搜索<i className="del_btn"></i></div>
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
