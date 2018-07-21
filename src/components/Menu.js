import { Link } from 'react-router-dom';
import routes from '../routes';
//import PageNames from '../../config/pagenames';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Menu extends React.Component {

    render() {
        return (
            <div>
                <Nav pills>
                    { routes.map(({path, exact, title, component: Comp}, i) => (
                        <NavItem key={`menuitem${i}`}>
                            <NavLink tag={Link} to={path}
                                active={window.location.pathname === path}>
                                { title || Comp }
                            </NavLink>
                        </NavItem>
                    )) }
                </Nav>
            </div>
        );
    }
}
  
export default Menu;