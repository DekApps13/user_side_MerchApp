import Chatgpt_msgs from './components/various/Chatgpt_msgs'
import NavBar from './components/various/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Register from './pages/Register'
import Login from './pages/Login'
import QueryChatGPT from './pages/QueryChatGPT'
import Logout from './pages/Logout'
import NoAccess from './pages/NoAccess'
import ListChatGPT from './pages/ListChatGPT'
import NotFound from './pages/NotFound'

const App = ()=>{
  return (
    <BrowserRouter>
      <NavBar />
      <Chatgpt_msgs />
      <Routes>
        <Route path="/" element={ <Inicio /> }></Route>
        <Route path="/register" element={ <Register /> }></Route>
        <Route path="/login" element={ <Login /> }></Route>
        <Route path="/queryChat" element={ <QueryChatGPT /> }></Route>
        <Route path="/logout" element={ <Logout /> }></Route>
        <Route path="/noaccess" element={ <NoAccess /> }></Route>
        <Route path="/listChat" element={ <ListChatGPT />}></Route>
        <Route path="*" element={ <NotFound /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App