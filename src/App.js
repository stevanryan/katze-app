// import logo from './logo.svg';
import './App.css'
import Navigation from './components/Other/Navigation'
import Home from './components/Main/Home'
import Cart from './components/Main/Cart'
import Favourite from './components/Main/Favourite'
import Profile from './components/Main/Profile'
import CartContext from './components/Main/CartContext'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    }
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <CartContext>
          <Router>
            <Navigation />
            <Routes>
              <Route path={'/'} element={<Home />}/>
              <Route path={'/cart'} element={<Cart/>}></Route>
              <Route path={'/favourite'} element={<Favourite/>}></Route>
              <Route path={'/profile'} element={<Profile/>}></Route>
              <Route path={'*'} element={<h1 style={{paddingTop: '100px'}}>404! NOT FOUND!</h1>}></Route>
            </Routes>
          </Router>
        </CartContext>
      </QueryClientProvider>
    </div>
  );
}

export default App
