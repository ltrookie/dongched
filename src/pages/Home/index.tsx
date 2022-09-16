import React,{useEffect,useState}from 'react'
import {HomeWrapper} from './style'
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import { PartitionType } from '@/models/index'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import { getHomeDataAction } from '@/store/actionCreators'
import {Outlet,NavLink,useLocation} from "react-router-dom"
import Bottom from "@/components/common/Bottom"
import { Popup } from 'antd-mobile'
import classnames from 'classnames'
import { CloseOutline  } from 'antd-mobile-icons'





interface HomeProps {
  loading: boolean;
  partitions: any[];
  banners:any[];
  jiaoche:any[];
  getHomeDataActionDispatch: () => void;
}

const Home: React.FC<HomeProps>=(props) => {
  const [visible1, setVisible1] = useState(false)
  const location = useLocation()
  const { pathname } = location;
  const {
     partitions,
  } = props
  const {
      getHomeDataActionDispatch
    } = props
  useEffect(() => {
    getHomeDataActionDispatch();
  }, [])
  const handleClick = () => {

  }
  
  return (
    <HomeWrapper>
      <div className="head">
        <Header/>
      <div className="partition">
            <div className="tab-bar">
              <TabBar 
                data={partitions}
                type="indicate"
                onClick={handleClick}
              />
            </div>
     
     

            <div className="switch">
              <i className="iconfont icon-more-line"  onClick={() => {
                setVisible1(true)
              }} ></i>            
            <Popup
              visible={visible1}
              onMaskClick={() => {
                setVisible1(false)
              }}
              bodyStyle={{ 
                minHeight: '90vh' , 
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px'
              
              }}
            >
             <div className="all-tabbar">
              <div className="tabbar-head">
              <h4 style={{fontSize:"0.7rem",textAlign:'center',marginTop:'0.8rem'}}>全部频道</h4>
              <CloseOutline style={{fontSize:"0.9rem",float:'right',marginTop:"-0.7rem",marginRight:'0.5rem'}}
                            onClick={() => {
                              setVisible1(false)}}/>
             </div>
              
              <div className="all-channel" style={{display:"flex",flexDirection:'row',alignItems:"center",flexWrap:'wrap',marginTop:"1rem",}}>
              {
                partitions.map(item => {
                  return (
                    <div className="channel" onClick={() => {
                      setVisible1(false)}}>
                      <NavLink to={`/home${item.path}`}
                               style={{color:'black',
                               height:'1.8rem',
                               width:'5.6rem',
                               backgroundColor:"#f7f8fc",
                               display:"flex",
                               marginLeft:'0.5rem',
                               marginTop:'0.4rem',
                               textAlign:'center'
                               }}
                              className={classnames({ active: pathname == item.path })}>
                      <h4 key={item.id}
                            style={{ height:'1.8rem',
                                     width:'5.6rem',
                                     fontSize:"0.7rem",
                                     marginTop:'0.5rem',
                                     textAlign:'center'}}>{item.name}</h4>
                      </NavLink>
                    </div>
                  )

                })
              }
              </div>
             </div>
            </Popup>
        
            </div>
        </div> 
     
       <Outlet/>
      </div>
       <Bottom />
    
    </HomeWrapper>
  )
}

const mapStateToProps = (state :rootState) => ({
  loading: state.loading,
  partitions: state.partitions,
  banners:state.tuijian.banners,
  jiaoche:state.tuijian.jiaoche
})

const mapDispatchToProps = (dispatch :Dispatch) => ({
  getHomeDataActionDispatch() {
    dispatch(getHomeDataAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
