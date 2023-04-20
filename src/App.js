import React, { useState } from 'react'
import { useEffect } from 'react'
import { createBrowserRouter, json, RouterProvider } from 'react-router-dom'
import Cart from './Componuts/Cart'
import Layout from './Componuts/layOut/Layout'
import Products from './Componuts/Products'
export default function App() {

  let [data, setData] = useState([])
  let [renderQuantity, setRenderQuantity] = useState([])
  let [renderPrice, setRenderPrice] = useState([])


  useEffect(()=>{
    let data = localStorage.getItem("data");
    if (data){
      setData(JSON.parse(localStorage.getItem("data")))
    }
  },[])

  function saveDataInLocalStorage(data){
    localStorage.setItem("data", JSON.stringify(data));
  }


  function sendData(item) {
    let exist = data.find((ele) => ele.id == item.id);
    if (exist) {
      let newData = data.map((ele) => ele.id == item.id ? { ...exist, quantity: exist.quantity + 1 } : ele);
      setData(newData);
      saveDataInLocalStorage(newData);

    } else {
      let newData = [...data, { ...item, quantity: 1 }];
      setData(newData);
      saveDataInLocalStorage(newData);
    }
  }

  function decreament(item) {
    let exist = data.find((ele) => ele.id == item.id);
    if (exist.quantity > 1) {
      let newData = data.map((ele) => ele.id == item.id ? { ...exist, quantity: exist.quantity - 1 } : ele);
      setData(newData);
      saveDataInLocalStorage(newData);
    }
  }

  function remove(item) {
    let notAll = data.filter((ele) => ele.id != item.id);
    console.log(notAll);
    setData(notAll);
    saveDataInLocalStorage(notAll);
  }


  useEffect(() => {
    setRenderQuantity(data.reduce((x, y) => x + y.quantity, 0));
    setRenderPrice(data.reduce((x, y) => x + y.quantity * y.price, 0));
  }, [data])

console.log(data)

  let routing = createBrowserRouter([
    {
      path: "/", element: <Layout renderQuantity={renderQuantity} renderPrice= {renderPrice}  />,
      children: [
        { index: true, path: "/", element: <Products sendData={sendData} /> },
        { path: "cart", element: <Cart data={data} sendData={sendData} remove={remove} decreament={decreament} /> }
      ]
    }
  ]);
  return <>

    <RouterProvider router={routing}></RouterProvider>

  </>
}
