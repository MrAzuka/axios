const express = require('express');
const request = require('request');
const app = express();
const cheerio = require('cheerio');



app.get('/', (req, res) => {
    let title, company, link;
    const jobs = [];
    const url = 'https://www.jobberman.com/jobs?sort=featured';

    request(url, function (err, response, html) {
        const $ = cheerio.load(html);
        let c = 0;
        let l = 0;
        $('.break-words').each(function () {
            const data = $(this);

            title = data.attr('title');
            jobs.push({ title });
        });

        $('.search-result__job-meta').each(function () {
            const data = $(this);

            company = data.text().trim();
            jobs[c].company = company;
            c++;
        });

        $('.break-words').each(function () {
            const data = $(this);

            link = data.attr('href');
            jobs[l].link = link;
            l++;
        });

        console.log(jobs);
    });
});

app.get('/1', (req, res) => {
    let title, company, link;
    const jobs = [];
    const url = 'https://www.jobberman.com/jobs';

    request(url, function (err, response, html) {
        const $ = cheerio.load(html);
        let c = 0;
        let l = 0;
        $('.break-words').each(function () {
            const data = $(this);

            title = data.attr('title');
            jobs.push({ title });
        });

        $('.search-result__job-meta').each(function () {
            const data = $(this);

            company = data.text().trim();
            jobs[c].company = company;
            c++;
        });

        $('.break-words').each(function () {
            const data = $(this);

            link = data.attr('href');
            jobs[l].link = link;
            l++;
        });

        console.log(jobs);
    });
});

app.get('/2', (req, res) => {
    let title, company, link;
    const jobs = [];
    const url = 'https://www.jobberman.com/jobs/remote';

    request(url, function (err, response, html) {
        const $ = cheerio.load(html);
        let c = 0;
        let l = 0;
        $('.break-words').each(function () {
            const data = $(this);

            title = data.attr('title');
            jobs.push({ title });
        });

        $('.search-result__job-meta').each(function () {
            const data = $(this);

            company = data.text().trim();
            jobs[c].company = company;
            c++;
        });

        $('.break-words').each(function () {
            const data = $(this);

            link = data.attr('href');
            jobs[l].link = link;
            l++;
        });

        console.log(jobs);
    });
});

app.listen(5000, () => {
    console.log('Port running');
});
