import "styles/heroDetails.scss";

export const ComicDettail = (props: Props) => {
  return (
    <>
      <li key={props.id} className="gradientlist">
        <div>
          <img
            src={`${props.thumbnail.path}/portrait_incredible.${props.thumbnail.extension}`}
            alt="Character Details"
          />
        </div>
        <div className="grad-sub">
          <h2>{props.title}</h2>
          <p>
            <b>Description : </b>{" "}
            {props.description ??
              "Marvel Comics is the brand name and primary imprint of Marvel Worldwide Inc., formerly Marvel Publishing, Inc. and Marvel Comics Group, a publisher of American comic books and related media. In 2009, The Walt Disney Company acquired Marvel Entertainment, Marvel Worldwide's parent company."}
          </p>
          <p>
            <b>Page Count : </b> {props.pageCount ?? "NONE"}
          </p>
        </div>
      </li>
    </>
  );
};

interface Props {
  id: number;
  pageCount: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
