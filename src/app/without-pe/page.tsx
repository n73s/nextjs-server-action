import Counter from './_components/counter';

async function increment(currentValue: number) {
	'use server';
	return currentValue + 1;
}

export default function WithoutPE() {
	return (
		<>
			<h1>Counter Witout PE</h1>
			<Counter increment={increment} />
		</>
	)
}