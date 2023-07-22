import { useState, useEffect } from 'react';

export default function TotalRating({ title, averageRating}) {
    const [filledChunk, setFilledChunk] = useState(0);

    useEffect(() => {
        if (averageRating != 0) {
            setFilledChunk(averageRating * 20);
        } else {
            setFilledChunk(0);
        }
        }, [averageRating])

    return (
        <div
            style={{
                backgroundImage: `linear-gradient(90deg, gold 0%, gold ${filledChunk}%, white ${filledChunk}%)`,
                backgroundClip: "text",
                WebkitbackgroundClip: "text"
        }}>
            <h2>{title}</h2>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button 
                        key={index}
                        className="btn-off"
                    >
                        <span>&#9733;</span>
                    </button>
                )
            })}
            <p>{`Total rating is ${averageRating}/5`}</p>
        </div>
    )
}