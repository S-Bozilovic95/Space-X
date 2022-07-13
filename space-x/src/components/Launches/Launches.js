import React, { useEffect, useState } from 'react';
import API from '../../assets/apiV3';
import LaunchesList from './LaunchesList';

const Launces = () => {
    const [launches, setLaunches] = useState({
        data:[],
        loading:true
    })
    const [offset,setOffset] = useState(0);
    const {data,loading} = launches;

    const getLaunches = async()=>{
        if(offset<120){
            let response = await API.get(`/launches?limit=10&offset=${offset}`);
            setLaunches({...launches, data:[...data, ...response.data], loading:false})
            setOffset(offset+10);
        }
    }

    useEffect(()=>{
        getLaunches();
    },[])


    return ( 
        <>
             {!loading? <LaunchesList getLaunches={getLaunches} launches={launches.data}/>: "NO DATA"}
        </>
     );
}
 
export default Launces;