import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { javascript } from '../utils/links';
import styles from './common.module.css'
const Javascript = () => {
    const [text,setText]=useState<string[]>([])

    useEffect(() => {
      let  url=javascript;
     // let data= fetchdata(url)
axios.get(url).then(res=>{
    console.log(res.data)
    // setText(res.data.split('\n'))
    console.log(res.data.split('\n'))
    setText(res.data.split('\n'))
});
//console.log(data)
//setText(data)
       //setText(data.data)
       
    }, [])
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


export default Javascript
