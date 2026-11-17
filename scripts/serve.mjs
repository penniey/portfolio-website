import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, resolve, sep } from 'node:path';

const root = resolve(process.argv[2] ?? '.');
const port = Number(process.env.PORT ?? 5173);
const contentTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
};

createServer(async (request, response) => {
    try {
        const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
        const filename = resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);
        if (filename !== root && !filename.startsWith(`${root}${sep}`)) {
            response.writeHead(403).end('Forbidden');
            return;
        }
        const file = await stat(filename);
        if (!file.isFile()) throw new Error('Not a file');
        response.writeHead(200, {
            'Content-Type': contentTypes[extname(filename)] ?? 'application/octet-stream',
            'Content-Length': file.size,
            'Cache-Control': 'no-cache',
        });
        if (request.method === 'HEAD') response.end();
        else createReadStream(filename).pipe(response);
    } catch {
        response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
    }
}).listen(port, '127.0.0.1', () => {
    console.log(`Portfolio available at http://127.0.0.1:${port}`);
});
