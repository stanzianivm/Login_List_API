import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/ItemList';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio (Público)</Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/dashboard">Panel de Control</Link>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </li>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<div>Página de Inicio Pública</div>} />
        <Route
          path="/login"
          element={<Login onLogin={handleLoginSuccess} />}
        />
        <Route
          path="*"
          element={<h1>ERROR 404, PAGE NOT FOUND</h1>}
        />
        <Route
          path="/dashboard/*" // Importante el '*' para que PrivateRoute funcione correctamente
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

// import ItemList from './components/ItemList';

// function App() {
//   return (
//     <div>
//       <ItemList />
//     </div>
//   );
// }

// export default App;