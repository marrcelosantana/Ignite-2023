import styles from "./styles.module.scss";

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img
            src="https://github.com/marrcelosantana.png"
            alt="avatar"
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>Marcelo Santana</strong>
            <span>Software Developer</span>
          </div>
        </div>

        <time dateTime="2023-01-15" title="15 de Janeiro às 18:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          {" "}
          👉
          <a href="">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>{" "}
        </p>
      </div>
    </article>
  );
}
