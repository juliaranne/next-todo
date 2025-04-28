import styles from "./input.module.css";

interface InputProps {
  todoValue: string;
  setValue: (value: string) => void;
  addTodo: () => void;
}

export default function Input({ todoValue, setValue, addTodo }: InputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event?.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setValue("");
    addTodo();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Create a new goal{" "}
        <input
          onChange={handleChange}
          value={todoValue || ""}
          className={styles.input}
          type="text"
        />
      </label>
      {todoValue}
    </form>
  );
}
