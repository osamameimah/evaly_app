import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import appRoutes from "./routes/app-routes";
import Register from "./pages/entryOperation.jsx/Register";
import Login from "./pages/entryOperation.jsx/Login";

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          {appRoutes.map((route, index) => {
            return <Route path={route.path} element={<route.component />} />;
          })}
        </Route>
        <Route path="/dashboard/register" element={<Register />} />
        <Route path="/dashboard/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
