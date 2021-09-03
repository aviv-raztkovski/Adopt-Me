import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; // eslint-disable-line
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
    const themeHook = useState("#ad343e");

    return (
        <ThemeContext.Provider value={themeHook}>
            <div>
                <Router>
                    <header>
                        <Link to="/">
                            <h1>Adopt Me!</h1>
                        </Link>
                    </header>
                    <Switch>
                        <Route path="/details/:id">
                            <Details />
                        </Route>
                        <Route path="/">
                            <SearchParams />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </ThemeContext.Provider>
    );
};

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);
