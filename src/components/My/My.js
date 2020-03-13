import React from 'react';
import './My.css'

const My = (props) => {
    const my =props.my;
    let total=0;
    for (let i = 0; i < my.length; i++) {
        const newFriend = my[i];
        total= total + newFriend.income;
        
    }
    

    const formatNumber = num =>{
        const precision = num.toFixed(2); 
        return Number(precision);
    }
    const grandTotal=formatNumber(total);


    return (
        <div className='friend-list'>
            <h1 className='head-text'>Friend List</h1>
            <br/>
            <h3>Total Friend: {my.length}</h3>
            <br/>
            <h3>Total Income of Friends: {grandTotal}</h3>
        
        </div>
    );
};

export default My;