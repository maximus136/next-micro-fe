const express = require('express');
const axios = require('axios');
const next = require('next');
const multer = require('multer');
const upload = multer();
const port = 5000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare()
		.then(() => {
				const server = express();

				server.use(express.json());
				server.post('/blog', upload.none(), async (req, res) => {
						const {body} = req;
						const {authToken} = body;
						console.log({body});
						const queryParams = { id: authToken };
						app.render(req, res, '/blog', queryParams);
				});
				server.listen(5000, (err) => {
						if (err) throw err;
						console.log('> Ready on http://localhost:5000')
				})
		})
		.catch((ex) => {
				console.error(ex.stack);
				process.exit(1)
		});

