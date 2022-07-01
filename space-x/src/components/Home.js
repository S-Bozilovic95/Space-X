import React, { useEffect, useState } from 'react';
import API from '../assets/apiV3'

const Test = () => {
    const [launches, setLaunches] = useState({
        data:[],
        loading:true
    })

    const {data,loading} = launches;

    const getLaunches = async()=>{
        let response = await API.get("/launches");
        setLaunches({...launches, data:response.data, loading:false})
    }

    useEffect(()=>{
        getLaunches();
    },[])

    return ( 
        <>
         Home
         {!loading? console.log(launches) : "NO DATA"}
        </>
     );
}
 


export default Test;
