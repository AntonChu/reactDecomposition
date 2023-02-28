import { HeaderTitles } from "./HeaderTitle";
import { HeaderNews } from "./HeaderNews";
import { HeaderAdvert } from "./HeaderAdvert";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-info">
        <HeaderTitles titles={["Ceйчас в СМИ", "В германии", "Рекомендуем"]}></HeaderTitles>
        <div className="header-news">
          <HeaderNews imgAdress={'#'} title={'random news text about something hapened somewhere'}></HeaderNews>
          <HeaderNews imgAdress={'#'} title={'random news text about something hapened somewhere'}></HeaderNews>
          <HeaderNews imgAdress={'#'} title={'random news text about something hapened somewhere'}></HeaderNews>
           <HeaderNews imgAdress={'#'} title={'random news text about something hapened somewhere'}></HeaderNews>
           <HeaderNews imgAdress={'#'} title={'random news text about something hapened somewhere'}></HeaderNews>
        </div>
      </div>
      <HeaderAdvert imgAdress={'#'} linkAdress={'#'} linkText={'Casual advert link'} description={'something hapened somewhere'}></HeaderAdvert>
    </header>
  );
};
