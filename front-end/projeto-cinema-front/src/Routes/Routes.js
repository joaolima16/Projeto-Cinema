import React from 'react'
import { Route, BrowserRouter,Routes} from "react-router-dom";
import TipsPage from '../Components/TipsPage';
import Home from '../Pages/Home';
export default function RoutesPage() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<TipsPage />} path="/lucros" />
        </Routes>
    
    </BrowserRouter>
  )
}
