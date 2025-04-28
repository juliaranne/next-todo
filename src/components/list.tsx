import styles from "./list.module.css";

interface ListProps {
  todos: string[];
}

export default function List({ todos }: ListProps) {
  return (
    <ul className={styles.list}>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}
