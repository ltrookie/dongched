import React from 'react'
import { CardataboxWrapper ,EnterLoading} from './style'
import { Link, useLocation, NavLink, useNavigate, Outlet } from 'react-router-dom'
import { Tabs,DotLoading} from 'antd-mobile'
import classnames from 'classnames'
import Loading from '@/components/common/loading-v2'

interface CardataboxProps {
  jiaoche: any[];
  loading:boolean;
  // onClick: () => void
}
const cardatabox: React.FC<CardataboxProps> = (props) => {
  const { pathname } = useLocation();
  const { jiaoche ,loading} = props

  console.log(jiaoche, "jiaoche");


  return (
    <CardataboxWrapper>
      <div className="switch">

      </div>
      <Tabs defaultActiveKey='1'
        style={{
          '--active-line-height': "1px",
          '--active-line-color': "yellow",
          "--active-title-color": "#171723",
          '--title-font-size': '15px',
          "--content-padding": "1px"

        }}
        className="tab"
      >
        <Tabs.Tab
          title={'热门车系'}
          key={1}
          className="title"
        >
          <div className="tab-content-chexi">
            <Tabs defaultActiveKey='1'
              style={{
                '--active-line-height': "none",
                "--active-title-color": "#171723",
                '--title-font-size': '15px',
                "--content-padding": "1px"
              }}
            >
              <Tabs.Tab
                title={'轿车'}
                key={1}
                className="title"
              >
                <div className="jiaoche">
                  <Tabs style={{
                    '--active-line-height': "none",
                    "--active-title-color": "#171723",
                  }} >
                    {
                      jiaoche.map(item => {
                        return (
                          <Tabs.Tab title={
                            <div className="car">
                              <img src={item.img} alt="" />
                              <h4>{item.name}</h4>
                              <span className='dijai'>{item.price}</span><span>询底价</span>
                            </div>
                          } key={item.id} />
                        )
                      })

                    }
                  </Tabs>
                 
                </div>
                
              </Tabs.Tab>
              <Tabs.Tab
                title={'SUV'}
                key={2}
                className="title"
              >
                <div className="jiaoche">
                  <div className="car">
                    <img src="https://p3.dcarimg.com/img/motor-img/052f73d298bab74dce3c1e78b0ea8f1a~tplv-resize:182:116.webp" alt="" />
                    <h4>星越L</h4>
                    <span className='dijai'>13.72万起</span><span>询底价</span>
                  </div>
                  <div className="car">
                    <img src="https://p3.dcarimg.com/img/motor-img/052f73d298bab74dce3c1e78b0ea8f1a~tplv-resize:182:116.webp" alt="" />
                    <h4>星越L</h4>
                    <span className='dijai'>13.72万起</span><span>询底价</span>
                  </div>
                  <div className="car">
                    <img src="https://p3.dcarimg.com/img/motor-img/052f73d298bab74dce3c1e78b0ea8f1a~tplv-resize:182:116.webp" alt="" />
                    <h4>星越L</h4>
                    <span className='dijai'>13.72万起</span><span>询底价</span>
                  </div>
                </div>
              </Tabs.Tab>
              <Tabs.Tab
                title={'MPV'}
                key={3}
                className="title"
              >
                <div className="jiaoche">

                  <div className="car">
                    <img src="https://p3.dcarimg.com/img/motor-img/ca3b383b45ed3d32080e341e8e664cd0~tplv-resize:182:116.webp" alt="" />
                    <h4>别克GL8</h4>
                    <span className='dijai'>22.79万起</span><span>询底价</span>
                  </div>
                  <div className="car">
                    <img src="https://p3.dcarimg.com/img/motor-img/ca3b383b45ed3d32080e341e8e664cd0~tplv-resize:182:116.webp" alt="" />
                    <h4>别克GL8</h4>
                    <span className='dijai'>22.79万起</span><span>询底价</span>
                  </div>
                  <div className="car">
                    <img src="https://p3.dcarimg.com/img/motor-img/ca3b383b45ed3d32080e341e8e664cd0~tplv-resize:182:116.webp" alt="" />
                    <h4>别克GL8</h4>
                    <span className='dijai'>22.79万起</span><span>询底价</span>
                  </div>

                </div>
              </Tabs.Tab>
              <Tabs.Tab
                title={'新能源'}
                key={4}
                className="title"
              >
                <div className="jiaoche">
                  <div className="car">
                    <img src="https://p3.dcarimg.com/img/motor-img/f974dc4060ed75347ec712525d041b11~tplv-resize:182:116.webp" alt="" />
                    <h4>雅阁</h4>
                    <span className='dijai'>5.58万起</span><span>询底价</span>
                  </div>
                  <div className="car">
                    <img src="https://p3.dcarimg.com/img/motor-img/f974dc4060ed75347ec712525d041b11~tplv-resize:182:116.webp" alt="" />
                    <h4>雅阁</h4>
                    <span className='dijai'>5.58万起</span><span>询底价</span>
                  </div>
                  <div className="car">
                    <img src="https://p3.dcarimg.com/img/motor-img/f974dc4060ed75347ec712525d041b11~tplv-resize:182:116.webp" alt="" />
                    <h4>雅阁</h4>
                    <span className='dijai'>5.58万起</span><span>询底价</span>
                  </div>

                </div>
              </Tabs.Tab>
            </Tabs>
          </div>
        </Tabs.Tab>
        <Tabs.Tab
          title={'热门品牌'}
          key={2}
          className="title"
        >
          <div className="tab-content-pingpai">
            <div className="pingbai">
              <img src="https://p1-dcd.byteimg.com/img/motor-img/343173efb2ab28cda1b0e5a5b49dab8e~tplv-resize:100:0.png" alt="" />
              <p>奔驰</p>
            </div>
            <div className="pingbai">
              <img src="https://p1-dcd.byteimg.com/img/motor-img/343173efb2ab28cda1b0e5a5b49dab8e~tplv-resize:100:0.png" alt="" />
              <p>奔驰</p>
            </div>
            <div className="pingbai">
              <img src="https://p1-dcd.byteimg.com/img/motor-img/343173efb2ab28cda1b0e5a5b49dab8e~tplv-resize:100:0.png" alt="" />
              <p>奔驰</p>
            </div>
            <div className="pingbai">
              <img src="https://p1-dcd.byteimg.com/img/motor-img/343173efb2ab28cda1b0e5a5b49dab8e~tplv-resize:100:0.png" alt="" />
              <p>奔驰</p>
            </div>
            <div className="pingbai">
              <img src="https://p1-dcd.byteimg.com/img/motor-img/343173efb2ab28cda1b0e5a5b49dab8e~tplv-resize:100:0.png" alt="" />
              <p>奔驰</p>
            </div>
            <div className="pingbai">
              <img src="https://p1-dcd.byteimg.com/img/motor-img/343173efb2ab28cda1b0e5a5b49dab8e~tplv-resize:100:0.png" alt="" />
              <p>奔驰</p>
            </div>
            <div className="pingbai">
              <img src="https://p1-dcd.byteimg.com/img/motor-img/343173efb2ab28cda1b0e5a5b49dab8e~tplv-resize:100:0.png" alt="" />
              <p>奔驰</p>
            </div>
            <div className="pingbai">
              <img src="https://p1-dcd.byteimg.com/img/motor-img/343173efb2ab28cda1b0e5a5b49dab8e~tplv-resize:100:0.png" alt="" />
              <p>奔驰</p>
            </div>
            <div className="pingbai">
              <img src="https://p1-dcd.byteimg.com/img/motor-img/343173efb2ab28cda1b0e5a5b49dab8e~tplv-resize:100:0.png" alt="" />
              <p>奔驰</p>
            </div>
            <div className="pingbai">
              <img src="https://p1-dcd.byteimg.com/img/motor-img/343173efb2ab28cda1b0e5a5b49dab8e~tplv-resize:100:0.png" alt="" />
              <p>奔驰</p>
            </div>
          </div>
        </Tabs.Tab>

      </Tabs>
      { loading ? <EnterLoading>
                        <Loading></Loading></EnterLoading>: null}

    </CardataboxWrapper>
  )
}

export default cardatabox