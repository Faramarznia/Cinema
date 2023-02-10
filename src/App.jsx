import React from "react";
import { Switch, Route, BrowserRouter} from "react-router-dom";
import Movies from "./components/Movies";
import MovieDetail from "./components/MovieDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/movies/:movie_id" component={MovieDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
