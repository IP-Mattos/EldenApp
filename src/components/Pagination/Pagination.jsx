import { MakeArrayPages } from '../../helpers';

export default function Pages({
	bossPerPage,
	bosses,
	pages,
	currentPage,
	currentBosses,
}) {
	const Allpages = Math.ceil(bosses / bossPerPage);
	const pagesNumbers = MakeArrayPages(Allpages);
	return (
		<div>
			{currentBosses.length !== 0 && !currentBosses[0].error ? (
				<>
					<button disabled={!(currentPage > 1)} onClick={() => pages(1)}>
						{'<<'}
					</button>
					<button
						disabled={!(currentPage > 1)}
						onClick={() => pages(currentPage - 1)}
					>
						Prev
					</button>

					<div>{currentPage}</div>

					<button
						disabled={!(currentPage < pagesNumbers.length)}
						onClick={() => pages(currentPage + 1)}
					>
						Next
					</button>
					<button
						disabled={!(currentPage < pagesNumbers.length)}
						onClick={() => pages(pagesNumbers.length)}
					>
						{'>>'}
					</button>
				</>
			) : null}
		</div>
	);
}
