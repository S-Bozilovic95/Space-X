import React, { useEffect, useState } from 'react';
import API from '../../assets/apiV3';
import LaunchesFilter from './LaunchesFilter';
import LaunchesList from './LaunchesList';

const Launches = () => {
    // states
    const [launches, setLaunches] = useState({
        data:[],
        loading:true
    })
    const[filteredLaunches,setFilteredLaunches] = useState({
        data:[],
        loading:true
    })
    const [offset,setOffset] = useState(0);
    const [order,setOrder] = useState("asc");
    const {data,loading} = launches;

    
    // functions
    const getLaunches = async()=>{
        if(offset<120){
            let response = await API.get(`/launches?limit=10&offset=${offset}`);
            setLaunches({...launches, data:[...data, ...response.data], loading:false});
            setOffset(offset+10);
        }
    }

    const getAllLaunches = async(order)=>{
        let response = await API.get(`/launches?order=${order}`);
        setFilteredLaunches({data:response.data, loading:false});
    } 


    
    useEffect(()=>{
        getLaunches();
    },[])

    // console.log(typeof(getLaunches));


    return ( 
        <section className='launches'>
            <LaunchesFilter filteredLaunches={filteredLaunches} getAllLaunches={getAllLaunches}/>
             {!loading && filteredLaunches.data.length === 0? <LaunchesList getLaunches={getLaunches} launches={launches.data}/>: !loading && filteredLaunches.data.length != 0? <LaunchesList getLaunches={null} launches={filteredLaunches.data}/> : "NO DATA"}
        </section>
     );
}
 
export default Launches;