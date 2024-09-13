import React from 'react'

const Contact = () => {
    const handleOnSubmit = (event) => {
        event.preventDefault();
        alert("Form submitted");
    }
    return (
        <div className="contact_bg">
            <div className="container">
                <h2 className="con_heading"><a id="contact">Contact Us</a></h2>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <form action="" method="" className="row">
                            <div className="col-lg-6 mb-3">
                                <input
                                    type="text"
                                    className="form-control mb-2 border-0 shadow-none"
                                    name="FirstName"
                                    placeholder="First Name"
                                    required
                                    autoComplete="off"
                                />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <input
                                    type="text"
                                    className="form-control mb-2 border-0 shadow-none"
                                    name="LastName"
                                    placeholder="Last Name"
                                    required
                                    autoComplete="off"
                                />
                            </div>

                            <div className="col-lg-6 mb-3">
                                <input
                                    type="email"
                                    className="form-control mb-2 border-0 shadow-none"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                    autoComplete="off"
                                />
                            </div>
                            <div className="col-lg-6 mb-3">
                                <input
                                    type="text"
                                    className="form-control mb-2 border-0 shadow-none"
                                    name="phoneNo"
                                    placeholder="Phone No"
                                    required
                                    autoComplete="off"
                                />
                            </div>

                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <textarea
                                        name="Message"
                                        placeholder="Write your Message"
                                        className="form-control border-0 shadow-none Msg_area"
                                        rows="7"
                                        cols="20"
                                        required
                                        autoComplete="off"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="col-12 py-3 text-right">
                                <button type="submit" className="form-btn" onClick={() => handleOnSubmit(event)}>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact