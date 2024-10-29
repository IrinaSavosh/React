import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);

	// count={count} onTouch={() => setCount(count + 1)}
	return (
		<>
			<button onClick={() => setCount(count + 1)}>Click</button>
			<p>{count}</p>
		</>
	);
}
