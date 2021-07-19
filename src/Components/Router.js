import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "Pages/Home";
import About from "Pages/About"
import Projects from "Pages/Projects"
import FAQ from "Pages/FAQ"
import GlobalNav from "./GlobalNav"

const GlobalRouter = () => (
    <Router>
        <>
            <GlobalNav />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Projects" component={Projects} />
                <Route path="/FAQ" component={FAQ} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);

export default GlobalRouter;