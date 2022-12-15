import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() { 
    return (

        <div>
            <BrowserRouter>  
                <NavBar/>   
                <Routes >
                    <Route path='/' element={ <ItemListContainer/> } />
                    <Route path='/categoria/:categoriaId' element={ <ItemListContainer/> } />
                    <Route path='/detail/:productoId' element={ <ItemDetailContainer /> } />               
                    <Route path='*' element={<Navigate to='/' />}/>
                </Routes>          
                
            </BrowserRouter>       

        </div>
    )
}

export default App



  

