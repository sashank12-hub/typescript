import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { angular } from '../utils/links';
import styles from './common.module.css'
import fetchdata from './data';
const Angular = () => {
    const [text,setText]=useState<string[]>([])

    useEffect(() => {
        //abc()
        let  url=angular;





    //  axios.get(url).then(res=>{
    // console.log(res.data)
    // // setText(res.data.split('\n'))
    // console.log(res.data.split('\n'))
    // setText(res.data.split('\n'))
},[]);
//  const abc= async ()=>{
//     let  url=angular;
//     let data=await fetchdata(url);
//    setText(data)
// }
//console.log(data)
//setText(data)
       //setText(data.data)
       
   // }, [])
    return (
        <div className={styles.container}>
            {
                text.map(item=>{return(
                    <h5>{item}</h5>
                )})
            }
          
           
        </div>
    )
}


export default Angular
