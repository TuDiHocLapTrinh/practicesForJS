const puppeteer = require("puppeteer");
const imageDownloader = require("image-downloader");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url =
    "https://www.photo-ac.com/main/search?q=%E5%A5%B3%E6%80%A7&qt=&qid=&creator=&ngcreator=&nq=&srt=dlrank&orientation=all&sizesec=all&color=all&model_count=-1&age=all&mdlrlrsec=all&prprlrsec=all&sl=ja&pp=70&p=1&pt=B";
  await page.goto(url, { waitUntil: "networkidle2" });

  const imgLinks = await page.evaluate(() => {
    let imgElements = document.querySelectorAll(".photo-img.item img");

    imgElements = [...imgElements];

    const imgLinksTmp = imgElements.map((item) => item.getAttribute("src"));

    return imgLinksTmp.filter((item) => item.includes("thumb.photo-ac.com"));
  });

  await Promise.all(
    imgLinks.map((item) =>
      imageDownloader.image({
        url: item,
        dest: path.join(__dirname, "images"),
      })
    )
  );
  await browser.close();
})();
