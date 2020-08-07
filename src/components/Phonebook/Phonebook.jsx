import React, { useState } from 'react';
import Form from '../Form/Form';
import Search from '../Search/Search.jsx';
import Table from '../Table/Table.jsx';
import Router from '../Router/Router'

import { Switch, Route } from "react-router-dom";
import ContactSingle from '../ContactSingle/ContactSingle';

function Phonebook() {
    const [list, setList] = useState([])
    const [filteredList, setFilteredList] = useState([])

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [temp, setTemp] = useState({ value: "Submit", id: 0 })

    const edit = (id, name, phone, email) => {
        setName(name);
        setPhone(phone);
        setEmail(email);
        setTemp({ value: "Edit", id: id })
    }
    return (
        <>
            <Router />
            <Switch>
                <Route exact path='/'>
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
                        setTemp={setTemp}
                    />
                </Route>


                <Route exact path='/table'>
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
                </Route>

                <Route path='/table/:id'>
                    <ContactSingle
                        list={list}
                    />
                </Route>
            </Switch>
        </>
    )
}

export default Phonebook
