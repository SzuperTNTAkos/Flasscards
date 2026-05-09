import './index.css';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainTemplate from './templates/MainTemplate.tsx';
import Home from './pages/Home.tsx';
import Create from './pages/Create';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainTemplate />}>
      <Route path='home' element={<Home />} />
      <Route path='create' element={<Create />} />
    </Route>
  )
)


function App() {
  return (
    <div className="p-4">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;