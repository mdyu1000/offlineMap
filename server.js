const express = require('express');
const app = express();
const fs = require('fs');
const request = require('request');
const mkdirp = require('mkdirp');

const url = "http://c.tile.openstreetmap.org"
const LIMIT_ZOOM = 9
const START_ZOOM = 9
const START_X = 312
const START_Y = 290

app.get('/', function (req, res) {
  return res.status(200).send('google offline image crawler ready to serve');
});

app.get('/GET/offlineImage', (req, res) => {
	/* 設定起始位置 */
	getGoogleOfflineImage(START_ZOOM, START_X, START_Y, res)
})

function getGoogleOfflineImage(zoom, x, y, res) {
	let reqUrl = `${url}/${zoom}/${x}/${y}.png`

	if(!fs.existsSync(`./countries/${zoom}/${x}`)){
		mkdirp(`./countries/${zoom}/${x}`)
	}

	request
		.get(reqUrl)
		.on('response', response => {
			const image = fs.createWriteStream(`./countries/${zoom}/${x}/${y}.png`)
			let imageStream = response.pipe(image)

			imageStream.on('finish', () => {
				console.log(`save ${zoom}/${x}/${y}.png okay`)

				if(zoom == 0 && x == 0 && y == 0){
					getGoogleOfflineImage(zoom + 1, 0, 0, res)
				}
				else if(zoom == LIMIT_ZOOM && x == Math.pow(2, LIMIT_ZOOM) - 1 && y == Math.pow(2, LIMIT_ZOOM)){
					res.status(200).send(`save google offline image okay`)
				}
				else if(y != Math.pow(2, zoom) - 1){
					getGoogleOfflineImage(zoom, x, y + 1, res)
				}
				else if(x != Math.pow(2, zoom) - 1 && y == Math.pow(2, zoom) - 1){
					getGoogleOfflineImage(zoom, x + 1, 0, res)
				}
				else if(zoom != LIMIT_ZOOM && x == Math.pow(2, zoom) - 1 && y== Math.pow(2, zoom) - 1){
					getGoogleOfflineImage(zoom + 1, 0, 0, res)
				}
			})
		})

}

app.listen(process.env.PORT || 3000, function () {
  console.log('google offline image crawler ready');
});