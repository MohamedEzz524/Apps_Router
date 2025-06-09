import { useState } from 'react';
import NoImage from '../global/NoImage';

interface MovieCardImageProps {
  image: string;
}

const MovieCardImage = ({ image }: MovieCardImageProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <figure className="h-16 w-16 min-w-16 overflow-hidden rounded-sm">
      {imageError || !image || image === 'N/A' ? (
        <NoImage />
      ) : (
        <img
          src={image}
          alt="poster Image"
          className="h-full w-full object-cover"
          onError={() => setImageError(true)}
          loading="lazy"
        />
      )}
    </figure>
  );
};

export default MovieCardImage;
