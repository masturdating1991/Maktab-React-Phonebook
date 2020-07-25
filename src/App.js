import React from 'react'
import Phonebook from './components/Phonebook/Phonebook.jsx'

import { BrowserRouter } from 'react-router-dom'

function App() {

    return (
        <BrowserRouter>
            <Phonebook />
        </BrowserRouter>
    );
}

export default App;
