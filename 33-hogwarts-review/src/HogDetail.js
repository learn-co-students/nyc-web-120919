import React from 'react';

function HogDetail(props){
    return (
        <div className="hog-detail">
            <div>specialty: {props.specialty}</div>
            <div>weight: {props.weight}</div>
            <div>{props.greased ? 'Grease Lightning' : 'Not Grease Lightning'}</div>
            <div>highest medal achieved: {props['highest medal achieved']}</div>
        </div>
    )
}

export default HogDetail;