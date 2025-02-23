import style from "./style.module.scss";
export default function FooterItem(props) {
  return (
    <a className={style.item} href={props.href!}>
      {props.title}
    </a>
  );
}
