import { PencilLine } from "phosphor-react";

import styles from "./styles.module.scss";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <img
          src="https://github.com/marrcelosantana.png"
          alt="profile"
          className={styles.avatar}
        />
        <strong>Marcelo Santana</strong>
        <span>Software Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
