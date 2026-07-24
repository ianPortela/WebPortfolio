import Footer from "./sections/Footer"
import Content from "./sections/Content"
import Header from "./sections/Header"
import { Routes, Route } from "react-router-dom";
import Projects from "./sections/Projects";

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Header/>
      <main className="flex-1">
        <Routes>
              <Route path="/" element={<Content/>} />
              <Route path="/projects/:id" element={<Projects/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
