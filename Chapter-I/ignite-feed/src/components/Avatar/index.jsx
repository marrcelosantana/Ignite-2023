import styles from "./styles.module.scss";

export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      src={src}
      alt="avatar"
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}
