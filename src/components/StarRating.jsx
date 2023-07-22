import { useState, useEffect } from 'react';

export default function StarRating({ id, title, editRating }) {
    const [hoverStar, setHoverStar] = useState(0);
    const [rating, setRating] = useState(0);
    const [filledChunk, setFilledChunk] = useState(0);

    // Manages the hovering / selection states and set color fill accordingly
    useEffect(() => {
        if (rating != 0 && rating > hoverStar) {
            setFilledChunk(rating * 20);
        } else if (hoverStar != 0) {
            setFilledChunk(hoverStar * 20);
        } else {
            setFilledChunk(0);
        }
         }, [hoverStar, rating])

    // Manages updates to individual ratings in order to compute the total
    useEffect(() => {
        editRating(id, rating);
    }, [rating])

    return (
        <div 
            style={{
                backgroundImage: `linear-gradient(90deg, gold 0%, gold ${filledChunk}%, white ${filledChunk}%)`,
                backgroundClip: "text",
                WebkitbackgroundClip: "text"
        }}>
            <h2>{title}</h2>
            <p hidden>{`Current rating is ${rating}/5`}</p>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                        <button 
                            key={index}
                            onClick={() => {
                                setRating(index);
                            }}
                            onMouseEnter={() =>  {
                                setHoverStar(index);
                            }}                            
                            onMouseLeave={() => {
                                setHoverStar(rating);
                            }}
                        >
                            <span>&#9733;</span>
                        </button>
                )
            })}
        </div>
    )
}