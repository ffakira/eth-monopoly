import React, {useEffect, useState} from 'react';
import {
    getAccounts,
    getBalance,
    trimAddress,
    roundNearest
} from "../api/util";

import { NavLink } from 'react-router-dom';

function Nav(): JSX.Element | null {
    const [accounts, setAccounts] = useState<string[] | null>(null);
    const [bal, setBal] = useState<string | null>(null);

    useEffect(() => {
        if (accounts != null) {
            getBalance(accounts[0]).then(getBal => setBal(getBal))
        }
    });

    useEffect(() => {
        getAccounts().then(getAccounts => setAccounts(getAccounts));
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 mb-5">
            <a className="navbar-brand" href="/">ETH Monopoly</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/howto-play">How To Play</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/blog">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/docs">Documentation</NavLink>
                    </li>
                </ul>
                <span className="navbar-text mr-5 text-dark">
                    {bal ? `${roundNearest(bal)} ETH` : ``}
                </span>
                <span className="navbar-text text-dark">
                    {accounts ? trimAddress(accounts[0]) : 'No address detected!'}
                </span>
            </div>
        </nav>
    );
}

export default Nav;