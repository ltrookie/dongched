import React ,{memo}from 'react'
import { Wrapper } from './style'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import { getHomeDataAction } from '@/store/actionCreators'
import { Swiper, Toast } from 'antd-mobile'
import {Link} from 'react-router-dom'
import Cardatabox from '@/components/Cardatabox'
import Scroll from '@/components/common/Scroll'
import { forceCheck } from 'react-lazyload'
import NewsItem from '@/components/NewsItem'




interface TuiJianProps {
  loading: boolean;
  banners: any[];
  jiaoche:any[]
  // getHomeDataActionDispatch: (rId :string) => void;
}
const  TuiJian:React.FC<TuiJianProps>=(props)=> {
  const {banners,jiaoche,loading} = props

  const handleClick =()=>{

  }
  
  
const items = banners.map(item => (
  <Swiper.Item key={item.id}>
    <div
      className="swiper"
      style={{}}
      
    >
      <img src={item.path} alt="" className='banners'/>
    </div>
  </Swiper.Item>
))
  
  return (
    <Wrapper>
    <div className="swiper-box">
    <Swiper autoplay loop>{items}</Swiper>
    </div>
    <div className="intrduce-box">
    <div className="intrduce">
    <div className="button">
     <Link to="/xuanche" className='carkinds'>
     <img src="https://lf-cdn-tos.bytescm.com/obj/static/motor/wap/_next/static/images/car-91669090d3a0ab0d9a2a..png" alt="" />
     <p>车型大全</p>
     </Link>
     </div>
     <div className="button">
     <Link to="/#" className='carkinds'>
     <img src="https://lf-cdn-tos.bytescm.com/obj/static/motor/wap/_next/static/images/rank-fffb4b136cdb7c8a4423..png" alt="" />
     <p>排行榜</p>
     </Link>
     </div>
     <div className="button">
     <Link to="/#" className='carkinds'>
     <img src="https://lf-cdn-tos.bytescm.com/obj/static/motor/wap/_next/static/images/community-e7b0155680ebf038a88c..png" alt="" />
     <p>车友圈</p>
     </Link>
     </div>
     <div className="button">
     <Link to="/#" className='carkinds'>
     <img src="https://lf-cdn-tos.bytescm.com/obj/static/motor/wap/_next/static/images/community-e7b0155680ebf038a88c..png" alt="" />
     <p>二手车</p>
     </Link>
     </div>
     <div className="button">
     <Link to="/#" className='carkinds'>
     <img src="https://lf-cdn-tos.bytescm.com/obj/static/motor/wap/_next/static/images/search-3191b0fb041f0728a3f6..png" alt="" />
     <p>条件查找</p>
     </Link>
     </div>
    </div>
     <Cardatabox jiaoche={jiaoche} loading={loading}/>
    </div>
    <NewsItem/>

    </Wrapper>
  )
}

const mapStateToProps = (state :rootState) => ({
  loading: state.loading,
  banners:state.tuijian.banners,
  jiaoche:state.tuijian.jiaoche

})

const mapDispatchToProps = (dispatch :Dispatch) => ({
  getHomeDataActionDispatch(rId:string) {
    dispatch(getHomeDataAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(TuiJian))