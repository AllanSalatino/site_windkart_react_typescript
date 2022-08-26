import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal/";
import { Three } from "./components/Canvas";

import { Background, Body } from "./styleApp";
import Video from "./assets/Video.mp4";
import SearchProvider from "./contexts/SearchContext";
import ModalProvider from "./contexts/ModalContext";


import "./styleApp";

function App() {
  return (
    <SearchProvider>
      <ModalProvider>
        <Body>
          <Background autoPlay loop muted>
            <source src={Video} type="video/mp4"></source>
          </Background>
          <Header />
          <Main />
          <Modal />
          <Three />
          <Footer />
        </Body>
      </ModalProvider>
    </SearchProvider>
  );
}

export default App;
