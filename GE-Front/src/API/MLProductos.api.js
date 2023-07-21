import axios from "axios";

const accesToken = 'APP_USR-9004978036577358-071111-7215be725faecbf9b60951a8c31602b5-1420332434'

const fetchData = async () => {
    try {
        const response = await axios.get('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055', {
            headers: {
                Authorization: `Bearer ${accesToken}`
            }
        });
        console.log(response.data.results)
        return response.data.results;
    } catch (error) {
        console.log(error)
    } 
}

export default fetchData;
