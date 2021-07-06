import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import About from "../Routes/About"
import Projects from "../Routes/Projects"
import FAQ from "../Routes/FAQ"
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