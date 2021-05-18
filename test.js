
const request = require('request');

const cheerio = require('cheerio');
const { children } = require('cheerio/lib/api/traversing');

request({
    method: 'GET',
    url: 'https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020'
}, (err, res, body) => {

    if (err) return console.error(err);

    let $ = cheerio.load(body);

    let title = $('title');
    let pubDate=$('span.lbl-licitacao').first().text().substr(20,21);
    let objectData=$('p:first').text()
    let biddingDate=$('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > span:nth-child(19)').text().substr(19,21)
    let links=$('td a').last().attr('href')
    console.log("Publication Date:" ,pubDate);
    console.log("objectData:" ,objectData);
    console.log("biddingDate:" ,biddingDate);

    console.log("links:" ,links);
});


