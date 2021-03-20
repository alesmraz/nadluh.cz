import React from "react"
import ReactDOM from "react-dom"
import "./global.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { githubLink } from "./styles/constants"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

console.log("%cMoney printer go brrr", "color:green;font-size:25px;")
console.log(`👉 ${githubLink}`)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
