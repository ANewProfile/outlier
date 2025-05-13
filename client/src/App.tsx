import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./css/App.css";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default App;
