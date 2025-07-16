import style from "./style.module.css";

export default function Title({ tag = "h1", children, className = false, margin = true }) {
    const Tag = tag
    return (
        <Tag className={`${style.title}${margin === true ? " " + style.margin : ""}${className !== false ? " " + className : ""}`}>
            {children}
        </Tag>
    )
}