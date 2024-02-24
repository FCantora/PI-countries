/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useState } from 'react';
import Landing from './Components/Landing';
import NavBar from './Components/NavBar';
import Detail from './components/Detail';
import Form from './components/Form';
import Home from './components/Home';
import ShowActivities from './components/ShowActivities';

export default function App() {
  const { pathname } = useLocation();

  return (
      <div>
        {pathname !== '/' && <NavBar /*onSearch={onSearch} logout={logout} autenticado={autenticado}*/ />} {/*Le paso onSearch como prop a Nav*/}
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/home' element={<Home /*countries={countries}*/ /*onClose={onClose}*/ />} />
          <Route path='/activities' element={<Form />} />
          <Route path='/detail/:key' element={<Detail />} />
          <Route path='/show' element={<ShowActivities />} />
        </Routes>
      </div>
  );
}
