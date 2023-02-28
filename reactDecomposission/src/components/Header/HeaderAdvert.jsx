export const HeaderAdvert = ({
  imgAdress,
  linkAdress,
  linkText,
  description,
}) => {
  return (
    <div className="advert">
      <div className="advert-img-container">
        <img className="advert-img" src={imgAdress} />
      </div>
      <p>
        <a href={linkAdress}>{linkText}</a>
      </p>
      <p>{description}</p>
    </div>
  );
};
