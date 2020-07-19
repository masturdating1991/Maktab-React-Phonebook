import React from 'react'

function Table({list,setList,filteredList}) {

    const handleDelete = id => {
        const filteredDelete = list.filter(item => item.id !== id)
        setList(filteredDelete)
    }

    return (
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
                            filteredList.map(item =>
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

                                        <button
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
        </div>
    )
}

export default Table
