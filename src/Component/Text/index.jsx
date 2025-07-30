import React from "react";

import style from "./style.module.css";

export default function Text({ text }) {
    return (
        <p className={style.text}>{text}</p>
    )
}