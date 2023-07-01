const axios = require('axios');
const cheerio = require('cheerio');

console.log('Script')

async function fetchHTML(url) {
    try{
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching page: ', error);
        return null;
    }
}

(async () => {
    const url = 'https://www.geeksforgeeks.org/';
    const html = await fetchHTML(url);

    const parser = cheerio.load(html);
    const skip = parser("a.header-main__logo").attr("href");
    console.log(skip);
})();

