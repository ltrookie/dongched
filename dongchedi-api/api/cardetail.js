const fetch = require('node-fetch')
const URL_CARDATA = 
      'https://m.dongchedi.com/motor/pc/car/series/car_list?series_id={id}&city_name=%E4%B8%8A%E6%B5%B7'

const fetchCardataById = (id) =>{
    return fetch(URL_CARDATA.replace("{id}",id))
           .then(res=>res.json())
           .then(json=>json)
}

module.exports ={
    fetchCardataById
}