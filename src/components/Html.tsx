/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react'
import { useState } from 'react'

import fetchdata from './data'
import {html} from '../utils/links'
import styles from './common.module.css'
import axios from 'axios'
const HTML = () => {
    const [text,setText]=useState<string| undefined>('')

    useEffect( () => {

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

      const response= fetchdata(html)
     setText(response)
       console.log(response)

        // async()=>{
        //     let  url=html;
        //     let  data=await axios.get(url)
        //     console.log(data)
        // }()
       
     
    //   setText(data)
     
     // let data= fetchdata(url)
// axios.get(url).then(res=>{
//     console.log(res.data)
//     // setText(res.data.split('\n'))
//     console.log(res.data.split('\n'))
//     setText(res.data.split('\n'))
// });
//console.log(data)
//setText(data)
       //setText(data.data)
       
    }, [])
    return (
        <div className={styles.container}>
            {/* {
                text.map(item=>{return(
                    <h5>{item}</h5>
                )})
            } */}
          
           
        </div>
    )
}

export default HTML
