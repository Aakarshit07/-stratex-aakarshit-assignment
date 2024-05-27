import { Provider } from "react-redux"
import HomePage from "./page/HomePage"
import { RouterProvider } from "react-router-dom"
import { appRouter } from "./routes"
import appStore from "./appStore"


function App() {

  return (
    <>
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
      <HomePage />
      </RouterProvider>
    </Provider>
    </>
  )
}

export default App
