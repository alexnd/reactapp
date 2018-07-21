import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import _pages from './pages';
import Layout from './components/Layout';
var pages = {};
_pages.map((k) => pages[k] = require('./pages/' + k + '.js').default);

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          { routes.map(({ path, exact, title, component: Comp }, i) => (
            <Route path={path} exact={exact} key={`route${i}`} render={
              (props) => {
                document.title = `${title} - ${G.PROJECT_NAME}`;
                return <Layout {...props}>
                  {React.createElement(pages[Comp], props)}
                </Layout>;
              }
            }></Route>
          )) }
          <Route component={pages.NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
