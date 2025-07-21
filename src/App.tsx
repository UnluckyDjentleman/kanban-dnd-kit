import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/main/MainPage';
import KanbanPage from './components/pages/kanban/KanbanPage';
import ErrorPage from './components/pages/error/ErrorPage';
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
