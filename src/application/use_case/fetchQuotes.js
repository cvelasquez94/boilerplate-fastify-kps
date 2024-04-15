function fetchQuotes(quoteRepository) {
    return async () => {
        return await quoteRepository.fetchQuotes();
    };
}

module.exports = fetchQuotes;
