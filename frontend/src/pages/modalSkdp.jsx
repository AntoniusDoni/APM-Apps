import React, { useEffect, useState } from "react";
import ModalInput from "../components/ModalInput";
import { useForm } from "@inertiajs/react";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import { Option, Select } from "../components/SelectInput";
import FormInputDate from "../components/FormInputDate"
import { GetKodePoliBPJS, GetListDockterBPJS } from "../../wailsjs/go/repository/Repository"
import {defaultdockter} from '../utils/helper'
export default function ModalSKDP(props) {
    const { modalState } = props
    const { data, setData, processing, errors, reset, clearErrors } = useForm({
        noSEP: '',
        poliKontrol: '',
        kodepoli: '',
        kodeDokter: '',
        tglRencanaKontrol: new Date(),
        listPoli: []
    })
    const [listDokter,setDokter]=useState(()=>defaultdockter())
    const handleReset = () => {
        modalState.setData(null)
        reset()
        setDokter(()=>defaultdockter())
        clearErrors()
    }

    const handleClose = () => {
        handleReset()
        modalState.toggle()
    }
    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value)
        if(event.target.name=="kodepoli"){
            GetListDockterBPJS(event.target.value).then((resp)=>{
                if (resp?.list!=undefined){
                    setDokter(resp?.list)
                }
            })
        }
    }
    const handleSubmit = () => {

    }
    useEffect(() => {
        const sep = modalState.data?.sep
        if (sep !== null) {
            if (modalState.isOpen == true) {
                GetKodePoliBPJS(sep?.poli).then((res) => {
                    if (res.metaData.code == "200") {
                        setData({ noSEP: sep?.noSep,listPoli: res?.poli,tglRencanaKontrol: new Date(), })
                    }
                })
            }        
            return
        }
    }, [modalState])

    return (
        <ModalInput
            isOpen={modalState.isOpen}
            toggle={handleClose}
            title={"Buat Surat Kontrol Dalam Perawatan"}
        >
            <div className="grid md:grid-cols-2 md:gap-6">
                <FormInput
                    name="noSEP"
                    value={data.noSEP}
                    onChange={handleOnChange}
                    label="No SEP"
                    error={errors.noSEP}
                    disabled={true}
                />
              <div>
                    <div className="mb-1" />
                    <Select
                        name="kodepoli"
                        onChange={handleOnChange}
                        value={data.kodepoli}
                        error={errors.kodepoli}
                        label={"Poli"}>
                        <Option value={""}>-- Pilih Poli --</Option>
                        {
                            data?.listPoli.map((list) => {
                                return (
                                    <Option value={list.kode}>{list.nama}</Option>
                                )
                            })
                        }
                    </Select>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <FormInputDate
                    label="Tanggal Rencana Kontrol"
                    selected={data.tglRencanaKontrol}
                    onChange={(date) => setData('tglRencanaKontrol', date)}
                    format={"dd/MM/yyyy"}
                    minDate={new Date()}
                    error={errors.tglRencanaKontrol}

                />
                <div>
                    <div className="mb-1" />
                    <Select
                        name="kodeDokter"
                        onChange={handleOnChange}
                        value={data.kodeDokter}
                        error={errors.kodeDokter}
                        label={"Dokter"}>   
                        {
                            listDokter.map((list) => {
                                return (
                                    <Option value={list?.kode}>{list?.nama}</Option>
                                )
                            })
                        }
                    </Select>
                </div>
            </div>
            <div className="flex items-center">
                <Button
                    onClick={handleSubmit}
                    processing={processing}
                >
                    Simpan
                </Button>
                <Button
                    onClick={handleClose}
                    type="secondary"
                >
                    Batal
                </Button>
            </div>
        </ModalInput>
    )
}