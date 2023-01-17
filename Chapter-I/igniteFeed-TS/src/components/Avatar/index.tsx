import styles from "./styles.module.scss";

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
}

export function Avatar({ hasBorder = true, src }: AvatarProps) {
  return (
    <img
      src={src}
      alt="avatar"
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}
