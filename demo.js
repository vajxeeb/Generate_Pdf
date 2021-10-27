const fontkit = require("fontkit");
const fontName = "OpenSans-Regular";
const fontPath = fontName + ".ttf";

fetch(fontPath)
    .then(res => res.arrayBuffer())
    .then(fontBlob => {
        const customFont = fontkit.create(new Buffer(fontBlob)).stream.buffer;
        const doc = new PDFDocument({});
        const stream = doc.pipe(blobStream());
        doc.registerFont(fontName, customFont);
        doc.fontSize(14);
        doc.font(fontName)
        .fillColor("black")
            .text(
                "Custom unicode font loaded. Ω ເດກຫເ is the 24th and last letter of the Greek alphabet.",
                50,
                50,
                { width: 800, align: "left" }
            );
        doc.end();
        stream.on("finish", function() {
            const blob = stream.toBlob("application/pdf");
            const iframe = document.querySelector("iframe");
            iframe.src = stream.toBlobURL("application/pdf");
        });
    });