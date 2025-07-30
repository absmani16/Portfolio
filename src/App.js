import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";

import "./assets/css/style.module.css"

const Layout = lazy(() => import("./Pages/Layout"));

function App() {
  return (
	  	<Suspense fallback={<div>Loading...</div>}>
	  		<Layout />
			<ToastContainer 
				theme="dark"
				hideProgressBar={true}
				closeOnClick={true}
			/>
	  	</Suspense>
  	)
}

export default App;