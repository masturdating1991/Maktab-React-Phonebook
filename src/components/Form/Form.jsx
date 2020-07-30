import React, { useState, useRef, useEffect } from 'react'

function Form({ list, setList, name, setName, phone, setPhone, email, setEmail, temp, setTemp }) {
    const inputElement = useRef(null);


    const handleSubmit = e => {
        e.preventDefault()
        if (temp.value == "Submit") {
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
        }
        else if (temp.value == "Edit") {
            setList((list.map((item) => {
                if (item.id == temp.id) {
                    item.name = name
                    item.phone = phone
                    item.email = email
                    return item;
                } else return item;
            })))
            setName('')
            setPhone('')
            setEmail('')
            setTemp({ value: "Submit", id: 0 })
        }
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
                        value={temp.value}
                        className="btn btn-block btn-info" />
                </div>


            </form>

        </div>
    )
}

export default Form
