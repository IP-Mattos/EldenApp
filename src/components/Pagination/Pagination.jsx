export default function Pages({
  bossPerPage,
  bosses,
  pages,
  currentPage,
  currentBosses,
}) {

  if (currentBosses !== "Error") {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(bosses / bossPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      
        <div>       
            <button
            disabled={!(currentPage > 1)}
            onClick={() => pages(1)}
          >
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
            disabled={!(currentPage < pageNumbers.length)}
            onClick={() => pages(currentPage + 1)}
          >
            Next
          </button>
          <button
            disabled={!(currentPage < pageNumbers.length)}
            onClick={() => pages(pageNumbers.length)}
          >
            {'>>'}
          </button>
          </div> 
        
      
    );
  } else {
    return null;
  }
}