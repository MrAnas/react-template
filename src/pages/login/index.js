import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Login extends Component {

    render() {
        return (
            <div class="login">
            <div className="login-box m-auto d-flex flex-column justify-content-center" style={{width:350}}>
                <form className="login-form ">
                    <h1 className="text-primary text-center mb-5">مرحبًا بك</h1>
                    <input className="form-control mb-3" type="text" placeholder="اسم المستخدم" />
                    <input className="form-control mb-5" type="password" placeholder="كلمة المرور" />
                    <Link to="/" className="btn btn-secondary btn-block">تسجيل الدخول</Link>
                </form>
            </div>
            </div>
        )
    }
}