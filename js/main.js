
fetch('https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/historical', 
{
    headers: {
        'X-CMC_PRO_API_KEY': '417005bc-8b3e-46a1-8d86-108629cd6ee4',
      }
}).then(function (response) {
	// The API call was successful!
	console.log('success!', response);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});


