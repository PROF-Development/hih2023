import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';



const PDFViewer = () => {
    return (
        <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer fileUrl="./gost.pdf" />
            </Worker>
        </div>
    );
};

export default PDFViewer;