import "styles/heroDetails.scss";

export const HeroDetail = (props: Props) => {
  return (
    <>
      <div key={props.id} className="det-data">
        <div>
          <img
            src={`${props.thumbnail.path}.${props.thumbnail.extension}`}
            alt="Character Details"
          />
        </div>
        <div className="det-header-god">
          <div className="det-header">
            <h2>{props.name}</h2>
            <p>
              {!props.description ? "This character has no definition feature." : props.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

interface Props {
  id: number | string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
