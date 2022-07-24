import React, { useEffect, useState } from 'react';
import API from '../../assets/apiV3';
import LaunchesList from './LaunchesList';

const Launces = () => {
    const [launches, setLaunches] = useState({
        data:[],
        loading:true
    })
    const [offset,setOffset] = useState(0);
    const [order,setOrder] = useState("asc");
    const {data,loading} = launches;

    const getLaunches = async()=>{
        if(offset<120){
            let response = await API.get(`/launches?limit=10&offset=${offset}&order=${order}`);
            setLaunches({...launches, data:[...data, ...response.data], loading:false});
            setOffset(offset+10);
        }
    }


    useEffect(()=>{
        getLaunches();
    },[])


    return ( 
        <section className='launches'>
             {!loading? <LaunchesList getLaunches={getLaunches} launches={launches.data}/>: "NO DATA"}
        </section>
     );
}
 
export default Launces;