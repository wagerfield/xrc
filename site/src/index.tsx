import * as React from "react"
import { hydrate, render } from "react-dom"
import { AppContainer } from "react-hot-loader"
import App from "./app"

if (typeof document !== "undefined") {
  const target = document.getElementById("root")
  const renderMethod = target!.hasChildNodes() ? hydrate : render
  const renderApp = () => {
    renderMethod(
      <AppContainer>
        <App />
      </AppContainer>,
      target
    )
  }

  renderApp()

  if (module && module.hot) {
    module.hot.accept("./app", renderApp)
  }
}

export default App
