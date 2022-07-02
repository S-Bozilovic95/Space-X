import React, { useEffect, useState } from 'react';
import API from '../assets/apiV4';
import LaunchesList from './Home/LaunchesList';


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
         {!loading? <LaunchesList launches={launches.data}/>: "NO DATA"}
        </>
     );
}
 


export default Test;
