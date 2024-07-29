import { useMemo } from "react";
import { filterTodos } from "../assets/utils";

interface TodoListProps {
  todos: any;
  theme: any;
  tab: any;
}

const TodoList: React.FC<TodoListProps> = ({ todos, tab, theme }) => {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  return (
    <div className={theme}>
      <p>
        <b>
          Note: <code>filterTodos</code> is artificially slowed down!
        </b>
      </p>
      <ul>
        {visibleTodos.map((todo: any) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
