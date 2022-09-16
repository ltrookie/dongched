import React from 'react'
import { PartitionType } from '@/models'
import { TabBarWrapper } from './style'
import { useLocation, NavLink} from 'react-router-dom'
import {Tabs} from 'antd-mobile'
import classnames from 'classnames'

interface TabBarProps {
    data: PartitionType[];
    type: string;
    onClick: () => void
}

const TabBar :React.FC<TabBarProps> = (props) => {
  const location = useLocation()
  const { pathname } = location;
  
  const {data}= props
  return (
    <TabBarWrapper>
    <Tabs defaultActiveKey='2' 
          style={{'--active-line-height':"none",
                  "--active-title-color": "#171723",
                  '--title-font-size': '15px',
                  
                  }} 
    >
      {
       data.map((item)=>{
          return (
          
          <Tabs.Tab 
              title={
                <NavLink to={`/home${item.path}`} className={classnames({ active: pathname == item.path })} >
                <p>{item.name}</p>
                </NavLink>
              }
              key={item.id}
              
          >
          
          </Tabs.Tab>
         
          )
        })          
       
      }
    
    </Tabs>
    </TabBarWrapper>
  )
}

export default TabBar