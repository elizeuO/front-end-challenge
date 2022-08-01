import "./banner.scss";

function Banner({ title }) {
  return (
    <div className="c-banner c__center">
      <div className="c-container">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Banner;
