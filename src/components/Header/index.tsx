import React from 'react'
import { HeaderWrapper } from './style'
import {  SearchBar } from 'antd-mobile'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderWrapper>
      <Link to="/home/tuijian">
       <div className="icon">
        <img src="http://lf-cdn-tos.bytescm.com/obj/static/motor/wap/_next/static/images/logo-ece55ce00243df6953f4..png" alt="" />
      </div>
      </Link>
     
      <div className="search">
      <Link to="/search" className="search-box">
      <SearchBar
          placeholder='猜你所想'
          style={{ '--background': '#f4f5f6' ,
                }}
        />
      </Link>
      <Link to="/" className='scan-icon'>
      <i className='iconfont icon-scan'></i>
      </Link>
      </div>
      
      <Link to="/" className='add-icon'>
        <i className='iconfont icon-add'>
        </i>
      </Link>
    </HeaderWrapper>
  )
}
