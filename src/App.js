import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/router';

function App() {
  return (
    <div >
      <h5>This is a test</h5>
      <button className='btn btn-primary'>test</button>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
