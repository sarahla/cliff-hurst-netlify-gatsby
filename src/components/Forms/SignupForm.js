import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const CustomForm = ({ status, message, onValidated, location }) => {
    let email, name, interest;
    const submit = () => {
        console.log(email, name, interest);
        return (
            email &&
            name &&
            interest &&
            email.value.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email.value,
                FNAME: name.value,
                INTEREST: interest.value,
            })
        )
    }

    return (
        <div className={`form form--subscribe${status ? ` form--${status}` : ''}`}>
            {status === "sending" && (
                <div className="form__sending">
                    <div className="loader loader--dark"></div>
                </div>
            )}
            {status === "error" && (
                <div
                    className="form__message form__error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="form__message form__success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status !== "success" && (
                <>
                    <div className="u-mb-6" style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'stretch' }}>
                        <div className="form__field-group u-mr-6">
                            <label className="t-eyebrow u-mb-2" htmlFor="name">Name</label>
                            <input
                                className="form__field"
                                ref={node => (name = node)}
                                type="text"
                                placeholder="Your name"
                                id="name"
                            />
                        </div>
                        <div className="form__field-group">
                            <label className="t-eyebrow u-mb-2" htmlFor="email">Email</label>
                            <input
                                className="form__field"
                                ref={node => (email = node)}
                                type="email"
                                placeholder="Your email"
                                id="email"
                            />
                        </div>
                    </div>
                    <input
                        className="form__field"
                        ref={node => (interest = node)}
                        type="hidden"
                        placeholder="Interest"
                        value={location}
                    />
                    <button className="button" onClick={submit}>
                        Submit
                </button>
                </>
            )}
        </div>
    );
};

const SignupForm = ({ location }) => {
    const url = "//cliffordhurst.us1.list-manage.com/subscribe/post?u=c0c9db4b3a5581cfb683a30b9&amp;id=46cf25d15e";
    return (
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
                <CustomForm
                    {...{ status, message, location }}
                    onValidated={formData => subscribe(formData)}
                />
            )}
        />
    )
}

export default SignupForm;