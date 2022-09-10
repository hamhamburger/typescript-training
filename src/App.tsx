import type { FC } from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { TaskPage } from './components/taskList/TaskPage';
import Counter from './components/useReducer/Counter';
const App:FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<TaskPage />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
