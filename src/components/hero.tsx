import { Link } from "react-router-dom";
import "../styles/hereos.css";
export const Hero = (props) => {
  return (
    <Link className='column' to={`details/${props.id}`}>
      <div className='column-images'>
        <img
          src={`${props.thumbnail.path}/portrait_uncanny.${props.thumbnail.extension}`}
          alt='Character Details'
          height={280}
          width={380}
        />
      </div>
      <div className='column-heading'>{props.name}</div>
      <div className='column-subheading'>{""}</div>
    </Link>
  );
};
