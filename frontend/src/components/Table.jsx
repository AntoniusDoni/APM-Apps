import React from "react";
import 'react-data-grid/lib/styles.css';
import DataGrid, { textEditor } from 'react-data-grid';

export default function Table(props) {
    
    return (
        <DataGrid columns={props.column} rows={props.data}></DataGrid>
    )
}