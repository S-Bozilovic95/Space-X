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

    const [showFilter, setShowFilter] = useState(false);
    const {data,loading,filteredLaunches} = launches;


    const getAllLaunches = async()=>{
        let response = await API.get(`/launches`);
         setLaunches({data:response.data, filteredLaunches:response.data, loading:false});
    } 

    const handleChanges = (value) =>{
        setLaunches({...launches,filteredLaunches:value});
    }

    const handleShowFilter = () =>{
        setShowFilter(!showFilter);
    }


    useEffect(()=>{
        getAllLaunches();
    },[])
    
    console.log(showFilter);

    return ( 
        <section className='launches'>
            <button type='button' className='launches__funnel' onClick={()=>handleShowFilter()}><BsFilterSquare/></button>
            <LaunchesFilter launches={data} handleChanges={handleChanges} showFilter={showFilter}/>
             {!loading && filteredLaunches.length!=0 ? <LaunchesList launches={filteredLaunches}/>: !loading && filteredLaunches.length===0 ? "no data": "skeleton"}
        </section>
     );
}
 
export default Launches;