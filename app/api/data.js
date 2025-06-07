const axios = require('axios');

async function getData(){
    try {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

export default getData;