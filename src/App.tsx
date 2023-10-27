import React from "react";
import "./App.scss";
import { Header, ListTodo, InputTodo } from "./Components/index";

function App() {
    return (
        <div className="App">
            <Header />
            <InputTodo />
        </div>
    );
}

export default App;
