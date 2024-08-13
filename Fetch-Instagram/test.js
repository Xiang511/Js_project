const puppeteer = require('puppeteer-core');

async function getProfilePicture(username) {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' // 指定 Chrome 瀏覽器的路徑
  });
  const page = await browser.newPage();
  await page.goto(`https://www.instagram.com/${username}`, { waitUntil: 'networkidle2' });

  // 等待頭貼圖片載入
  await page.waitForSelector('img[alt*="的大頭貼照"]', { timeout: 30000 });

  const profilePictureElement = await page.$('img[alt*="的大頭貼照"]');
  const profilePictureUrl = await profilePictureElement.getProperty('src');
  const profilePictureUrlValue = await profilePictureUrl.jsonValue();

  await browser.close();

  return profilePictureUrlValue;
}

// 使用示例
getProfilePicture('dcard.tw')
  .then(url => console.log(url))
  .catch(error => console.error(error));
  
