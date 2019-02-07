import React,{Component} from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import '@/sass/Header.scss';
class Demo extends React.Component {

  render() {
    const {tabs,tid} = this.props
    console.log(tid)
    return (
      <div>
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    tabs.map(tab=>{
                        return(
                            <div className="swiper-slide" key={tab.id} >
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

export default Demo;