import React from 'react'
import { Routes, Route, } from "react-router-dom";
import Experience from './Experience';
import Form from './Form';
import Information from './Information';
const FormParent = () => {
    return (
        <>
            <Form />
            <Routes>
                <Route exact path='/form/info' element={<Information />} />
                <Route exact path='/form/experience' element={<Experience />} />
            </Routes>
        </>
    )
}

export default FormParent
