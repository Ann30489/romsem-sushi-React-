import React from "react";
import styles from "./Post.module.scss";

const Post = (props) => {
  return (
    <>
      <div className={styles.post}>
        <div className={styles.post__wrapper}>
          <div className={styles.post__data}>
            <span className={styles.post__data__name}>{props.name}</span>
            <span className={styles.post__data__date}>{props.date}</span>
          </div>
          <p className={styles.post__data__text}>{props.title}</p>
        </div>
      </div>
    </>
  );
};

export default Post;
