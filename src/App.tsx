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

function GetTheme() {
  if(window.matchMedia('(prefers-color-scheme: dark )').matches) {
    console.log(1)
    document.documentElement.style.setProperty('--color-bg', '#000e1a');
    document.documentElement.style.setProperty('--color-header', '#00080f');
    document.documentElement.style.setProperty('--color-header-border', '#21354f');
    document.documentElement.style.setProperty('--color-element', '#00080f');
    document.documentElement.style.setProperty('--color-element-border', '#12429b');
    document.documentElement.style.setProperty('--color-element-active', '#0b3241');
    document.documentElement.style.setProperty('--color-element-border-active', '#8080ff');
    document.documentElement.style.setProperty('--color-text', '#ccd7ff');
    document.documentElement.style.setProperty('--color-error', '#ff6347');
  }

}

function App() {
  GetTheme()
  return (
    <div className="p-4">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


{/*\n\s*(--.*): (#.*);*/}
{/*document.documentElement.style.setProperty('$1', '$2');\n*/}