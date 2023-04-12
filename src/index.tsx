import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { ModalState } from "./context/ModalContext"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <ModalState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ModalState>
)
