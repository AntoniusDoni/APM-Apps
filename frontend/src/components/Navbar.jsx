import { Navbar } from "flowbite-react";
import React from "react";


export default function NavBar(props) {

  return (

    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-center dark:text-white">
          {props.title}
        </span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link 
          href={"#/histrorykunjungan"}
          active={"#/histrorykunjungan"=== location.hash}
        >
          {"Cek History Kunjungan"}
        </Navbar.Link>
        <Navbar.Link 
          href={"#/histrorykontrol"}
          active={"#/histrorykontrol"=== location.hash}
        >
          {"Cek History Kontrol"}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}