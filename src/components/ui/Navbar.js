import React from 'react'
import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import NavLogo from '../../Assets/img/nerologo.png'

import '../../Assets/Styles/Styles.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component {
    listener = null;
    state = {
        nav: false
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll');
    }
    handleScroll = () => {
        if (window.pageYOffset > 50) {
            if (!this.state.nav) {
                this.setState({nav: true});
            }
        } else {
            if (this.state.nav) {
                this.setState({nav: false});
            }
        }

    }

    render() {
        return (<div>
            <nav id="navBar"
                className={
                    `Nav ${
                        this.state.nav && 'Nav__black'
                    } navbar navbar-expand-md navbar-dark`
            }>
                <Container>
                    <Link to="/" className="navbar-brand">
                        <img alt="NeroLogo" className="mpalogo"
                            src={NavLogo}/>
                    </Link>
                    <div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">HOME</Link>
                            </li>

                            <li className='nav-item dropdown'>
                                <a className="nav-link dropdown-toggle" href="!#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>

                                <div className="nav-item dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="/development/website">Website Development</a>
                                    <a class="dropdown-item" href="/development/software">Software Development</a>
                                    <a class="dropdown-item" href="/development/logo">Logo Design</a>
                                </div>
                            </li>
                            <div className="nav">
                                <li className="nav-item">
                                    <Link to="/works" className="nav-link">Our works</Link>
                                </li>
                            </div>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">CONTACT</Link>
                            </li>

                            <FontAwesomeIcon className="icon"
                                icon={faPhone}/>

                            <li className="nav-item inline">
                                <Link to="/contact" className="nav-link">704-712-3369</Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>
        </div>)
    }
}

export default Navbar
