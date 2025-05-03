import { BrowserRouter ,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Login from "./pages/Login";
import Verify from "./pages/Verify";
import { UserData } from "./Context/userContext";
import { LoadingBig } from "./Components/Loading";



const App = () => {
 
  const {user,isAuth,loading} = UserData();


  return (
    <div>
      {loading ? <LoadingBig/> : <BrowserRouter>
    <Routes>
      <Route path='/' element={isAuth?<Home/>:<Login/>}/>
      <Route path='/login' element={isAuth?<Home/>:<Login/>}/>
      <Route path='/verify' element={isAuth?<Home/>:<Verify/>}/>
    </Routes>
    </BrowserRouter>}
    </div>
    
  )
}

export default App