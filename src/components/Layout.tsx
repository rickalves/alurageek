interface LayoutProps {
    children: any
}

export default function Layout(props: LayoutProps){
    return(
      <div className={`grid grid-cols-12`}>
          {props.children}
      </div>
    )
}