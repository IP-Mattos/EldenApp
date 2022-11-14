import { BossesList, SearchBar } from '@components';

function HomePage() {
	return (
		<main>
			<div>
				<h1>Home</h1>
				<SearchBar />
				<BossesList />
			</div>
		</main>
	);
}

export default HomePage;
