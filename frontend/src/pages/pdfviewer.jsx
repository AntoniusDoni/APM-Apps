import React from 'react';
import {  useParams } from "react-router-dom";
import { Document, Page,pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import {goPrintDoc} from "../../wailsjs/go/repository/Repository"
import Button from '../components/Button';
export default function PDFView(){
  
  let { doc } = useParams()
  var filepath=doc+".pdf"
    const pdfRef = useRef(null);
    pdfjs.GlobalWorkerOptions.workerSrc =`pdf.worker.min.js`;
    const onHandlePrint=()=>{
      goPrintDoc(doc).then((response)=>{
        console.log(response)
      })
    }
    return (
      <div className='flex justify-center'>
        <Document file={filepath} >
          <Page pageNumber={1} />
        </Document>
        <Button onClick={onHandlePrint}>Print</Button>
        </div>
      );
}