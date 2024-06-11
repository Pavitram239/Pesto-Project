import {
  CenteredModal,
  Container,
  CreateTask,
  Heading,
  TodoList,
} from './components';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import { loader as TaskLoader } from './Home';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: TaskLoader,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
