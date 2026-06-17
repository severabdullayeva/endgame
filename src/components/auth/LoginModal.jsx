import React, { useState } from 'react'
import stylesLogin from './LoginModal.module.css'

const LoginModal = ({ onClose, onLogin }) => {

    // input məlumatlarını saxlamaq üçün state
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    

    return (
        // modaldan kənara klik ediləndə bağlanır
        <div className={stylesLogin.overlay} onClick={onClose}>

            {/* modalın özü */}
            <div
                className={stylesLogin.modal}
                onClick={(e) => e.stopPropagation()}
            >

                {/* modalı bağlamaq üçün button */}
                <div>
                    <button onClick={onClose}>x</button>
                </div>

                {/* email inputu */}
                <input
                    type="email"
                    placeholder='email'
                    value={form.email}
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                />

                {/* password inputu */}
                <input
                    type="password"
                    placeholder='password'
                    value={form.password}
                    onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                    }
                />

                {/* login funksiyasını işə salır */}
                <button
                    className={stylesLogin.loginBotton}
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