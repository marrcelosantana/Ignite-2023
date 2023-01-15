import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.scss";

export function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>posts</main>
      </div>
    </div>
  );
}
