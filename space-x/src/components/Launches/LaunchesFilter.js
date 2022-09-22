import React, { useState } from 'react';
import { BsFilterSquare } from 'react-icons/bs';


const LaunchesFilter = ({ launches, handleChanges }) => {
    const [filter, setFilter] = useState({
        order: false,
        success: false,
        from: 0,
        to: Math.round(new Date().getTime() / 1000),
    })
    const { order, success, from, to } = filter;
    const [showFilter, setShowFilter] = useState(false);



    const handleFilter = (e) => {
        e.preventDefault();
        let arr = launches;

        if (success === true) {
            arr = arr.filter(el => el.launch_success === true || el.launch_success === null);
        }

        if (order) {
            arr = arr.sort((a, b) => b.launch_date_unix - a.launch_date_unix);

        } else if (!order) {
            arr = arr.sort((a, b) => a.launch_date_unix - b.launch_date_unix);
        }

        arr = arr.filter(el => el.launch_date_unix >= from && el.launch_date_unix <= to);
        handleChanges(arr);
    }




    return (
        <div className='launches__filter'>
            <button type='button' className='launches__filter__funnel' onClick={() => setShowFilter(!showFilter)}><BsFilterSquare /></button>
            <form className={`launches__filter__box ${showFilter ? "launches__filter__filterShow" : ""}` } onSubmit={(e) => handleFilter(e)}>

                
                <article>
                    <label>
                        Ascending
                        <input className='classicInput' type="radio" name='orderBy' onChange={() => setFilter({ ...filter, order: false })} />
                    </label>

                    <label>
                        Descending
                        <input className='classicInput' type="radio" name='orderBy' onChange={() => setFilter({ ...filter, order: true })} />
                    </label>
                

                
                    <label>
                        From:
                        <input className='dateInput'  type="date" onChange={(e) => setFilter({ ...filter, from: Math.round(new Date(e.target.value).getTime() / 1000) })} />
                    </label>

                    <label>
                        To:
                        <input className='dateInput' type="date" onChange={(e) => setFilter({ ...filter, to: Math.round(new Date(e.target.value).getTime() / 1000) })} />
                    </label>
                    

                    <label>
                        Succesfull Launches
                        <input className='classicInput' type="checkbox" onChange={() => setFilter({ ...filter, success: !success })} />
                    </label>
                </article>

                <input className='submitInput' type='submit' value="apply" />
            </form>
        </div>
    );
}

export default LaunchesFilter;