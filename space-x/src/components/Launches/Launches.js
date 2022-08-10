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
    const [filteredLaunches, setFilteredLaunches] = useState([]);
    const {data,loading} = launches;


    const getAllLaunches = async()=>{
        let response = await API.get(`/launches`);
        setFilteredLaunches(response.data);
        setLaunches({data:response.data, loading:false});
    } 

    const handleChanges = (value) =>{
        setFilteredLaunches(value)
    }

    useEffect(()=>{
        getAllLaunches();
    },[])

// console.log(filteredLaunches);

    return ( 
        <section className='launches'>
            <LaunchesFilter launches={launches.data} handleChanges={handleChanges}/>
             {!loading ? <LaunchesList launches={filteredLaunches}/>:"no data"}
        </section>
     );
}
 
export default Launches;