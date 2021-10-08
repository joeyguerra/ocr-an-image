import tesseract from "tesseract.js"
import fs from "fs"
import http from "http"

let server = null
const port = process.env.PORT || 3000;
server = http.createServer((req, resp) => {
    const url = new URL(req.url, `http://localhost:${port}`);
    const path = url.pathname.split('/').filter(p => p.length > 0).shift();
    const message = "hi";
    resp.writeHead(200, {'Contnet-Type': 'application/json', 'Content-Length': Buffer.byteLength(message)});
    resp.write(message);
    resp.end();
});
server.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});

// (async () => {
//     let args = process.argv;
//     args.shift();
//     args.shift();
//     const worker = tesseract.createWorker()
//     await worker.load()
//     await worker.loadLanguage("eng")
//     await worker.initialize("eng")
//     const { data: { text } } = await worker.recognize(args[0])
//     await fs.promises.writeFile(`${args[0]}.txt`, text, "utf-8")
//     await worker.terminate()
// })()