import { useState } from "react";
import { profileThumnail } from "../../Component/Icon";
import style from "./style.module.css";

export default function Menu() {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <div className={`${style.menu}${opened === true ? " " + style.opened : ""}`}>
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
                window.innerWidth <= 740 && (
                    <div className={`${style.mobileHeader}${opened === true ? " " + style.menubarOpened : ""}`}>
                        <div className={style.menuTitle}>Bala</div>
                        <button className={style.menubar} onClick={() => setOpened(!opened)}>
                            <span></span>
                        </button>
                    </div>
                )
            }
        </>
    )
}