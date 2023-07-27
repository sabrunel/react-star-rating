import { useState, useEffect } from 'react';

export default function StarRating({ id, title, editRating }) {
    const [hoverStar, setHoverStar] = useState(0);
    const [rating, setRating] = useState(0);
    const [backgroundFill, setBackgroundFill] = useState({
        width: 0,
        opacity: 0
    })

    // Manages the hovering / selection states and set color fill accordingly
    useEffect(() => {
        if (rating != 0 && rating >= hoverStar) {
            paintStars(rating * 20, 1);
        } else if (hoverStar != 0) {
            paintStars(hoverStar * 20, 0.25);
        } else {
            paintStars(0, 0);
        }
         }, [hoverStar, rating])

    // Manages updates to individual ratings in order to compute the total
    useEffect(() => {
        editRating(id, rating);
    }, [rating])

    function paintStars(width, opacity) {
        setBackgroundFill((params) => {
            return {
                ...params,
                width: width,
                opacity: opacity
            }
        })
    }

    return (
        <div 
            style={{
                backgroundImage: `linear-gradient(90deg, rgba(255,215,0,${backgroundFill.opacity}) 0%, rgba(255,215,0,${backgroundFill.opacity}) ${backgroundFill.width - 20}%, rgba(255,215,0,1) ${backgroundFill.width}%, white ${backgroundFill.width}%)`,
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