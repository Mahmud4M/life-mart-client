import { useState } from "react";
import Rating from "react-rating";



const Check = () => {
    const [rating, setRating] = useState(3);


    return (
        <div className='px-36 my-16'>
            <h1>sjafkhusafsgvh</h1>
            <Rating
                style={{ maxWidth: 180 }}
                value={rating}
                onChange={setRating}
            />
        </div>
    );
};

export default Check;