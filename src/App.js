import React from 'react';
import './App.css';

function App() {
    return (
        <>
            <div className="container bg-secondary my-5 text-white">
                <form className="py-2" id="frm">
                    <div className="form-row mb-3">
                        <div className="col-md-2 mb-3">
                            <label htmlFor="id">ID:</label>
                            <input type="number" name="id" id="id" className="form-control" placeholder="Id for contact"
                                   min="0"
                                   required/>
                        </div>

                        <div className="col-md-5 mb-3">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" className="form-control" placeholder="Enter name"
                                   required/>
                        </div>

                        <div className="col-md-5 mb-3">
                            <label htmlFor="name">Last Name:</label>
                            <input type="text" name="lastName" className="form-control"
                                   placeholder="Enter last name"/>
                        </div>
                    </div>

                    <div className="form-row mb-3">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" name="phone" className="form-control"
                                   placeholder="Enter phone number"/>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" className="form-control"
                                   placeholder="Enter email"/>
                        </div>


                    </div>


                    <div className="col-md-2 px-0">
                        <input type="submit" value="Submit" className="btn btn-info"/>
                    </div>
                </form>

            </div>

            <div className="container">
                <div className="row mb-3">
                    <div className="col-9 mx-auto">
                        <form id="form-search">
                            <div className="row">
                                <div className="col-10 px-0">
                                    <input type="text" className="form-control" placeholder="Search"
                                           id="form-search-input"/>
                                </div>
                                <div className="col-1 p-0">
                                    <button type="submit"
                                            className="btn btn-primary p-2 d-flex justify-content-center align-items-center"
                                            style={{height: "38px"}}><i className="fas fa-search"/></button>
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
                            <th>#</th>
                            <th>name</th>
                            <th>last name</th>
                            <th>phone</th>
                            <th>email</th>
                            <th>action</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </>
    );
}

export default App;
