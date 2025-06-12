import Content from "../Content";
import Section from "../../Component/Section";

import style from "./style.module.css";

const Layout = () => {
  return (
    <div className={style.layout}>
      <Section>
        <Content />
      </Section>
    </div>
  );
};

export default Layout;
