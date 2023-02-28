export const MainMenu = ({ menuList }) => {
  return (
    <div className="main-menu">
      {menuList.map((el, index) => {
        return (
          <div key={index}>
            <a href="#">{el}</a>
          </div>
        );
      })}
    </div>
  );
};
