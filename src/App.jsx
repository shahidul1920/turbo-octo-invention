import { RouterProvider } from "react-router-dom"
import router from "./Routes/RouteNav/Route.jsx"

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
