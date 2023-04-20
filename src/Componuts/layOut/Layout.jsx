import { Outlet } from 'react-router-dom'
import Navbar from "../Navbar"
import React from 'react'

export default function Layout({ renderQuantity, renderPrice }) {
  return <>
    <Navbar renderQuantity={renderQuantity} renderPrice={renderPrice} />
    <Outlet></Outlet>
  </>
}

