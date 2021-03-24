import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import NavigationBar from "./components/Navigation/NavigationBar";
import MainPage from "./pages/MainPage";
import BookPage from "./pages/BookPage/BookPage";
import GamesPage from "./pages/GamesPage";
import Sprint from "./pages/Games/Sprint";
import AudioCall from "./pages/Games/Audiocall";
import Savannah from "./pages/Games/Savannah";
import StatisticPage from "./pages/StatisticPage";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import classesCss from "./styles/App.module.scss";
import "./styles/effect.scss";

function App() {
  const location = useLocation();

  return (
    <div>
      <NavigationBar />
      <TransitionGroup>
        <CSSTransition
          timeout={800}
          classNames="transit"
          key={location.key || location.pathname}
        >
          <Switch location={location}>
            <Route path="/book">
              <BookPage />
            </Route>
            <Route path="/statistic">
              <StatisticPage />
            </Route>
            <Route path="/games/savannah">
              <Savannah />
            </Route>
            <Route path="/games/audiocall">
              <AudioCall />
            </Route>
            <Route path="/games/sprint">
              <Sprint />
            </Route>
            <Route path="/games" exact>
              <GamesPage />
            </Route>
            <Route path="/" exact>
              <MainPage />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
