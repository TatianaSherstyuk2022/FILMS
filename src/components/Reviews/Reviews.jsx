import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchReview } from 'services/api';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchReview(movieId)
      .then(({ results }) => setReviews(results))
      .catch(error => {
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, [movieId]);

  if (reviews < 1) {
    return <div>Sorry, we don't have any reviews!</div>;
  }

  return (
    <div>
      {isLoading && <Loader />}
      {reviews.map(review => (
        <div key={review.id}>
          <p>
            <b>Author:</b> {review.author}
          </p>
          <p>
            <b>Content:</b> {review.content}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Reviews;
