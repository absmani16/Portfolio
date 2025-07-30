import { useEffect, useState } from "react";
import { profileThumnail } from "../../Component/Icon";
import style from "./style.module.css";

export default function Menu() {
    const [hamburgerMenu, setHamburgerMenu] = useState({});

    const handleUpdate = () => {
        setHamburgerMenu(prev => {
            return {
                ...prev,
                windowSize: window.innerWidth
            }
        })
    };

    useEffect(() => {
        handleUpdate()
        window.addEventListener("resize", handleUpdate);
    }, []);

    return (
        <>
            <div className={`${style.menu}${hamburgerMenu.opened === true ? " " + style.opened : ""}`}>
                <div className={style.title}>
                    <img src={profileThumnail} className={style.image} alt="Profile loading" />
                    <h2 className={style.titleText}>
                        <span>Bala</span>
                    </h2>
                </div>
                <div className={style.items}>
                    <div className={style.item}>
                        <span>Service</span>
                    </div>
                    <div className={style.item}>
                        <span>Skills and Tools</span>
                    </div>
                    <div className={style.item}>
                        <span>About</span>
                    </div>
                    <div className={style.item}>
                        <span>Contact</span>
                    </div>
                </div>
            </div>
            {
                hamburgerMenu.windowSize <= 740 && (
                    <div className={`${style.mobileHeader}${hamburgerMenu.opened === true ? " " + style.menubarOpened : ""}`}>
                        <div className={style.menuTitle}>Bala</div>
                        <button
                            className={style.menubar}
                            onClick={() => {
                                setHamburgerMenu(prev => {
                                    return { ...prev, opened: !hamburgerMenu.opened }
                                })
                            }}
                        >
                            <span></span>
                        </button>
                    </div >
                )
            }
        </>
    )
}