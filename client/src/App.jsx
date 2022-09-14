import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

import Nav from './components/Nav'
import Records from './components/Records'

import AllRecords from './views/AllRecords'
import NewRecord from './views/NewRecord'
import EditRecord from './views/EditRecord'
import ShowRecord from './views/ShowRecord'

function App() {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route path="/" element={<Navigate to={'/records'}/>} />
                <Route path="/records" element={<Records />} >
                    <Route index element={<AllRecords />} />
                    <Route path="new" element={<NewRecord />} />
                    <Route path=":id/edit" element={<EditRecord />} /> 
                    <Route path=":id" element={<ShowRecord />} /> 
                </Route>
            </Routes>
            
        </div>
    );
}
export default App;
