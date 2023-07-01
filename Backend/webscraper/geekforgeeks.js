const axios = require('axios');
const cheerio = require('cheerio');
var fs = require('fs');

console.log('Script');

async function fetchHTML(url) { // Get the HTML of GeekForGeeks using axios
    try{
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching page: ', error);
        return null;
    }
}

(async () => {
    var topicDict = {}; // dictionary used to store topics 
    const url = 'https://www.geeksforgeeks.org/';
    const html = await fetchHTML(url);

    const parser = cheerio.load(html); // cheerio object of html
    const uls = parser('ul'); // find unordered lists
    var hslider;
    uls.each((index, ul) => { // for each unordered list
        console.log(parser(ul).attr('id'));
        if(parser(ul).attr('id') == "hslider"){ // find the horizontal slider menu
            hslider = ul;
        }
    })

    var topicLists = parser(hslider).find('li'); // Find each topic
    topicLists.each((index, topic) => {
        // topic as key, link as item
        topicLists[parser(topic).text()] = parser(topic).find('a').attr('href');
    })

    // splice list
    const listToSplice = Object.entries(topicLists);
    const finalList = Object.fromEntries(listToSplice.slice(-20, -1));
    
    // convert to json and create json file with the data
    var dictstring = JSON.stringify(finalList);

    fs.writeFile("geeks.json", dictstring, function(err, result){
        if(err) console.log('error', err);
    });
})();

