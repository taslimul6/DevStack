

import { Bounce, ToastContainer } from 'react-toastify'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Technologies from './components/technologies/Technologies'

function App() {
  

  return (
    <>
      <Nav />
      <Hero />
      <Technologies />
      <Footer />


      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        />
      
    </>
  )
}

export default App
