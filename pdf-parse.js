import PDFParser from "pdf2json"

const parse = (file) => {
  return new Promise((resolve, reject) => {

    const pdfParser = new PDFParser(this, 1)
    pdfParser.loadPDF(file)
    pdfParser.on('pdfParser_dataReady', pdfData => {
      try {
        const data = pdfParser.getRawTextContent()
        resolve(data)
      } catch (err) {
        reject(err)
      }
    })
    pdfParser.on('pdfParser_dataError', errData => reject(errData))
  })
}

export { parse }
// const str = await parse()