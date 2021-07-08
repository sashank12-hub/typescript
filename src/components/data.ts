import axios, { AxiosResponse } from 'axios';
interface params{
    url:string
}
async function  fetchdata(data:string) {
    let text;
    try{ 
        text=await axios.get(data);
        return text;
    }
    catch(e){
        text="something went wrong"
      return text;
    }

    
}
export default fetchdata;