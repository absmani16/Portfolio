import About from "./About";
import Home from "./Home";

import style from "./style.module.css";

const Content = () => {
	console.log("content");
	return (
		<div className={style.content}>
			<Home />
			<About />
		</div>
	)
}

export default Content;