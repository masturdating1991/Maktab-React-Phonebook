import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Table({ list, setList, search, edit, contact }) {

    const handleDelete = id => {
        const filteredDelete = list.filter(item => item.id !== id)
        setList(filteredDelete)
    }

    const filteredList = contact.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase()))

    return (
        <div className="container px-0 ">
            <div className="table-responsive">
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
                            filteredList.map(item =>
                                <tr key={item.id}>
                                    <td>
                                        <Link to={`/table/${item.id}`} >{item.name} </Link>
                                    </td>

                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="btn btn-danger"
                                            style={{ padding: "10px", fontSize: "15px", marginRight: "5px" }}>
                                            <i className='fa fa-trash ' />
                                        </button>

                                        <button
                                            onClick={() => edit(item.id, item.name, item.phone, item.email)}
                                            className="btn btn-primary"
                                            style={{ padding: "10px", fontSize: "15px" }}><i className='fa fa-edit' />
                                        </button>
                                    </td>

                                </tr>

                            )

                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        contact: state.contacts.contacts_list,
        search: state.contacts.search
    }
}
export default connect(mapStateToProps, null)(Table)
