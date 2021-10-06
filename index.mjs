import tesseract from "tesseract.js"
import fs from "fs"
(async () => {
    let args = process.argv;
    args.shift();
    args.shift();
    const worker = tesseract.createWorker()
    await worker.load()
    await worker.loadLanguage("eng")
    await worker.initialize("eng")
    const { data: { text } } = await worker.recognize(args[0])
    await fs.promises.writeFile(`${args[0]}.txt`, text, "utf-8")
    await worker.terminate()
})()