import React from 'react';

import './header.css';

const Header = () => {
    return (
        <div class="row">
            <div class="container">
                <div className="header d-flex align-items-baseline justify-content-between">
                    <h3>
                        <a href="#">
                        Star DB
                        </a>
                    </h3>
                    <ul className="d-flex">
                        <li>
                            <a href="#">People</a>
                        </li>
                        <li>
                            <a href="#">Planets</a>
                        </li>
                        <li>
                            <a href="#">Starships</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;