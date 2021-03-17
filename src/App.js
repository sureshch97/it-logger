import React, { Fragment, useEffect } from 'react'
import SearchBar from './components/layout/Appsearchbar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/addbtn'
import AddLogModal from './components/logs/Addlogmodal'
import EditLogModal from './components/logs/Editlogmodal'
import AddTechModal from './components/techs/AddtechModal'
import TechListModal from './components/techs/addtechlistmodal'
import {Provider} from 'react-redux'
import store from './store'


import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'



const App = () => {
  useEffect(() => {

    M.AutoInit();
  })
 
  return (
    <Provider store={store}>
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  </Provider>

  );
}

export default App;
