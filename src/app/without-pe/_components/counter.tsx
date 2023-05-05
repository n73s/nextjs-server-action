'use client';

import { useState } from 'react';

type Props = {
	increment: (currentValue: number) => Promise<number>;
}

export default function Counter({ increment }: Props) {
	const [count, setCount] = useState(0)

	return (
		<>
			<button type="button" onClick={async () => {
				const newValue = await increment(count);
				setCount(newValue);
			}}>increment</button>
			<p>{count}</p>
		</>
	)
}