import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import Phonebook from './components/Phonebook/Phonebook.jsx'


function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Phonebook />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
