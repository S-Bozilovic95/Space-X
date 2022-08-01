import React, { useEffect, useState } from 'react';
import API from '../../assets/apiV3';
import LaunchesFilter from './LaunchesFilter';
import LaunchesList from './LaunchesList';

const Launches = () => {
    const [launches, setLaunches] = useState({
        data:[],
        loading:true
    })
    const [offset,setOffset] = useState(0);
    const {data,loading} = launches;

    const getLaunches = async(order)=>{
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
            <LaunchesFilter getLaunches={getLaunches}/>
             {!loading? <LaunchesList getLaunches={getLaunches} launches={launches.data}/>: "NO DATA"}
        </section>
     );
}
 
export default Launches;