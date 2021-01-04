import { getCurrentUrl, route, Router, Route, Link, exec, RouterContext } from './index';

Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;
Router.exec = exec;
Router.RouterContext = RouterContext;

export default Router;
