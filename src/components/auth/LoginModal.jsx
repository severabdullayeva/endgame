import React, { useState } from 'react'
import stylesLogin from './LoginModal.module.css'

const LoginModal = ({ onClose, onLogin }) => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    return (
        <div className={stylesLogin.overlay} onClick={onClose}>
            <div className={stylesLogin.modal} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose}>x</button>
                <input
                    type="email"
                    placeholder='email'
                    value={form.email}
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                />

                <input
                    type="password"
                    placeholder='password'
                    value={form.password}
                    onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                    }
                />
                <button
                    onClick={() =>
                        onLogin({
                            email: form.email
                        })
                    }
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default LoginModal