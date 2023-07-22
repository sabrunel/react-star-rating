import './App.css'
import StarRating from './components/StarRating';
import TotalRating from './components/TotalRating';
import { useState, useEffect } from 'react';

export default function App() {
  const [ratings, setRatings] = useState([
    {
      id: 1,
      rating:0
    },
    {
      id: 2,
      rating:0
    },
    {
      id: 3,
      rating:0
    },
    {
      id: 4,
      rating:0
    }
  ]);
  const [averageRating, setAverageRating] = useState(0);
  const [showTotal, setShowTotal] = useState(true);

  useEffect(() => {
    let selectedRatings = ratings.map((ratingRecord) => ratingRecord.rating);

    // Checks whether all categories were selected (!=0) before displaying total rating
    if (!selectedRatings.includes(0)) {
      setShowTotal(true)
    } else {
      setShowTotal(false)
    }

    setAverageRating(computeAverageRating(ratings));
  }, [ratings])

  function editRating(id, newRating) {
    setRatings((currentRatings) => {
      return currentRatings.map((ratingRecord) => {
        if (ratingRecord.id === id) {
          return {
            ...ratingRecord,
            rating: newRating
          }
        }
        return ratingRecord;
      })
    })
  }

  function computeAverageRating(ratings)  {
      return ratings
        .map((ratingRecord) => ratingRecord.rating)
        .reduce((sum, rating) => (sum + rating)) / ratings.length;
  }

  return (
    <>
      <div className="ratings-wrapper">
        <StarRating id={ratings[0].id} title="Category 1" editRating={editRating}/>
        <StarRating id={ratings[1].id} title="Category 2" editRating={editRating}/>
        <StarRating id={ratings[2].id} title="Category 3" editRating={editRating}/>
        <StarRating id={ratings[3].id} title="Category 4" editRating={editRating}/>
      </div>
      {showTotal &&
        <TotalRating title="Total" averageRating={averageRating}/>
      }
    </>
  )
}
