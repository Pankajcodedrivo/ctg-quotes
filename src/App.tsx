import { useLocation } from "react-router-dom";
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import AppRoutes from './routes/AppRoutes'

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/invited/step-vehicle-information";
  return (
    <>
    {!hideLayout && <Header />}
     <AppRoutes />
     {!hideLayout && <Footer />}
    </>
  )
}

export default App
