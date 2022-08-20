import React, { useEffect, useState } from 'react';
import API from '../../assets/apiV3';
import LaunchesFilter from './LaunchesFilter';
import LaunchesList from './LaunchesList';
import {BsFilterSquare} from 'react-icons/bs';

const Launches = () => {
    // states
    const [launches, setLaunches] = useState({
        data:[],
        filteredLaunches:[],
        loading:true
    });
    const {data,loading,filteredLaunches} = launches;


    const getAllLaunches = async()=>{
        let response = await API.get(`/launches`);
         setLaunches({data:response.data, filteredLaunches:response.data, loading:false});
    } 

    const handleChanges = (value) =>{
        setLaunches({...launches,filteredLaunches:value});
    }

    


    useEffect(()=>{
        getAllLaunches();
    },[])
    
    

    return ( 
        <section className='launches'>
            <LaunchesFilter launches={data} handleChanges={handleChanges} />
             {!loading && filteredLaunches.length!=0 ? <LaunchesList launches={filteredLaunches}/>: !loading && filteredLaunches.length===0 ? "no data": "skeleton"}
        </section>
     );
}
 
export default Launches;