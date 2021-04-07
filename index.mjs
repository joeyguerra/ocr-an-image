import tesseract from "tesseract.js"
import fs from "fs"

;(async () => {
    const worker = tesseract.createWorker()
    await worker.load()
    await worker.loadLanguage("eng")
    await worker.initialize("eng")
    const { data: { text } } = await worker.recognize("input.png")
    await fs.promises.writeFile("output.txt", text, "utf-8")
    await worker.terminate()
})()