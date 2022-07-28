import './header.scss';
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className="c-header">

      <div className="c-container">

        <ul className="c-header__nav l-flex l-flex--center">

            <li className="c-header__logo">
                <Link to="/" >
                <img src="/images/logo.webp" alt="Apiki Wordpress"></img>
                </Link>
            </li>

            <li>
                <Link to="" className="c-header__nav-link">
                    Sobre a apiki
                </Link>
            </li>

            <li>
                <Link to="" className="c-header__nav-link">
                    Hospedagem
                </Link>
            </li>

            <li>
                <Link to="" className="c-header__nav-link">
                    Desenvolvimento
                </Link>
            </li>

        </ul>
      </div>
    </header>
  );
}

export default Header;
