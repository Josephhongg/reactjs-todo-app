import { TodoCard } from "./TodoCard";

export function TodoList(props) {
	const { todos } = props;

	const tab = "All";
	const filteredTodosList =
		tab === "All"
			? todos
			: tab === "Complete"
			? todos.filter((val) => val.complete)
			: todos.filter((val) => !val.complete);

	return (
		<>
			{filteredTodosList.map((todo, todoindex) => {
				return <TodoCard key={todoindex} todo={todo} />;
			})}
		</>
	);
}
