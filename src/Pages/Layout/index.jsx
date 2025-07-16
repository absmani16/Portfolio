import Menu from "../Menu";
import Content from "../Content";

import style from "./style.module.css"

const Layout = () => {
    return (
        <div className={style.layout}>
            <Menu />
            <Content />
        </div>
    );
};

export default Layout;
