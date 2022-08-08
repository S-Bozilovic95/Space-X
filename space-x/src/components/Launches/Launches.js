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

    // const [offset,setOffset] = useState(0);
    const {data,loading} = launches;

    
    // functions
    // const getLaunches = async()=>{
    //     if(offset<120){
    //         let response = await API.get(`/launches?limit=10&offset=${offset}`);
    //         setLaunches({...launches, data:[...data, ...response.data], loading:false});
    //         setOffset(offset+10);
    //     }
    // }

    const getAllLaunches = async()=>{
        let response = await API.get(`/launches`);
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
             {!loading && filteredLaunches.length===0 ? <LaunchesList launches={launches.data}/> : !loading && filteredLaunches.length!=0 ? <LaunchesList launches={filteredLaunches}/>  :"no data"}
        </section>
     );
}
 
export default Launches;