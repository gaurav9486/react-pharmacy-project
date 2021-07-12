import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { adminLogin, executiveLogin } from '../../actions'
import './home.css';

const Home = (props) => {

    const [user, setUser] = useState("Admin");
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(localStorage.getItem('loginStatus') || false)
    const history = useHistory();

    if (loginStatus !== 'false') {
        localStorage.setItem('loginStatus', loginStatus)
    }

    const loginFunction = (e) => {
        e.preventDefault();
        if (user === "Admin") {
            if (userName === "test-admin" && userPassword === "test-admin") {
                setLoginStatus(true);
                localStorage.setItem("loginStatus", true);
                localStorage.setItem("adminLogin", true);
                history.push("/admin/add-medicine");
                props.adminLoggingIn();
            } else {
                alert("Enter correct user credentials");
            }
        }
        if (user === "Executive") {
            if (userName === "test-sales" && userPassword === "test-sales") {
                setLoginStatus(true);
                localStorage.setItem("loginStatus", true);
                localStorage.setItem("executiveLogin", true);
                history.push("/executive/create-order");
                props.executiveLoggingIn();
            } else {
                alert("Enter correct user credentials");
            }
        }
    }

    return (
        <>
            <div className="main-container">
                <form className="login-form" onSubmit={loginFunction}>
                    <h1>Sign In</h1>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setUser("Admin")
                    }} className={user === "Admin" ? "current-user" : "access-btn"}>Admin</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setUser("Executive")
                    }} className={user === "Executive" ? "current-user" : "access-btn"}>Executive</button>
                    <input type="text" name="username" placeholder="Enter your username" required onChange={(userVal) => setUserName(userVal.target.value)} />
                    <input type="password" name="userPassword" placeholder="Enter your password" required onChange={(passVal) => setUserPassword(passVal.target.value)} />
                    <button className="login-btn" type="submit">Login</button>
                </form>
            </div>

        </>

    )
}

const mapDispatchToProps = (dispatch) => ({
    adminLoggingIn: () => dispatch(adminLogin('')),
    executiveLoggingIn: () => dispatch(executiveLogin(''))
})

export default connect(null, mapDispatchToProps)(Home);