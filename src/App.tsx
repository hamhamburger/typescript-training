import type { FC } from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { TaskPage } from './components/taskList/TaskPage';
import Counter from './components/useReducer/Counter';
import NotificationUseReducerPage from './components/useReducer/NotificationUseReducerPage';
import Welcome from './components/Welcome';
import FormPage from './components/reactHooks/FormPage';
import FormWithOriginalComponentPage from './components/reactHooksWithOriginalComponent/FormWithOriginalComponentPage';
import GitPage from './components/gitActions/GitPage';
import ReduxCounter from './components/redux/Counter';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const App:FC = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Welcome />} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/notification" element={<NotificationUseReducerPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/form_component" element={<FormPage />} />
          <Route path="/form_with_original_component" element={<FormWithOriginalComponentPage />} />
          <Route path="/git" element={<GitPage />} />
          <Route path="/redux_counter" element={<ReduxCounter />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
