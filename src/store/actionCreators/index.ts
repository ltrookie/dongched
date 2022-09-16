import { Dispatch } from "redux";
import * as actionTypes from '../constants'
import {
    getPartitionsRequest,
    getTuijianBannersRequest,
    getXuancheCarbrandRequest,
    getXuancheHotcarRequest,
    getTuijianJiaocheRequest,
    getSearchCarRequest,
    getCardetailRequest
} from '@/api/request'

export const setLoading = (data: boolean) => ({
    type: actionTypes.SET_LOADING,
    data
})

export const setPartitions = (data: any[]) => ({
    type: actionTypes.SET_PARTITIONS,
    data
})

export const setBanners = (data: any[]) => ({
    type: actionTypes.SET_BANNERS,
    data
})

export const setCarbrand = (data: any[]) => ({
    type: actionTypes.SET_CARBRAND,
    data
})

export const setHotcar = (data: any[]) => ({
    type: actionTypes.SET_HOTCAR,
    data
})

export const setJiaoche = (data: any[]) => ({
    type: actionTypes.SET_JIAOCHE,
    data
})

export const setSearchCar = (data:any[]) =>({
    type:actionTypes.SET_SEARCHCAR,
    data
})

export const setCardetail = (data:any[]) =>({
    type:actionTypes.SET_CARDETAIL,
    data
})

export const getHomeDataAction = (rId: string) => {
    return (dispatch:Dispatch) => {
        dispatch(setLoading(true))
        return Promise.all([
            getPartitionsRequest(),
            getTuijianBannersRequest(),
            getTuijianJiaocheRequest()  
        ]).then(([partitionsResult,bannersResult,jiaocheResult]) => {
            console.log(partitionsResult.data,'carbrand');
            let partitions = partitionsResult.data;
            dispatch(setPartitions(partitions))
            dispatch(setBanners(bannersResult.data))
            dispatch(setJiaoche(jiaocheResult.data))
            dispatch(setLoading(false))
        })
    }
}

export const getXuancheDataAction = () => {
    return (dispatch:Dispatch) => {
        dispatch(setLoading(true))
        return Promise.all([
            getXuancheCarbrandRequest(),
            getXuancheHotcarRequest()   
        ]).then(([carbrandResult,hotcarResult]) => {
            console.log(carbrandResult.data,'carbrand');
            dispatch(setCarbrand(carbrandResult.data))
            dispatch(setHotcar(hotcarResult.data))
            dispatch(setLoading(false))
        })
    }
}

export const getSearchDataAction = (key:any) =>{
    return (dispatch:Dispatch) => {
        dispatch(setLoading(true))
        return Promise.all([
            getSearchCarRequest(key)
        ]).then(([searchResult])=>{
            let searchcar = searchResult.data
            let cardata=searchcar.splice(0)
            dispatch(setSearchCar(cardata))
            dispatch(setLoading(false))
        })
}
}

export const getCardetailDataAction = (id:any) =>{
    
    
    return (dispatch:Dispatch) => {
        dispatch(setLoading(true))
        return Promise.all([
            getCardetailRequest(id)
        ]).then(([cardetailResult])=>{
            console.log(cardetailResult.data.tab_list,'detail');
            let cardetail = cardetailResult.data.tab_list[0].data
            dispatch(setCardetail(cardetail))
            dispatch(setLoading(false))
        })
}
}




