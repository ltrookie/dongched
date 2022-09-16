import React from 'react'
import { NavLink, useLocation } from "react-router-dom"
import { Wrapper } from "./style.js"
import classnames from "classnames"
import { PartitionType } from '@/models/PartitionType'

// interface BottomProps {
//   partitions: PartitionType[];
// }

const Bottom = () => {

  const location = useLocation();
  const { pathname } = location
  var homeReg = /^(\/home)(\/\w+)?/;
  // const {partitions} = props

  // console.log(partitions,"bbbbbbbbbbbb");


  // partitions.map((item)=>{
  //   return (
  //      <NavLink to="/home/tuijian" className={classnames({active:pathname == "/home" || pathname=="/" })}>
  //     <div className="circle"><i className='iconfont icon-shouye'></i></div>
  //   <span>首页</span>
  //   </NavLink>
  //   )
  // })


  return (
    
    <Wrapper>
      { 
        <div className='video_bottom'>

        <NavLink to="/home/tuijian" className={classnames({ active: homeReg.test(pathname) || pathname == "/" })}>
          <div className="circle"><i className='iconfont icon-shouye'></i></div>
          <span>首页</span>
        </NavLink>
        <NavLink to="/cheyouquan" className={classnames({ active: pathname == "/cheyouquan" })}>
          <div className="circle"><i className="iconfont icon-quanquanmendianb"></i></div>
          <span>车友圈</span>
        </NavLink>
        <NavLink to="/xuanche" className={classnames({ active: pathname == "/xuanche" })}>
          <div className="circle"><i className="iconfont icon-car"></i></div>
          <span>选车</span>
        </NavLink>
        <NavLink to="/ershouche" className={classnames({ active: pathname == "/ershouche" })}>
          <div className="circle"><i className="iconfont icon-ershouche"></i></div>
          <span>二手车</span>
        </NavLink>
        <NavLink to="/fuwu" className={classnames({ active: pathname == "/fuwu" })}>
          <div className="circle "><i className="iconfont icon-yonghu"></i></div>
          <span>服务</span>
        </NavLink>
      </div> 
      }
      
    </Wrapper>
  )
}
export default Bottom