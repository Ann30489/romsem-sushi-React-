import React, { useEffect, useRef, useState } from "react";
import Input from "../input/Input";
import Textarea from "../textarea/Textarea";
import Post from "../post/Post";
import styles from "./Posts.module.scss";

const Posts = () => {
  const staticPosts = [
    {
      title:
        "Спасибо большое за самые свежие и вкусные роллы и суши !!! С сентября уже заказывал раз 10, и каждый раз все на мега уровне. Нравятся всей семье !!! Быстро, вкусно и всегда свежее ))) РЕКОМЕНДУЮ!!!",
      name: "Нурбек",
      id: "post-1",
      date: "10 марта 2021 г., 16:15",
    },
    {
      title:
        "Сегодня опять заказали. Не устану писать положительные отзывы! 🙂 Ооочень вкусно! Роллы свежие, большие, неповторимые! Отдельное спасибо за бонус! 🙂",
      name: "Динара",
      id: "post-2",
      date: "25 августа 2021 г., 10:23",
    },
    {
      title:
        "Очень вкусные суши. Заказываем не впервые, всегда свежие и порции большие. Доставляют очень быстро.",
      name: "Умар",
      id: "post-3",
      date: "24 ноября 2021 г., 22:46",
    },
    {
      title:
        "Сегодня заказывали роллы Филадельфию. Всё понравилось, очень вкусно, большие роллы, качество и вкус отличные. Ещё и подарочные роллы - очень приятно. Будем заказывать и дальше!",
      name: "Александр",
      id: "post-4",
      date: "02 декабря 2021 г., 20:17",
    },
    {
      title:
        "Очень вкусные роллы! Крупные, сочные. Рыбка наисвежайшая, нежная. И сочетание ингредиентов удачное. Плюс приятные подарки и внимание к деталям. Безумно порадовали, спасибо! Обязательно вернемся. Процветания и успеха компании!",
      name: "Эльнура",
      id: "post-5",
      date: "13 декабря 2021 г., 12:28",
    },
  ];
  const localPosts = JSON.parse(localStorage.getItem("posts"));
  const [posts, setPosts] = useState(localPosts ? localPosts : staticPosts);
  const [messageWarn, setMessageWarn] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [textValue, setTextValue] = useState("");
  const inputRef = useRef();
  const inputName = useRef();

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    if (inputRef.current.value === "" || inputName.current.value === "") {
      setMessageWarn("Заполните все поля!");
    } else {
      setPosts([
        ...posts,
        {
          title: inputRef.current.value,
          name: inputName.current.value,
          id: Date.now(),
          date: date,
        },
      ]);
      setMessageWarn("");
      inputName.current.value = "";
      setTextValue("");
      setWordCount(0);
    }
  };

  useEffect(() => {
    if (messageWarn) {
      setTimeout(() => {
        setMessageWarn("");
      }, 3000);
    }
  }, [messageWarn]);

  return (
    <>
      <div className={styles.posts}>
        <div className={styles.posts__wrapper}>
          <p className={styles.posts__title}>Отзывы</p>
          {/* Form */}
          <form className={styles.posts__form}>
            <div className={styles.inputArea}>
              <div className={styles.inputContainer}>
                <label htmlFor="name" id={styles.nameLable}>
                  <i>Имя:</i>
                </label>
                <Input
                  className={styles.inputField}
                  id={styles.name}
                  type={"text"}
                  ref={inputName}
                  maxLength="50"
                />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="text" id={styles.textLable}>
                  <i>Текст:</i>
                </label>
                <Textarea
                  value={textValue}
                  onChange={(e) => {
                    setTextValue(e.target.value);
                    setWordCount(e.target.value.length);
                  }}
                  className={styles.inputField}
                  id={styles.text}
                  type={"text"}
                  ref={inputRef}
                  maxLength="2000"
                />
                <p className={styles.inputWordCount}>
                  <span>{wordCount}</span>/2000
                </p>
              </div>
              <p className={styles.posts__warn}>{messageWarn}</p>
            </div>
            <button
              className={styles.posts__button}
              type="submit"
              onClick={addPost}
            >
              <span>+ Добавить отзыв</span>
            </button>
          </form>
          {/* List */}
          <ul className={styles.posts__list}>
            {posts.map((post) => (
              <li className={styles.posts__item} key={"Post-" + post.id}>
                <Post title={post.title} date={post.date} name={post.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Posts;
