import type { FC } from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { TaskPage } from './components/taskList/TaskPage';
import Counter from './components/useReducer/Counter';
import NotificationUseReducerPage from './components/useReducer/NotificationUseReducerPage';
import Welcome from './components/Welcome';
import FormPage from './components/reactHooks/FormPage';
import FormWithOriginalComponentPage from './components/reactHooksWithOriginalComponent/FormWithOriginalComponentPage';

const App:FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Welcome />} />
        <Route path="/task" element={<TaskPage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/notification" element={<NotificationUseReducerPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/form_component" element={<FormPage />} />
        <Route path="/form_with_original_component" element={<FormWithOriginalComponentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
