const url = require('url');
const fs = require('fs');
const path = require('path');

function getContentType(filePath) {
    if (filePath.endsWith('.css')) {
        return 'text/css';
    } else if (filePath.endsWith('.js')) {
        return 'application/javascript';
    } else if (filePath.endsWith('.html')) {
        return 'text/html';
    } else if (filePath.endsWith('.ico')) {
        return 'image/x-icon';
    } else if (filePath.endsWith('.png')) {
        return 'image/png';
    } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
        return 'image/jpeg';
    } else if (filePath.endsWith('.svg')) {
        return 'image/svg+xml';
    } else {
        return 'application/octet-stream';
    }
}

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname.startsWith('/content') && req.method === 'GET') {
        const filePath = path.normalize(path.join(__dirname, '..', pathname));
        const contentType = getContentType(filePath);

        // Use utf-8 only for text files
        const textTypes = ['.css', '.js', '.html'];
        const isText = textTypes.some(ext => filePath.endsWith(ext));
        const encoding = isText ? 'utf-8' : null;

        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    "Content-Type": "text/plain"
                });
                res.write("Error was found");
                res.end();
                return;
            }

            res.writeHead(200, {
                "Content-Type": contentType
            });

            res.write(data);
            res.end();
        });

    } else {
        return true;
    }
}