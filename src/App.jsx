import './App.css'
import StarRating from './components/StarRating';

export default function App() {

  return (
    <div className="ratings-wrapper">
      <StarRating title="Category 1"/>
      <StarRating title="Category 2"/>
      <StarRating title="Category 3"/>
      <StarRating title="Category 4"/>
    </div>
  )
}
