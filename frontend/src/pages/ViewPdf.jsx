import * as React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { useParams, } from "react-router-dom";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const ViewPdf = () => {
    let { doc } = useParams()
  var filepath = doc + ".pdf"
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Worker workerUrl="backup/pdf.worker.min.js">
            <div
                style={{
                    height: '750px',
                    width: '900px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <Viewer
                    fileUrl={filepath}
                    plugins={[defaultLayoutPluginInstance]}
                />
            </div>
        </Worker>
    );
};

export default ViewPdf;