const fetch = require('node-fetch')
const URL_SEARCHCAR = 
      'https://m.dongchedi.com/motor/searchapi/search_content_pc/?keyword={key}&format=json&cur_tab=6&offset=0&count=10&motor_source=mweb&headless_mode=1'

const fetchCarById = (key) =>{
    return fetch(URL_SEARCHCAR.replace("{key}",encodeURI(key)))
           .then(res=>res.json())
           .then(json=>json)
}

module.exports ={
    fetchCarById
}