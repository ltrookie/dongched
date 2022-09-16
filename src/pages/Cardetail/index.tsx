import React,{ memo, useState, useEffect, useRef, useMemo} from 'react'
import { Wrapper } from './style'
import { EnterLoading } from '../Xuanche/style'
import { NavBar, Space } from 'antd-mobile'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import {useNavigate,Link,useParams} from "react-router-dom"
import {getCardetailDataAction,getSearchDataAction} from "@/store/actionCreators"
import { SearchOutline, MoreOutline } from 'antd-mobile-icons'
import Loading from '@/components/common/loading'
import { debounce } from '@/api/utils';


interface CarDetailProps {
  loading: boolean;
  cardata:any[];
  car:any;
  getCardetailDataActionDispatch: (id :any) => void;
  // getSearchDataActionDispatch:(key:any)=>void;
}
const  Cardetail: React.FC<CarDetailProps>=(props)=> {
  const {id} = useParams();
  const navigate = useNavigate();
  const {cardata,car,loading} = props;
  const {getCardetailDataActionDispatch} = props;
  useEffect(()=>{
    getCardetailDataActionDispatch(id)
   
  },[])

  
  
  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <SearchOutline />
        <MoreOutline />
      </Space>
    </div>
  )

  const back = () => navigate(-1);

  
console.log(car,'8888888');
  return (
    <Wrapper>
      {
         cardata.filter((item,index)=>index==1).map((item:any)=>{
          return (
             <NavBar right={right} onBack={back}>
            {item.info.series_name}
          </NavBar>
          )
         })
      }
      {
        car.filter((item:any)=>item.series_id==id).map((item:any)=>{
            return (
              <div className='data-car' key={item.series_id}>
              <img src={item.pc_cover_url} alt="" />
              </div>
            )
        })
      }
      { loading && <EnterLoading>
        <Loading></Loading></EnterLoading>}
     <div className="data-box">
      {
      cardata.map((item,index)=>{
       return (
           <div key={index} className="cardata">
            <ul>
               <li >{item.info.name}</li>
            </ul>
            </div>
       )
      })
     }
     </div>
     
     
    </Wrapper>
  )
}
const mapStateToProps = (state: rootState) => ({
  loading: state.loading,
  cardata:state.cardetail.cardata,
  car:state.search.car
 
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getCardetailDataActionDispatch(id:any) {
    dispatch(getCardetailDataAction(id))
  },
  // getSearchDataActionDispatch(key:any) {
  //   dispatch(getSearchDataAction(key))
  // }
})
export default connect(mapStateToProps, mapDispatchToProps)(memo(Cardetail))
