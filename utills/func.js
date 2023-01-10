const { default: axios } = require('axios')

const getData = async(url)=>{
    const result = await axios.get(url)
    .then(response=>response.data)
    .catch(err=>err)
    return result
}

module.exports = { getData }