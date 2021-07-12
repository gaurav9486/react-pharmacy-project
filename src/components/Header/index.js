import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { adminLogout } from '../../actions';
import './header.css';

const Header = (props) => {

    const history = useHistory();

    return (
        <div className="header">
            <Link to="/">
                <h1 className="pharmacy-title">GTG Pharmacy Store</h1>
            </Link>
            {props.loginStatus && <button className="logout-btn" onClick={()=> {
                localStorage.setItem('loginStatus', false);
                localStorage.setItem('adminLogin', false);
                localStorage.setItem('executiveLogin', false);
                history.push("/");
                props.adminLoggingOut();
            }}>Logout</button>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    loginStatus: state.loginStatus
})

const mapDispatchToProps = (dispatch) => ({
    adminLoggingOut: () => dispatch(adminLogout(''))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);