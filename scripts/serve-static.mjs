import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('dist/client');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.pdf':'application/pdf','.rsc':'text/x-component','.json':'application/json','.woff2':'font/woff2'};
const port = Number(process.env.PORT || 4173);
http.createServer(async (request,response)=>{
  try {
    const pathname = decodeURIComponent(new URL(request.url,'http://localhost').pathname);
    let file = path.resolve(root, '.' + pathname);
    if(file!==root && !file.startsWith(root+path.sep)){response.writeHead(403).end();return;}
    if((await stat(file)).isDirectory()) file=path.join(file,'index.html');
    response.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');
    response.end(await readFile(file));
  } catch {
    response.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});
    response.end(await readFile(path.join(root,'404.html')).catch(()=> 'Not found'));
  }
}).listen(port,'127.0.0.1',()=>console.log('Local: http://localhost:'+port+'/'));
