import * as React from 'react';
import { Link } from 'gatsby';
import Icon from '../assets/images/coyelloyd.svg';

export default function Header() {
  return (
    <header className="grid | navigation | border-bottom">
      <div className="brand | no-focus">
        <Link to="/" tabIndex={-1}>
          <Icon />
        </Link>
      </div>
      <nav>
        <ul className="flex | primary-navigation">
          <li>
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/bio" activeClassName="active">
              Bio
            </Link>
          </li>
          <li>
            <Link to="/work" activeClassName="active">
              Work
            </Link>
          </li>
          <li>
            <Link to="/writing" activeClassName="active">
              Writing
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="active">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
