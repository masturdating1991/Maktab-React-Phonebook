import React, { useState } from 'react';
import Form from '../Form/Form';
import Search from '../Search/Search.jsx';
import Table from '../Table/Table.jsx';

function Phonebook() {
    const [list, setList] = useState([])
    const [filteredList, setFilteredList] = useState([])

    return (
        <>
            <Form
                list={list}
                setList={setList}
            />


            <Search
                list={list}
                setFilteredList={setFilteredList}
            />

            <Table
                list={list}
                setList={setList}
                filteredList={filteredList}
            />
        </>
    )
}

export default Phonebook
