import Title from "../../../Component/Title";
import style from "./style.module.css"

const Home = () => {
    const height = window.innerHeight;
    return (
        <div className={style.home} style={{ height: `${height}px` }}>
            <div className={style.titles}>
                <Title className={style.bannerTitle} margin={0}>Balasubramanian</Title>
                <Title className={style.bannerTitle} tag="h3">Front end developer</Title>
            </div>
        </div>
    )
}

export default Home;