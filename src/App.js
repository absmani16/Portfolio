import { lazy } from "react";

import "./assets/css/style.module.css"

const Layout = lazy(() => import("./Pages/Layout"));


function App() {
  return <Layout />
}

export default App;
