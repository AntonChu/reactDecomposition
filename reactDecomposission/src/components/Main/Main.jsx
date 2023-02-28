import { MainMenu } from "./MainMenu";
import { MainForm } from "./MainForm";
import { MainAdvert } from "./MainAdvert";

export const Main = () => {
    return (
        <main>
            <MainMenu menuList={['somepoint', 'somepoint', 'somepoint', 'somepoint', 'somepoint', 'somepoint', 'somepoint']}></MainMenu>
            <MainForm></MainForm>
            <MainAdvert imgLink={'#'}></MainAdvert>
        </main>
    )
}