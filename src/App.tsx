import { Nav } from "./components/Nav"
import { Home } from "./Pages/Home"
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { Profile } from "./Pages/Profile";
import {Product} from './Pages/Product';
import { useEffect } from "react";
import { Route, Routes, Navigate, BrowserRouter, } from 'react-router-dom';
import { supabase } from './supabaseClient';
import {useUserInfo} from './context/UserContext';
import { Browse } from "./Pages/Browse";
import { FilterContext } from "./context/FilterContext";
import {ProductContext} from './context/ProductContext';
import { PageNotFound } from "./Pages/PageNotFound";
import { WishListContext } from "./context/WishListContext";
import { BasketContext } from "./context/BasketContext";
import { useErrorInfo } from "./context/ErrorContext";
import { CheckOut } from "./Pages/CheckOut";
import Authguard from "./components/AuthGuard";
import { OrderConfirmed } from "./Pages/OrderConfirmed";

function App() {
  const {loginUser,logoutUser,userInfo} = useUserInfo();
  const {ErrorMessages} = useErrorInfo();

  async function logInUser(ID:string){
    try{
      const { data, error } = await supabase
      .from('users')
      .select().eq('userID',ID);
      if(error) throw error;
      else{
          console.log('user found:');
          const user = {id: data[0].userID, email: data[0].email,fullName: data[0].fullName}
          loginUser(user);
      }
    }catch(error){
      console.log(error);
      console.log('user not found');
    }
  }
  useEffect(() =>{
    let cachedUser = localStorage.getItem('sb-htxvetrvrwrdvoybymaz-auth-token');
    if(cachedUser){
      const profile = JSON.parse(cachedUser);
    logInUser(profile.user.id);
    }else{
      console.log('not found cache');
    }
  },[])

  return (
    <div className="App">
      <div className="min-h-screen relative">
        <FilterContext>
        <ProductContext>
            <WishListContext>
              <BasketContext>
                <Nav></Nav>
                <div className="w-[100vw] fixed top-[50px] z-[100] flex flex-col">
                {
                  ErrorMessages.map((message,index)=>(
                      <div className="w-[300px] h-[50px] mt-[10px] mx-auto bg-red-600/90 rounded-md grid place-content-center" key={index}>
                        <p className="font-bold text-gray-200 text-center">{message}</p>
                      </div>
                  ))
                }
                </div>
                  <Routes>
                    <Route path="/" element={<Home />} />
                      <Route element={<Authguard />}>
                        <Route path="/profile/:select?" element={<Profile />} />
                        <Route path="/checkout" element={<CheckOut />}/>
                      </Route>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/browse" element={<Browse />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/404"  element={<PageNotFound />}/>
                    <Route path="/OrderConfirmation/:orderID"  element={<OrderConfirmed />}/>
                    <Route path="*"  element={<Navigate to="/404" />}/>
                  </Routes>
              </BasketContext>
            </WishListContext>
        </ProductContext>
          <div className="pt-16">
              <footer className='w-[100vw] h-[80px] bg-[#333333] text-gray-500 grid place-content-center mt-16 text-[12px] md:text-[16px] absolute bottom-0 z-50'>
                  <p>© 2023 Crepz, Inc. All Rights Reserved</p>
                  <p>Web app made by Mateusz Kroplewski</p>
              </footer>
          </div>
        </FilterContext>
      </div>
    </div>
  )
}

export default App
