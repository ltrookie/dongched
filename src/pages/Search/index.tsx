import React,{ memo, useState, useEffect, useRef, useMemo} from 'react'
import { Wrapper,SearchBoxWrapper } from './style'
import { EnterLoading } from '../Xuanche/style'
import { NavBar, Space } from 'antd-mobile'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import {useNavigate,Link} from "react-router-dom"
import {getSearchDataAction} from "@/store/actionCreators"
import { SearchOutline, MoreOutline } from 'antd-mobile-icons'
import { debounce } from '@/api/utils';
import Loading from '@/components/common/loading'


interface SearchProps {
  loading: boolean;
  car:any[];
  getSearchDataActionDispatch: (key :any) => void;
}
const  Search: React.FC<SearchProps>=(props)=> {
  const queryRef=useRef<any>(null);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const {car,loading}= props
  const {
    getSearchDataActionDispatch
  } = props
  // console.log(car,"car");
//   const handleQuery = (q:any) => {
//     console.log(q)
//     setQuery(q)
// }
//   let handleQueryDebounce =  useMemo(() => {
//     return debounce(handleQuery, 500)
// }, [handleQuery])

// mount 
useEffect(() => {
    // console.log(queryRef)
    // 挂载后
    queryRef.current.focus();
}, [])
// 使用useEffect 去更新 
// useEffect(() => {
    
//     handleQueryDebounce(query)
// }, [query])

  useEffect(()=>{
    if (query.trim()) {
    getSearchDataActionDispatch(query)
  }
  },[query])

  useEffect(()=>{
    if(query==null){
      getSearchDataActionDispatch(' ')
    }
  },[query])
  
  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <SearchOutline />
        <MoreOutline />
      </Space>
    </div>
  )

  const back = () => navigate(-1);
   
  const handleChange = (e:any) => {
    let val = e.currentTarget.value
    setQuery(val)
}  
  const  displayStyle = query?{display:'block'}: {display: 'none'};
  const  resultdisplayStyle = query?{display:'block'}: {display: 'none'};


  const clearQuery = () => {
  setQuery('');
  queryRef.current.value = "";
  queryRef.current.focus();
}
  // console.log(query,"query");
  const cardata = car.filter((item,index)=>
    index >= 1
  )
  console.log(cardata,"cardata");
  
  return (
    <Wrapper>
      <NavBar right={right} onBack={back}>
          搜索
      </NavBar>
      
      <SearchBoxWrapper>
      <SearchOutline style={{backgroundColor:"f8f8f8"}}/>
            <input type="text" className='box'
             placeholder='' 
             ref={queryRef}
             onChange={handleChange}
             />
            <i className="iconfont icon-cuo" 
                style={displayStyle}
                onClick={clearQuery}
            ></i>
            
        </SearchBoxWrapper>
       <div className="result" style={resultdisplayStyle}>
        <h4>新车</h4>
        {
          cardata.map(item=>{
            return (
              <Link to={`/cardetail/${item.series_id}`}>
              <div className="car">
              <img src={item.pc_cover_url} alt="" />
              <div className="right">
                <h3>{item.sub_brand_name}-{item.series_name}</h3>
              <p>{item.agent_price}</p>
              </div>
              </div>
              </Link>
            )
          })
        }
       </div>
       {/* { loading && <EnterLoading>
        <Loading></Loading></EnterLoading>} */}

    </Wrapper>
  )
}
const mapStateToProps = (state: rootState) => ({
  loading: state.loading,
  car: state.search.car
 
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getSearchDataActionDispatch(key:any) {
    dispatch(getSearchDataAction(key))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(memo(Search))
