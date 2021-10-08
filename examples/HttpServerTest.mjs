import http from "http";
import HttpAsync from "../lib/HttpAsync.mjs";
import assert from "assert";
import {URL} from "url";
let server = null
const port = process.env.PORT || 3000;

describe("Should spin up a server", ()=>{
    before(()=>{
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
    });
    after(()=>{
        server.close();
    });
    it("Should listen to port 3000", async ()=>{
        let data = await HttpAsync.get(`http://localhost:${process.env.PORT || 3000}`);
        assert.equal(data, "hi");
    });
})