import React, { useState,useEffect,useRef } from 'react';

function App() {
    const [list, setList] = useState([])
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const inputElement = useRef(null);
  

    const handleSubmit = e => {
        e.preventDefault()
        name.trim().length > 0 && phone.trim().length > 0 && email.trim().length > 0 &&
            setList([...list, {
                id: Date.now(),
                name,
                phone,
                email
            }])

        setName('')
        setPhone('')
        setEmail('')
 
            inputElement.current.focus();
          
     
    }

    const handleDelete = id => {
        const filteredDelete = [...list.filter(item => item.id !== id)];
        setList(filteredDelete)
    }
    return (
        <>
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

                    <div className="col-md-6  px-0">
                        <input 
                        type="submit" 
                        value="Submit" 
                        className="btn btn-block btn-info" />
                    </div>
                </form>

            </div>

            <div className="container">
                <div className="row mb-3">
                    <div className="col-9 mx-auto">
                        <form id="form-search">
                            <div className="row">
                                <div className="col-10 px-0">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Search"
                                        id="form-search-input" />
                                </div>
                                <div className="col-1 p-0">
                                    <button type="submit"
                                        className="btn btn-primary p-2 d-flex justify-content-center align-items-center"
                                        style={{ height: "38px" }}>
                                        <i className="fas fa-search" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className="container px-0 ">
                <div id="table" className="table-responsive">
                    <table id='contact-table' className="table table-striped table-hover">
                        <thead className="thead-dark ">
                            <tr>
                                <th>name</th>
                                <th>phone</th>
                                <th>email</th>
                                <th>action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                list.map(item =>
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="btn btn-danger"
                                                style={{ padding: "10px", fontSize: "15px", marginRight: "5px" }}>
                                                <i className='fa fa-trash ' />
                                            </button>
                                            <button className="btn btn-primary"
                                                style={{ padding: "10px", fontSize: "15px" }}><i className='fa fa-edit' />
                                            </button>
                                        </td>

                                    </tr>
                                )

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default App;
