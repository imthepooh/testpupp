const puppeteer = require('puppeteer');


async function getPDF(purl) {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(purl, {waitUntil: 'networkidle0'});
    const pdf = await page.pdf({path: 'saved_file.pdf'});

    await browser.close();
    return pdf
}

parm_url = process.argv[2]
console.log(process.argv)
if (parm_url) {
    getPDF(parm_url)
}
else {
    console.log("Enter a valid url");
}

