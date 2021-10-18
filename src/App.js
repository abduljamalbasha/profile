import React from 'react'
import './App.css';
import './styles/tailwind.css';
import { BrowserRouter as Router } from "react-router-dom"
import { Layout } from "./Components/Layout/layout";
import Routes from './router/routers'
import { SideBar } from "./Components/wrapper/sidebar";
import { Header } from "./Components/wrapper/header";
import CursorComponent from './Components/shared/cursor';
import ToggleContextProvider from './context/provide';

function App() {
  return (
    <ToggleContextProvider>
    <div className="App">
       <Router>
        <Layout header={<Header />} sideBar={<SideBar />} > 
          <CursorComponent />
          <Routes />
        </Layout> 
      </Router>
      </div>
     </ToggleContextProvider>
  );
}

export default App;
