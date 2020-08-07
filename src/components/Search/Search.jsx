import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setSearch } from '../../redux/contact/contact.actions'


function Search({ search, setSearch }) {

    // useEffect(() => {
    //     const filteredSearch = list.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase()))
    //     setFilteredList(filteredSearch)
    // }, [search, list])

    return (
        <div className="container mt-5">
            <div className="row mb-3">
                <div className="col-9 mx-auto">
                    <form id="form-search">
                        <div className="row">
                            <div className="col-10 px-0">
                                <input
                                    onChange={e => setSearch(e.target.value)}
                                    value={search}
                                    type="search"
                                    className="form-control"
                                    placeholder="Search"
                                />
                            </div>
                            <div className="col-1 p-0">
                                <button
                                    type="submit"
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
    )
}


const mapStateToProps = state => {
    return {
        search: state.contacts.search,
    }
}
export default connect(mapStateToProps, { setSearch })(Search)
