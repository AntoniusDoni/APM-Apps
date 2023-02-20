import React,{ useEffect,useState } from "react";
import Button from "./Button";
import Modal from "./Modal";


export default function ModallConfrim(props) {
    const { modalState } = props
    const [parsedata,SetParesdata]=useState(null)
    const handleClose = () => {
        modalState.toggle()
    }
    useEffect(() => {
        const data = modalState.data?.data
        if (data !== null) {
            if (modalState.isOpen == true) {
                SetParesdata(data?.noSuratKontrol)
            }        
            return
        }
    }, [modalState])
    return (
        <Modal
        isOpen={modalState.isOpen}
        toggle={handleClose}
        title={modalState?.data?.title}
    >
        <h3>{modalState?.data?.text}</h3>
        <Button onClick={() => props.Onconfrim(parsedata)}>{modalState?.data?.confrim}</Button>
        <Button onClick={handleClose}>{modalState?.data?.cancel}</Button>
    </Modal>
    )
}