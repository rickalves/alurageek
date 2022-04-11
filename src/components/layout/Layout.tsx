import React from "react"
import { Outlet } from "react-router-dom"

interface LayoutProps {
    children: any
}

export default function Layout(props: LayoutProps){
    window.scrollTo(0,document.body.scrollTop)
    return(
      <React.Fragment>
          {props.children}
      </React.Fragment>
    )
}