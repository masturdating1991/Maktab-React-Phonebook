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


    const edit = (id, name, phone, email) => {
        setName(name);
        setPhone(phone);
        setEmail(email);
        setList((list.map((item) => {
            if (item.id == id) {
                item.name = name
                item.phone = phone
                item.email = email
                return item;
            } else return item;
        })))
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
