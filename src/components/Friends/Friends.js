import React, { useState } from 'react';
import './Friend.css';
import fakeData from '../../fakeData';
import Add from '../Add/Add';
import My from '../My/My';

const Friends = () => {
    const first10=fakeData.slice(0,10);
    const [adds,setAdds]=useState(first10);
    const [my,setMy]=useState([]);

    const handleAddFriend = (add) => {
        console.log('Friend added',add);
        const newMy=[...my,add];
        setMy(newMy);
        
    }


    return (
        <div className="friend-container">
            <div className="add-friend">
                {
                    adds.map(ad => <Add
                        handleAddFriend={handleAddFriend}
                        add={ad}
                        ></Add> )

                }
            </div>



            <div className="my-friend">
            <My my={my} ></My>
            </div>

        </div>
    );
};

export default Friends;