import { axiosInstance } from "./config";
import {
    URL_PARTITION,
    URL_TUIJIAN_BANNERS,
    URL_XUANCHE_CARBRAND,
    URL_XUANCHE_HOTCAR,
    URL_TUIJIAN_JIAOCHE,
    URL_SEARCH_CAR,
    URL_CARDETAIL_DATA

}  from './url'

export const getPartitionsRequest = 
    () => axiosInstance.get(URL_PARTITION)

export const getTuijianBannersRequest =
    () => axiosInstance.get(URL_TUIJIAN_BANNERS)

export const getXuancheCarbrandRequest =
    () => axiosInstance.get(URL_XUANCHE_CARBRAND)

export const getXuancheHotcarRequest =
    () => axiosInstance.get(URL_XUANCHE_HOTCAR)

export const getTuijianJiaocheRequest =
    () => axiosInstance.get(URL_TUIJIAN_JIAOCHE)

export const getSearchCarRequest= 
    (key:any) => {
        let url = `${URL_SEARCH_CAR}/${key}`
        return axiosInstance.get(url)}

export const getCardetailRequest= 
        (id:any) => {
            let url = `${URL_CARDETAIL_DATA}/${id}`
            return axiosInstance.get(url)}