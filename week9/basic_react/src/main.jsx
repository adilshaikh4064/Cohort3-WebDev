import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>hello world</h1>
  );
}

const anotherElement=(
  <h1>another hello world</h1>
)

const javascriptInjectVariable="this is me adil";

const reactElement=React.createElement(
  'a',
  {
    href:"www.google.com",
    target:"_blank"
  },
  anotherElement
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>

    // anotherElement
    // reactElement
    <App/>

  // </StrictMode>,
)
