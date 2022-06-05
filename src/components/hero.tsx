import { Link } from "react-router-dom";
import "styles/hereos.scss";

export const Hero = (props: Props) => {
  return (
    <Link className="column" to={`details/${props.id}`}>
      <div className="column-images">
        <img
          src={`${props.thumbnail.path}/portrait_uncanny.${props.thumbnail.extension}`}
          alt="Character Details"
        />
      </div>
      <div className="column-heading">{props.name}</div>
      <div className="column-subheading">{""}</div>
    </Link>
  );
};

interface Props {
  id: number | string;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
