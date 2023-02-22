import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCast } from 'services/api';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const [actors, setActors] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetchCast(movieId)
      .then(({ cast }) => setActors(cast))
      .catch(error => {
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, [movieId]);

  let profilePath;

  return (
    <div>
      {isLoading && <Loader />}

      {actors &&
        actors.map(actor => {
          if (actor.profile_path) {
            profilePath = `https://image.tmdb.org/t/p/w200/${actor.profile_path}`;
          } else {
            profilePath = `https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png`;
          }
          return (
            <div key={actor.id}>
              <img width="30px" src={profilePath} alt={actor.name} />
              <p>
                <b>Name:</b> {actor.name}
              </p>
              <p>
                <b>Character:</b> {actor.character}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Cast;
