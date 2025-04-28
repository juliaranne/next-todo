"use client";
import { useState } from "react";
import Input from "../components/input";
import List from "../components/list";

export default function Edit() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    setTodos([value, ...todos]);
  };

  return (
    <>
      <Input todoValue={value} setValue={setValue} addTodo={addTodo}></Input>
      <List todos={todos}></List>
    </>
  );
}
