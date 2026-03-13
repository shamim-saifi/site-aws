import './App.css'
import Footer from './layouts/appLayout/Footer'
import Header from './layouts/appLayout/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
