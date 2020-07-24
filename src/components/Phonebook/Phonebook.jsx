import React, { useState } from 'react';
import Form from '../Form/Form';
import Search from '../Search/Search.jsx';
import Table from '../Table/Table.jsx';

function Phonebook() {
    const [list, setList] = useState([])
    const [filteredList, setFilteredList] = useState([])

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [temp, settemp] = useState({ value: "Submit", id: 0 })

    const edit = (id, name, phone, email) => {
        setName(name);
        setPhone(phone);
        setEmail(email);
        settemp({ value: "Edit", id: id })

    }
    return (
        <>
            <Form
                list={list}
                setList={setList}
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                email={email}
                setEmail={setEmail}
                temp={temp}
                settemp={settemp}
            />


            <Search
                list={list}
                setFilteredList={setFilteredList}
            />

            <Table
                list={list}
                setList={setList}
                filteredList={filteredList}
                edit={edit}
            />
        </>
    )
}

export default Phonebook
