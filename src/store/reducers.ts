import { combineReducers, AnyAction } from "redux"
import * as actionTypes from './constants'

const initalState = {
    loading:true,
    partitions:[],
    tuijian:{
        banners:[],
        jiaoche:[]
    },
    xuanche:{
        carbrand:[],
        hotcar:[]
    },
    search:{
        car:[]
    },
    cardetail:{
        cardata:[]
    }

}

const loadingReducer = (state=initalState.loading,
         action:AnyAction)=>{
    switch(action.type){
        case actionTypes.SET_LOADING:
            return action.data
        default:
            return state
    }
}

const partitionsReducer = (state = initalState.partitions, action: AnyAction) => {
    
    switch(action.type) {
        case actionTypes.SET_PARTITIONS:
            return   action.data
        break;
        default:
            return state
    }
    
}

const tuijianReducer = (state = initalState.tuijian, action: AnyAction) => {
    console.log(action.data,"123456");
    switch(action.type) {
        case actionTypes.SET_BANNERS:
            return {
                ...state,
                banners:action.data
            }
        break;
        case actionTypes.SET_JIAOCHE:
                return {
                    ...state,
                    jiaoche:action.data
                }
            break;
        default:
            return state
    }
    
}

const xuancheReducer = (state = initalState.xuanche, action: AnyAction) => {
    console.log(action.data,"car");
    switch(action.type) {
        case actionTypes.SET_CARBRAND:
            return {
                ...state,
                carbrand:action.data
            }
        break;
        case actionTypes.SET_HOTCAR:
            return {
                ...state,
                hotcar:action.data
            }
        break;
        default:
            return state
    }
    
}

const searchReducer = (state = initalState.search,action:AnyAction)=>{
    switch(action.type){
        case actionTypes.SET_SEARCHCAR:
            return {
                ...state,
                car:action.data
            }
        break;
        default :
        return state;
    }

}

const cardetailReducer = (state = initalState.cardetail,action:AnyAction)=>{
    switch(action.type){
        case actionTypes.SET_CARDETAIL:
            return {
                ...state,
                cardata:action.data
            }
        break;
        default :
        return state;
    }

}


export default combineReducers({
    loading:loadingReducer,
    partitions:partitionsReducer,
    tuijian:tuijianReducer,
    xuanche:xuancheReducer,
    search:searchReducer,
    cardetail:cardetailReducer
})