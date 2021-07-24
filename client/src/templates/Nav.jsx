import logo from '../images/HappyMinds.png';
import { Link } from 'react-router-dom';

const Nav = () => (

    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="#">
                <img src={logo} width="112" height="28"/>
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item">
                    <Link to='/' className="button is-light">
                        Home
                    </Link>
                </a>

                <a className="navbar-item">
                    <Link to='/resources' className="button is-light">
                        Resources
                    </Link>
                </a>

                <a className="navbar-item">
                    <Link to='/forums' className="button is-light">
                        Forums
                    </Link>
                </a>

                <a className="navbar-item">
                    <Link to='/help' className="button is-light">
                        Find Help Now
                    </Link>
                </a>


                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        More
                    </a>

                    <div className="navbar-dropdown">
                        <a className="navbar-item">
                            <Link to='/login' >
                                About
                            </Link>
                        </a>
                        <hr className="navbar-divider"/>
                        <a className="navbar-item">
                            <Link to='/login' >
                                Report an Issue
                            </Link>
                        </a>
                    </div>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <Link to='/register' className="button is-primary">
                            <strong>Sign up</strong>
                        </Link>
                        <Link to='/login' className="button is-light">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>

);

export default Nav;