import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import { getXuancheDataAction } from '@/store/actionCreators'
import { IndexBar, List, Tabs ,DotLoading} from 'antd-mobile'
import { XuancheWrapper,EnterLoading } from './style'
import Header from '@/components/Header'
import LazyLoad from "react-lazyload"
import Loading from '@/components/common/loading'
import Bottom from "@/components/common/Bottom"






interface XuancheProps {
  loading: boolean;
  carbrand: any[];
  hotcar: any[];
  getXuancheDataActionDispatch: (rId: string) => void;
}

const Xuanche: React.FC<XuancheProps> = (props) => {
  const { carbrand, hotcar ,loading} = props

  const {
    getXuancheDataActionDispatch
  } = props
  useEffect(() => {
    getXuancheDataActionDispatch("1");
  }, [])

  console.log(hotcar, "hot");

  let condition = [
    { id: 1, desc: '15-20万' },
    { id: 2, desc: '25-35万' },
    { id: 3, desc: '10-15万' },
    { id: 4, desc: '35-50万' },
    { id: 5, desc: '轿车' },
    { id: 6, desc: 'SUV' },
    { id: 7, desc: '新能源' },
    { id: 8, desc: '更多条件' },

  ]

  return (
    <XuancheWrapper>
      <Header />


      <Tabs className='car-tabs'>
        <Tabs.Tab title='新车' key='new car' style={{ "float": "left" }}>

          <div className="hot-car-box">
            <div className="log-list">
              <div className="logo">
                <img src="https://p1-dcd.byteimg.com/img/motor-img/343173efb2ab28cda1b0e5a5b49dab8e~tplv-resize:100:0.png" alt="" />
                <p>大众</p>
              </div>
              <div className="logo">
                <img src="https://p3.dcarimg.com/avatar/100x100/1dd50000190229abeec8.png" alt="" />
                <p>奔驰</p>
              </div>
              <div className="logo">
                <img src="https://p3.dcarimg.com/avatar/100x100/1dd5000048d6334c26b4.png" alt="" />
                <p>奥迪</p>
              </div>
              <div className="logo">
                <img src="https://p3.dcarimg.com/avatar/100x100/1dd5000018fc7c108922.png" alt="" />
                <p>本田</p>
              </div>
              <div className="logo">
                <img src="https://p1-dcd.byteimg.com/img/motor-img/c8eb9d15ac7e99904711b5ffe5538777~tplv-resize:100:0.png" alt="" />
                <p>丰田</p>
              </div>
            </div>
            <div className="condition-select">

              {
                condition.map(item => {
                  return (
                    <div className="select">
                      <span key={item.id}>{item.desc}</span>
                    </div>
                  )

                })
              }
            </div>
            <div className="hot-car">
              <h4>热门车系</h4>
              <div className="hot">
                {
                  hotcar.map(item => {
                    return (
                      <div className="car">
                        <img src={item.img} alt="" />
                        <h4>{item.name}</h4>
                      </div>
                    )
                  })

                }
              </div>
            </div>
          </div>
          <div style={{ height: window.innerHeight }} className="car-list">
            <IndexBar>
              <IndexBar.Panel
                index={"index"}
                title={"欢迎选购"}
                key={"index"}
              >
                {carbrand.map((item, index) => {
                  return (
                    <List>
                      <List.Item key={item.id}>
                        <div className="lis">
                          <div className="logo">
                            <LazyLoad>
                              <img src={item.logo} alt="" onLoad={(e) => e.currentTarget.style.opacity = "1"} />
                            </LazyLoad>
                          </div>

                          <p>{item.name}</p>
                        </div>
                      </List.Item>


                    </List>

                  )
                })}
              </IndexBar.Panel>
            </IndexBar>
          </div>

        </Tabs.Tab>
        <Tabs.Tab title='新能源' key='xinnengyuan' style={{ "float": "left" }}>
          <div className="hot-car-box">
            <div className="log-list">
              <div className="logo">
                <img src="https://p1-dcd.byteimg.com/img/motor-img/343173efb2ab28cda1b0e5a5b49dab8e~tplv-resize:100:0.png" alt="" />
                <p>大众</p>
              </div>
              <div className="logo">
                <img src="https://p3.dcarimg.com/avatar/100x100/1dd50000190229abeec8.png" alt="" />
                <p>奔驰</p>
              </div>
              <div className="logo">
                <img src="https://p3.dcarimg.com/avatar/100x100/1dd5000048d6334c26b4.png" alt="" />
                <p>奥迪</p>
              </div>
              <div className="logo">
                <img src="https://p3.dcarimg.com/avatar/100x100/1dd5000018fc7c108922.png" alt="" />
                <p>本田</p>
              </div>
              <div className="logo">
                <img src="https://p1-dcd.byteimg.com/img/motor-img/c8eb9d15ac7e99904711b5ffe5538777~tplv-resize:100:0.png" alt="" />
                <p>丰田</p>
              </div>
            </div>
            <div className="condition-select">

              {
                condition.map(item => {
                  return (
                    <div className="select">
                      <span key={item.id}>{item.desc}</span>
                    </div>
                  )

                })
              }
            </div>
            <div className="hot-car">
              <h4>热门车系</h4>
              <div className="hot">
                {
                  hotcar.map(item => {
                    return (
                      <div className="car">
                        <img src={item.img} alt="" />
                        <h4>{item.name}</h4>
                      </div>
                    )
                  })

                }
              </div>
            </div>
          </div>
          <div style={{ height: window.innerHeight }} className="car-list">
            <IndexBar>
              <IndexBar.Panel
                index={"index"}
                title={"欢迎选购"}
                key={"index"}
              >
                {
                carbrand.map((item) => {
                  
                    return (
                    <List>
                      <List.Item key={item.id}>
                        <div className="lis">
                          <div className="logo">
                        
                            <img src={item.logo} alt=""/>
              
                          </div>

                          <p>{item.name}</p>
                        </div>
                      </List.Item>


                    </List>

                  )
                  
                 
                  
                
                })}
              </IndexBar.Panel>
            </IndexBar>
          </div>
        </Tabs.Tab>
        <Tabs.Tab title='精准找车' key='jingzhunzhaoche' style={{ "float": "left" }}>

        </Tabs.Tab>
      </Tabs>

      { loading && <EnterLoading>
        <Loading></Loading></EnterLoading>}


     <Bottom/>
    </XuancheWrapper>
 

  )
}

const mapStateToProps = (state: rootState) => ({
  loading: state.loading,
  carbrand: state.xuanche.carbrand,
  hotcar: state.xuanche.hotcar

})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getXuancheDataActionDispatch() {
    dispatch(getXuancheDataAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Xuanche))

