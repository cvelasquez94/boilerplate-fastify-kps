// const fetch = require('node-fetch');

function createQuoteRepository(apiUrl, apiKey) {
    return {
        async fetchQuotes() {
            try {
                // const response = await fetch(apiUrl, {
                //     method: 'GET',
                //     headers: {
                //         'Accept': 'application/json',
                //         'Authorization': `Bearer ${apiKey}`
                //     }
                // });

                // if (!response.ok) {
                //     throw new Error(`HTTP error! Status: ${response.status}`);
                // }
                
                // return await response.json();
                return [{
                    quoteId : 1,
                    desc: 'test1'
                }]
            } catch (error) {
                console.error('Failed to fetch quotes:', error);
            }
        }
    };
}

module.exports = createQuoteRepository;
