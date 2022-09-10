import type { FC } from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { TaskPage } from './components/taskList/TaskPage';
import Counter from './components/useReducer/Counter';
import NotificationUseStatePage from './components/useReducer/NotificationUseStatePage';
import Welcome from './components/Welcome';
const App:FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Welcome />} />
        <Route path="/task" element={<TaskPage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/notification" element={<NotificationUseStatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
