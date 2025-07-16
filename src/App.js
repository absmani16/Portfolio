import { lazy, Suspense } from "react";

import "./assets/css/style.module.css"

const Layout = lazy(() => import("./Pages/Layout"));

function App() {
  return (
	  	<Suspense fallback={<div>Loading...</div>}>
	  		<Layout />
	  	</Suspense>
  	)
}

export default App;