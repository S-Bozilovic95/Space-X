import React, { useState } from 'react';


const LaunchesFilter = ({launches,handleChanges}) => {
    const [filter,setFilter] = useState({
        order:false,
        success: false,
        from:0,
        to:Math.round(new Date().getTime()/1000),
    })


    const {order,success,from,to} = filter;

    // console.log(order);
    
    const handleFilter = (e) =>{
        e.preventDefault();
        let arr=launches;

        if(success){
            console.log("jeste check");
            arr = arr.filter(el=>el.launch_success === true || el.launch_success === null);
        }

        if(!success){
            console.log("nije check");
        }

        if(order){
            arr = arr.sort((a,b)=> b.launch_date_unix - a.launch_date_unix);
            console.log("radi desc");
        }
        
        if(!order){
            arr = arr.sort((a,b)=> a.launch_date_unix - b.launch_date_unix);
            console.log("radi asc");
        }
        // console.log(arr);
        handleChanges(arr);
    }

// console.log(filter);

    return (  
        <form className='launches__filter'  onSubmit={(e)=>handleFilter(e)}>
            
            <label>
                Ascending
                <input type="radio" name='orderBy' onChange={()=>setFilter({...filter, order:false})}/>
            </label>

            <label>
                Descending
                <input type="radio" name='orderBy' onChange={()=>setFilter({...filter, order:true})}/>
            </label>
            
            <label>
                Succesfull Launches
                <input type="checkbox" onChange={()=>setFilter({...filter, success:!success})}/>
            </label>

            <label>
                From
                <input type="date" onChange={(e)=>setFilter({...filter, from: Math.round(new Date(e.target.value).getTime()/1000)})}/>
            </label>

            <label>
                To
                <input type="date" onChange={(e)=>setFilter({...filter, to: Math.round(new Date(e.target.value).getTime()/1000)})}/>
            </label>

            <button type='submit'>apply</button>
        </form>
     );
}
 
export default LaunchesFilter;