import React from 'react';

// handleChange
// state
// attaching state to value 

function Filters(props){
    return (
        <div className="filters">
            <button onClick={props.toggleGreased}>
                {props.onlyGreased ? 'Showing Only Greased' : 'Showing All' }
            </button>
            <select value={props.sort} onChange={event => props.changeSort(event)}>
                <option value="nosort">No Sort</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    )
}

export default Filters;