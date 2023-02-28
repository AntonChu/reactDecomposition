import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/header";
import { Aside } from "./components/Aside.jsx/Aside";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

const Page = () => {
  return (
    <div className="page">
    <Aside></Aside>
    <div className="main-wrapper">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  </div>
  )
  
}

function App() {
  return (
    <Page></Page>
  );
}

export default App;
