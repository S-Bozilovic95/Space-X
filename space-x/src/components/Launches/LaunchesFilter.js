import React, { useState } from 'react';


const LaunchesFilter = ({launches,handleChanges,showFilter}) => {
    const [filter,setFilter] = useState({
        order:false,
        success: false,
        from:0,
        to:Math.round(new Date().getTime()/1000),
    })
    const {order,success,from,to} = filter;


    const handleFilter = (e) =>{
        e.preventDefault();
        let arr=launches;

        if(success === true){
            arr = arr.filter(el=>el.launch_success === true || el.launch_success === null);
        }

        if(order){
            arr = arr.sort((a,b)=> b.launch_date_unix - a.launch_date_unix);

        }else if(!order){
            arr = arr.sort((a,b)=> a.launch_date_unix - b.launch_date_unix);
        }

        arr = arr.filter(el=>el.launch_date_unix >= from && el.launch_date_unix <= to);
        handleChanges(arr);
    }




    return (  
        <form className={showFilter? "launches__filterShow" : "launches__filterHide"}  onSubmit={(e)=>handleFilter(e)}>
            
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
                <input type="checkbox"  onChange={()=>setFilter({...filter, success:!success})}/>
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