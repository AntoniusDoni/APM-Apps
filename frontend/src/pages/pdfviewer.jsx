import React, { useRef } from 'react';
import { useParams, } from "react-router-dom";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import ReactToPrint from 'react-to-print';

export default function PDFView() {

  let { doc } = useParams()
  var filepath = doc + ".pdf"
  const pdfRef = useRef();
  pdfjs.GlobalWorkerOptions.workerSrc = `pdf.worker.min.js`;
  const onHandlePrint = () => {

  }
  return (
    <div className='flex justify-center'>
      <Document file={filepath} ref={pdfRef}>
        <Page pageNumber={1} />
      </Document>
      <div>
      <ReactToPrint
        trigger={() => <button>Print </button>}
        content={() => pdfRef.current}
      />
      </div>

    </div>
  );
}