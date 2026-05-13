import React, { useState } from 'react'
import styles from '../ContactForm/ContactForm.module.css'


const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [errors, setErrors] = useState({})

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        let newErrors = {}

        if (!formData.name) newErrors.name = true
        if (!formData.email) newErrors.email = true
        if (!formData.subject) newErrors.subject = true
        if (!formData.message) newErrors.message = true

        setErrors(newErrors)

        if (Object.keys(newErrors).length > 0) {
            setSuccess(false)
            return

        }
        setErrors({})

        setLoading(true)
        setSuccess(false)

        setTimeout(() => {
            setLoading(false)
            setSuccess(true)

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            })

            setTimeout(() => {
                setSuccess(false)

            }, 2000)

        }, 1500)
    }




    return (
        <div className={styles.contact}>

            <div className={styles.wrapper}>

                <div className={styles.heading}>
                    <h2>
                        Have questions or feedback? We'd love to hear from you.
                    </h2>
                </div>

                <div className={styles.formBox}>
                    <form className={styles.form} onSubmit={handleSubmit}>

                        <div className={styles.inputWrapper}>
                            <input
                                name='name'
                                className={`${styles.input} ${errors.name ? styles.error : ""}`}
                                type="text"
                                placeholder=" "
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }

                            />
                            <label className={styles.label}>Full Name</label>
                        </div>

                        <div className={styles.inputWrapper}>
                            <input
                                name='email'
                                className={`${styles.input} ${errors.email ? styles.error : ""}`}
                                type="email"
                                placeholder=" "
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }


                            />
                            <label className={styles.label}>Email</label>
                        </div>

                        <div className={styles.inputWrapper}>
                            <input
                                name='subject'
                                className={`${styles.input} ${errors.subject ? styles.error : ""}`}
                                type="text"
                                placeholder=" "
                                value={formData.subject}
                                onChange={(e) =>
                                    setFormData({ ...formData, subject: e.target.value })
                                }
                            />
                            <label className={styles.label}>Subject</label>
                        </div>

                        <div className={styles.inputWrapper}>
                            <textarea
                                name='message'
                                className={`${styles.input} ${errors.message ? styles.error : ""}`}
                                placeholder=" "
                                rows={5}
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                            ></textarea>
                            <label className={styles.label}>Message</label>
                        </div>

                        <button className={styles.button} disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                        {success && (
                            <p className={styles.success}>
                                Message sent successfully!
                            </p>
                        )

                        }

                    </form>
                </div>

            </div>
        </div>
    )
}

export default ContactForm