import React from 'react'
import HOC1 from '../../hoc/Hoc1';
import { withRouter } from "react-router";

const Login = () => {
    return (
        <div>
            <h1>Login Detailys</h1>
        </div>
    )
}

export default (withRouter(HOC1(Login)));
