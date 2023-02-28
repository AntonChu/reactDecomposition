export const HeaderTitles = ({ titles }) => {
  return (
    <div className="header-titles">
      {titles.map((item, index) => {
        return <div className="header-tetel-item" key={index}>{item}</div>;
      })}
      <div className="data">{new Date().toLocaleString()}</div>
    </div>
  );
};
