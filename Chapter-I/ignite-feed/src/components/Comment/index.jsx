import { Avatar } from "../Avatar";
import { ThumbsUp, Trash } from "phosphor-react";

import styles from "./styles.module.scss";
import { useState } from "react";

export function Comment({ comment, deleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    deleteComment(comment);
  }

  function handleLike() {
    if (likeCount == 0) {
      setLikeCount(1);
    }

    if (likeCount == 1) {
      setLikeCount(0);
    }
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/igorsanm.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Igor Santana</strong>
              <time dateTime="2023-01-15" title="15 de Janeiro às 18:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar Comentário" onClick={handleDeleteComment}>
              <Trash size={20} />
            </button>
          </header>

          <p>{comment}</p>
        </div>

        <footer className={styles.footer}>
          <button onClick={handleLike}>
            {likeCount == 0 ? (
              <ThumbsUp />
            ) : (
              <ThumbsUp weight="fill" color="#00b373" />
            )}
            Curtir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
