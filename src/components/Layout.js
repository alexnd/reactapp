import PropTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';
//import DevTools from 'mobx-react-devtools'
import Menu from './Menu';

export default class Layout extends React.Component {
    render() {
        //let devtools = process.env.NODE_ENV === 'development' ? <DevTools /> : null;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Hello, cottans ;!)</h1>
                </header>
                <div>
                    <Menu/>
                </div>
                <hr/>
                <div>
                    {/*devtools*/}
                    {/*<h3>**{G.PROJECT_NAME}** </h3>*/}
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};
