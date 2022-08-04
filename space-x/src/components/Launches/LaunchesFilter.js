import React, { useState } from 'react';


const LaunchesFilter = ({filteredLaunches,getAllLaunches}) => {
    const [arr,setArr] = useState([]);
   

    const handleFilter = (e) =>{
        e.preventDefault();
        getAllLaunches("desc");
        setArr([]);
        filteredLaunches.data.forEach(el => {
            setArr(arr=>[...arr, el]);
        });
    }

    // console.log(arr);

    return ( 
        <form className='launches__filter' onSubmit={(e)=>handleFilter(e)}>
            <article>
                <label>
                    Ascending
                    <input type="radio" name='orderBy' value="asc"/>
                </label>
                <label>
                    Descending
                    <input type="radio" name='orderBy' value="desc"/>
                </label>
            </article>

            <label>
                Succesfull Launches
                <input type="checkbox" value="" />
            </label>

            <button type='submit'>apply</button>
        </form>
     );
}
 
export default LaunchesFilter;