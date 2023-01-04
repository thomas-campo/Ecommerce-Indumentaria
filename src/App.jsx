import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './containers/CartContainer/CartContainer';
import { CartContextProvider } from './context/CartContext';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() { 
    return (

        <CartContextProvider>

            <BrowserRouter> 

                <NavBar/>   
                <Routes >
                    <Route path='/' element={ <ItemListContainer/> } />
                    <Route path='/categoria/:categoriaId' element={ <ItemListContainer/> } />
                    <Route path='/detail/:productoId' element={ <ItemDetailContainer /> } />
                    <Route path='/carrito' element={ <CartContainer/> } />             
                    <Route path='*' element={<Navigate to='/' />}/>
                </Routes>          
            
            </BrowserRouter>

        </CartContextProvider>

    )
}

export default App





  

