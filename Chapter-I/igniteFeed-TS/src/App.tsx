import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.scss";

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/marrcelosantana.png",
        name: "Marcelo Santana",
        role: "Software Developer",
      },

      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "👉jane.design/doctorcare" },
        ,
      ],

      publishedAt: new Date("2023-01-15 20:00:00"),
    },

    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Diego Fernandes",
        role: "CEO RocketSeat",
      },

      content: [
        { type: "paragraph", content: "Eai rapaziada 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "👉jane.design/doctorcare" },
      ],

      publishedAt: new Date("2023-01-14 14:00:00"),
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
