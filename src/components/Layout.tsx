import React from "react"

interface LayoutProps {
    children: any
}

export default function Layout(props: LayoutProps){
    return(
      <React.Fragment>
          {props.children}
      </React.Fragment>
    )
}