import tesseract from "tesseract.js"
import fs from "fs"

;(async () => {
    const worker = tesseract.createWorker()
    await worker.load()
    await worker.loadLanguage("eng")
    await worker.initialize("eng")
    const { data: { text } } = await worker.recognize("Tamsir_Resume.png")
    await fs.promises.writeFile("Tamsir_Resume.txt", text, "utf-8")
    await worker.terminate()
})()