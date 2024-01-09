import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/layout'
import ProcessState from './context/Process/ProcessState'

function App() {
  return (
    <ProcessState>
      <React.Fragment>
        <BrowserRouter basename={'/'}>
          <Routes>
            <Route path='*' element={<Layout><Home /></Layout>} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </ProcessState>
  );
}

export default App;
