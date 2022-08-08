import React, { useEffect, useState } from 'react';


const LaunchesFilter = ({launches,handleChanges}) => {
    const [filter,setFilter] = useState({
        order:"asc",
        success: false,
    })
    const {order,success} = filter;
   

    const handleFilter = (e) =>{
        let arr=[]
        e.preventDefault();

        if(success){
            arr = launches.filter(el=>el.launch_success === true || el.launch_success === null);
            handleChanges(arr);
        }
    }

    // console.log(arr, launcheaunches.data);

    return (  
        <form className='launches__filter'  onSubmit={(e)=>handleFilter(e)}>
            <article>
                <label>
                    Ascending
                    <input type="radio" name='orderBy' checked={true}  onChange={()=>setFilter({...filter, order:"asc"})}/>
                </label>
                <label>
                    Descending
                    <input type="radio" name='orderBy' onChange={()=>setFilter({...filter, order:"desc"})}/>
                </label>
            </article>

            <label>
                Succesfull Launches
                <input type="checkbox" onChange={()=>setFilter({...filter, success:!success})}/>
            </label>

            <button type='submit'>apply</button>
        </form>
     );
}
 
export default LaunchesFilter;