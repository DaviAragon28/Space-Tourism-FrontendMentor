// import { useState } from 'react';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  // const [toggle, setToggle] = useState(false)

  return (
    <html >
      <head />
      <body>
        <Header  />
        {/* <Menu  /> */}
        {children}
      </body>
    </html>
  )
}
