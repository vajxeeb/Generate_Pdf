// const PDFDocument = require('pdfkit');
// const fs = require('fs');

// var pdfDoc = new PDFDocument;
// pdfDoc.pipe(fs.createWriteStream(Date.now()+'text_styling2.pdf'),'charset: utf8');

// // pdfDoc
    
// //     .fillColor('black')
// //     .text("Welcome to my pdf1", {oblique : false, lineBreak : false});
// // pdfDoc .fillColor('black')
// //     .text("Welcome to my pdf3", {oblique : false, lineBreak : false});
// // pdfDoc .fillColor('black')
// //     .text("Welcome to my pdf3", {oblique : false, lineBreak : false});
// // pdfDoc.end();
// pdfDoc
//     .fillColor('blue')
//     .text("This is a link", { link: 'https://pdfkit.org/docs/guide.pdf', underline: true });
// pdfDoc
//     .fillColor('black')
//     .text("This text is underlined", { underline: true });
// pdfDoc.text("This text is italicized", { oblique: true });
// pdfDoc.text("This text is striked-through", { strike: true });

// pdfDoc.end();

// // let myArrayOfItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

// // pdfDoc.list(myArrayOfItems);
// // // Move down a bit to provide space between lists
// // pdfDoc.moveDown(0.5);

// // let innerList = ['Nested Item 1', 'Nested Item 2'];
// // let nestedArrayOfItems = ['Example of a nested list', innerList];

// // pdfDoc.list(nestedArrayOfItems);

// // pdfDoc.end();

const fs = require('fs');
//const PDFDocument = require('./pdfkit-table');
const PDFDocument = require('pdfkit');

const patients = require('./patients.json');
const utf8 = require('utf8');
//utf8.encode()
const doc = new PDFDocument({size: 'A7'});


doc.pipe(fs.createWriteStream(Date.now + `bill.pdf`),utf8);
const left = 60;
doc
//Logo
   .image('./images/logo.png',30,20, {width: 30})
   .fillColor("#444444")
//Name of company
   .fontSize(8)
   .font('Times-Italic')
   .text("Hua Some Chai Nuk ເະກພ້ະກພ້ພ",50,20,{align: "center"})
//Bill title
   .fontSize(6)
   .text("Bill thork monney",50,40, {align: "center"})
//Installment title
   .fontSize(5)
   .font('Times-Roman')
   .text("Installment 70",left,60, {align: "left"})
//Brance title
   .fontSize(5)
   .text("Brance",left,70, {align: "left"})
//Date 
   .fontSize(5)
   .text("Date: 12-12-2021",0,60, {align: "right"})
//Name of brance
   .fontSize(5)
   .text("Vietien Capital",0,70, {align: "right"})
//......List of title ......

//Name of seller
   .text(".................................................",60,80, {align: "center"})
   .fontSize(5)
   .text("Mr Thongsing",left,90, {align: "left"})  
//Lottery Id title
    .fontSize(5)
    .text("Lottery Id: ",left,100, {align: "left"})  
//Get value sell title
   .fontSize(5)
    .text("Value sell: ",left,110, {align: "left"})  
//Real thork title
    .fontSize(5)
    .text("Real Thork: ",left,120, {align: "left"})  
//Cash pay title
    .fontSize(5)
    .text("Pay by cash: ",left,130, {align: "left"})  
//Transfer pay title
    .fontSize(5)
    .text("Pay by transfer: ",left,140, {align: "left"})  
//Own title
    .fontSize(5)
    .text("Own: ",left,150, {align: "left"})  
//Date title
     .fontSize(5)
     .text("Date: ",left,160, {align: "left"})  

//.......List of values from above........
//Lottery Id title
 .fontSize(5)
 .text("21022001 ",10,100, {align: "right"})  
//Get value sell title
 .fontSize(5)
 .text("3000,000,000",10,110,{align: "right"})
 .fontSize(5)
 .text("233,000,000",10,120, {align: "right"})  
//Cash pay title
 .fontSize(5)
 .text("233,000,000",10,130, {align: "right"})  
//Transfer pay title
 .fontSize(5)
 .text("0",10,140, {align: "right"})  
//Own title
 .fontSize(5)
 .text("0",10,150, {align: "right"})  
//Date title
  .fontSize(5)
  .text("10-10-2021",10,160, {align: "right"})  

//....phu hud
.text(".................................................",60,170, {align: "center"})
.fontSize(5)
.text("Recive",10,180, {align: "right"})
.text("Mr Kham DeeHua",10,190, {align: "right"})


// .fontSize(5)
// .text("Mr: Kham dee",10,185, {align: "right"}) 










//    const table = {
//        headers: ["Name","Address","Phone","Birthday","Email Address","Blood Type"],
//        rows: []
//    }

//    for(const p of patients) {
//        table.rows.push([p.name,p.address,p.phone,p.birthday,p.emailaddress,p.bloodtype])
//    }

   //doc.moveDown().table(table,50,125,{width: 590});
   doc.end();