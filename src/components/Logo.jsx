import React from 'react';
import { Link } from 'react-router-dom';
import checklist from '../assets/checklist.png'

export default function Logo() {
        return (
            <div>
            <Link to="/"><img className="Logo-main" alt="logo" src={checklist} /></Link>
            </div>
        )
}
