 export const MakeArrayPages = pages => {
    const pageNumbers = [];
    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }
    return pageNumbers;
};