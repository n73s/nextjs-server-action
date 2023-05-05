import { revalidatePath } from 'next/cache';

let i = 0;

async function increment() {
	'use server';
	i++;
	revalidatePath('/with-pe');
}

export default function WithPE() {
	return (
		<>
			<h1>Counter With PE</h1>
			<form action={increment}>
				<button type="submit">increment</button>
			</form>
			<p>{i}</p>
		</>
	)
}