// App.jsx
import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import { LoginPage } from './pages/LoginPage'; // Import LoginPage as a named export
import { Layout } from './Layout'; // Import Layout as a named export

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> 
        <Route index element={<IndexPage />} /> 
        <Route path="/login" element={<LoginPage />} /> 
      </Route>
    </Routes>
  );
}

export default App;
