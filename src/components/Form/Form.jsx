import React, { useState, useRef, useEffect } from 'react'

function Form({list, setList, name, setName, phone, setPhone, email, setEmail }) {
    const inputElement = useRef(null);




    const handleSubmit = e => {
        e.preventDefault()
        name.trim().length > 0 && phone.trim().length > 0 && email.trim().length > 0 &&
            setList(prev => {
                return prev.concat({
                    id: Date.now(),
                    name,
                    phone,
                    email
                })
            })

        

        setName('')
        setPhone('')
        setEmail('')

        inputElement.current.focus();
    }



    useEffect(() => {
        if (localStorage.getItem('phonebook')) {
            setList(JSON.parse(localStorage.getItem('phonebook')))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('phonebook', JSON.stringify(list))
    }, [list])



    return (
        <div className="container bg-secondary my-5 text-white">
            <form className="py-2" onSubmit={handleSubmit}>
                <div className="form-row mb-3">

                    <div className="col-md-5 mb-3">
                        <label htmlFor="name">Name:</label>
                        <input
                            onChange={e => setName(e.target.value)}
                            value={name}
                            ref={inputElement}
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter name" />
                    </div>

                    <div className="col-md-5 mb-3">
                        <label htmlFor="phone">Phone Number:</label>
                        <input
                            onChange={e => setPhone(e.target.value)}
                            value={phone}
                            type="tel"
                            name="phone"
                            className="form-control"
                            placeholder="Enter phone number" />
                    </div>

                </div>

                <div className="form-row mb-3">

                    <div className="col-md-6 mb-3">
                        <label htmlFor="email">Email:</label>
                        <input
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email" />
                    </div>

                </div>

                <div className="col-md-12  px-0">
                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-block btn-info" />
                </div>

                
            </form>

        </div>
    )
}

export default Form
