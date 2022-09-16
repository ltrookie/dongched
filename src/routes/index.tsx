import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home'
import GuanZhu from '@/pages/Home/GuanZhu'
import TuiJian from '@/pages/Home/TuiJian'
const ZhiBo = lazy(() => import ('@/pages/Home/ZhiBo'))
const XiaoShiPing = lazy(() => import ('@/pages/Home/XiaoShiPing'))
const NewCar = lazy(() => import ('@/pages/Home/NewCar'))
const Cheyouquan = lazy(() => import ('@/pages/Cheyouquan'))
const Xuanche = lazy(() => import ('@/pages/Xuanche'))
const Ershouche = lazy(() => import ('@/pages/Ershouche'))
const Fuwu = lazy(() => import ('@/pages/Fuwu'))
const Search = lazy(() => import ('@/pages/Search'))
const Cardetail = lazy(() => import ('@/pages/Cardetail'))





export default () => {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route> */}
                <Route path="/cheyouquan" element={<Cheyouquan/>}></Route>
                <Route path="/xuanche" element={<Xuanche/>}></Route>
                <Route path="/ershouche" element={<Ershouche/>}></Route>
                <Route path="/fuwu" element={<Fuwu/>}></Route>
                <Route path="/" element={<Home/>}>
                <Route path="/" element={<TuiJian/>}/>
                {/* <Route path="/home/tuijian" element={<Home/>}/> */}
                <Route path="/home" element={<TuiJian/>}/>
                <Route path="/home/guanzhu" element={<GuanZhu/>}/>
                <Route path="/home/tuijian" element={<TuiJian/>}/>
                <Route path="/home/zhibo" element={<ZhiBo/>}/>
                <Route path="/home/xiaoshiping" element={<XiaoShiPing/>}/>
                <Route path="/home/newcar" element={<NewCar/>}/>
                </Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/cardetail/:id" element={<Cardetail />}></Route>

                
            </Routes>
        </>
    )
}
