import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import KanbanPage from './components/pages/KanbanPage';
import ErrorPage from './components/pages/ErrorPage';
import { DndContext } from '@dnd-kit/core';
import { I18nextProvider } from 'react-i18next';
import i18n from './translate';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/kanban/:boardId' element={<KanbanPage/>}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
