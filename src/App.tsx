import React from 'react';
import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";


const App = () => {

    return (
        <BrowserRouter>
            <nav>
                <NavLink to='/users'> Пользователи </NavLink>
                <NavLink to='/todos'> Список дел  </NavLink>
            </nav>
            <Routes>

                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'/todos'} element={<TodosPage/>}/>
                <Route path={'/users/:id'} element={<UserItemPage/>}/>
                <Route path={'/todos/:id'} element={<TodoItemPage/>}/>
                <Route path={'*'} element={<Navigate to={'/'}/>}/>
            </Routes>
        </BrowserRouter>


    );
};

export default App;