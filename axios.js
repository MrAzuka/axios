const express = require('express')
const request = require('request')
const app = express()

const cheerio = require('cheerio')

let title, company, link

const json = { title, company, link }
const jobs = []




app.get("/", (req, res) => {
    const url = "https://www.jobberman.com/jobs?sort=featured"

    request(url, function (err, response, html) {
        const $ = cheerio.load(html)
        let t = , c, l;
        $(".break-words").each(function () {
            const data = $(this)

            title = data.attr("title")

            json.title = title
            // console.log(title)
            // jobs.push({ title })
        })

        $(".search-result__job-meta").each(function () {
            const data = $(this)

            company = data.text().trim()

            json.company = company
            // console.log(company.trim())
            // jobs.push({ company })
        })

        $(".break-words").each(function () {
            const data = $(this)

            link = data.attr('href')
            json.link = link
            // console.log(link)
            // jobs.push({ link })
        })

        // const list = JSON.stringify(json, null, 4)
        // res.send(jobs)
        jobs.push()
        console.log(jobs)
    })
})





app.listen(5000, () => {
    console.log("Port running")
})