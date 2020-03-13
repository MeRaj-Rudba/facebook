import React from 'react';
import './Add.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

const Add = (props) => {

    const {img,name,income,work}=props.add;


    return (
        <div className='new-friend'>

            <div className='profile-image' >
                <img src={img} alt=""/>
            </div>

            
            <div className='friend-info'>
                <h4 className='friend-name'>{name}</h4>
                <br/>
                <p>Work: {work}</p>
                <p>Income: ${income}</p>
                <br/>
                
                <button className='add-button'
                onClick = {() => props.handleAddFriend(props.add)} 
                        ><FontAwesomeIcon icon={faPlus} 
                        /> Add Friend
                </button>
            </div>




            
            
        </div>
    );
};

export default Add;