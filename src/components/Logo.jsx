import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
        return (
            <div>
            <Link to="/"><img className="Logo-main" alt="logo" src='https://cdn-icons.flaticon.com/png/512/2098/premium/2098402.png?token=exp=1648511069~hmac=c90d1226a4142b5e72b673e482c90779' /></Link>
            </div>
        )
}
