import React, { useState } from 'react';

const LaunchesFilter = ({getLaunches}) => {
    const [order,setOrder] = useState("asc");

    const handleOrder = (value) =>{
        setOrder(value)
    }

    const handleFilter = (e) =>{
        e.preventDefault();
        getLaunches(order);
    }

    console.log(order);

    return ( 
        <form className='launches__filter' onSubmit={(e)=>handleFilter(e)}>
           
           <input type="radio" name='orderBy' value={"asc"} onChange={(e)=>handleOrder(e.target.value)}/>
            <input type="radio" name='orderBy' value={"desc"} onChange={(e)=>handleOrder(e.target.value)}/>
           
            <button type='submit'>apply</button>
        </form>
     );
}
 
export default LaunchesFilter;