import React,{Component} from 'react';
// import '@/sass/ThreeBanner.scss';
class ThreeBanner extends Component{
    render(){
        let {banner_3} = this.props;
        let arr1= [],
            arr2= []
        if(banner_3){
            arr1 = banner_3.slice(0,1)
            arr2 = banner_3.slice(1);
            console.log(arr1,arr2)
        }
        return(
            banner_3?
            (<div style={{marginTop: '0.24rem',display:'flex',}}>
                <div style={{flex:'1'}}>
                    <div key={arr1[0].special_id} className="banner_3_imgbox" style={{paddingRight:'0.1rem',height:'2.4rem'}}>
                        <a href="javascript:;" className="block">
                            <img alt='' src={arr1[0].pic_url} className="blcok width100" style={{height: '4.2rem'}}/>
                        </a>
                    </div>
                </div>
                <div style={{flex:'1'}}>
                    {
                        arr2.map(val=>(
                            <div className="banner_3_imgbox" style={{paddingRight:'0.1rem',height:'2.4rem'}} key={val.special_id}>
                                <a href="javascript:;" className="block">
                                    <img alt='' src={val.pic_url} className="blcok width100" style={{height: '2rem'}}/>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>) : <div></div>
        )
    }
}

export default ThreeBanner;