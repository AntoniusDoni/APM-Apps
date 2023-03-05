import React, { useEffect, useState } from "react";
import ModalInput from "../components/ModalInput";
import { useForm } from "@inertiajs/react";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import { Option, Select } from "../components/SelectInput";
import FormInputDate from "../components/FormInputDate"
import { GetPoliKontrolBPJS, GetListDokterKontrol, CreateSKDP } from "../../wailsjs/go/repository/Repository"
import { defaultdockter } from '../utils/helper'
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading"
import Modal from "../components/Modal";
export default function ModalSKDP(props) {
    const navigate = useNavigate();
    const { modalState } = props
    const { data, setData, processing, errors, reset, clearErrors } = useForm({
        noSEP: '',
        noka: '',
        noSuratKontrol: '',
        poliKontrol: '',
        namaPoli: '',
        kodeDokter: '',
        nmdokter: '',
        tglRencanaKontrol: new Date(),
        tglPembuatanKontrol: new Date(),
    })
    const [listDokter, setDokter] = useState([])
    const [listPoli, setPoli] = useState(() => defaultdockter())
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const handleReset = () => {
        modalState.setData(null)
        reset()
        setDokter(() => defaultdockter())
        clearErrors()
    }

    const handleClose = () => {
        handleReset()
        modalState.toggle()
    }
    const handleOnChange = (event) => {
        if (event.target.name == "poliKontrol" || event.target.name == "tglRencanaKontrol") {
            var index = event.nativeEvent.target.selectedIndex;
            var value = event.target.value;
            setData({ noSEP: data?.noSEP, noSuratKontrol: data.noSuratKontrol, noka: data.noka, namaPoli: event.nativeEvent.target[index].text, poliKontrol: value, tglRencanaKontrol: data.tglRencanaKontrol, tglPembuatanKontrol: new Date() })
            GetListDokterKontrol(event.target.value, "2", data.tglRencanaKontrol).then((resp) => {
                if (resp?.list != undefined) {
                    setDokter(resp?.list)
                }
            })
        } else if (event.target.name == "kodeDokter") {
            var index = event.nativeEvent.target.selectedIndex;
            var value = event.target.value;
            setData({ noSEP: data?.noSEP, noSuratKontrol: data.noSuratKontrol, noka: data.noka, poliKontrol: data.poliKontrol, namaPoli: data.namaPoli, nmdokter: event.nativeEvent.target[index].text, kodeDokter: value, tglRencanaKontrol: data.tglRencanaKontrol, tglPembuatanKontrol: new Date() })
        }
        else {
            setData(event.target.name, event.target.value)
        }
    }
    const handleOnChangeDate = (tgl, val) => {
        setData(tgl, val)
        GetListDokterKontrol(data.poliKontrol, "2", val).then((resp) => {
            if (resp?.list != undefined) {
                setDokter(resp?.list)
            }
        })
    }
    const handleSubmit = () => {
        setLoading(true)
            CreateSKDP(data).then((resp) => {
                if (resp.metaData.code == "200") {
                    toggle()
                    navigate("/histrorykontrol/" + data.noka)
                } else {
                    setMessage(resp.metaData.message)
                    toggle()
                }
            }).catch((err) => console.log(err))
                .finally(() => setLoading(false))
        
    }
    useEffect(() => {
        const sep = modalState.data?.sep

        if (sep !== null) {
            if (modalState.isOpen == true) {
                var nosep = ""
                if (sep?.noSuratKontrol != undefined) {
                    nosep = sep?.noSepAsalKontrol
                    setData({ noSuratKontrol: sep?.noSuratKontrol, noka: sep?.noKartu, noSEP: sep?.noSepAsalKontrol, namaPoli: '', tglRencanaKontrol: new Date(sep?.tglRencanaKontrol), tglPembuatanKontrol: new Date(sep?.tglTerbitKontrol) })
                } else {
                    nosep = sep?.noSep
                    setData({ noka: sep?.noKartu, noSEP: sep?.noSep, namaPoli: '', tglRencanaKontrol: new Date(), tglPembuatanKontrol: new Date() })
                }
                GetPoliKontrolBPJS(nosep, "2", data.tglRencanaKontrol).then((res) => {
                    if (res.metaData.code == "200") {
                        setPoli(res?.response?.list)
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
            {loading && (
                <Loading />
            )}
            {data.noSuratKontrol > '' && (
                <div className="grid md:grid-cols-2 md:gap-6">
                    <FormInput
                        name="noskdp"
                        value={data.noSuratKontrol}
                        onChange={handleOnChange}
                        label="No SKDP"
                        error={errors.noSuratKontrol}
                        disabled={true}
                    />
                    <FormInputDate
                        label="Tanggal Pembuatan Kontrol"
                        selected={data.tglPembuatanKontrol}
                        onChange={(date) => handleOnChangeDate('tglPembuatanKontrol', date)}
                        format={"dd/MM/yyyy"}
                        minDate={new Date()}
                        error={errors.tglPembuatanKontrol}

                    />
                </div>)}
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
                        name="poliKontrol"
                        onChange={handleOnChange}
                        value={data.poliKontrol}
                        error={errors.poliKontrol}
                        label={"Poli"}>
                        <Option value={""}>-- Pilih Poli --</Option>
                        {

                            listPoli.map((list) => {

                                return (
                                    <Option value={list.kodePoli}>{list.namaPoli}</Option>
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
                    onChange={(date) => handleOnChangeDate('tglRencanaKontrol', date)}
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
                        <Option value={""}>-- Pilih Dokter --</Option>
                        {
                            listDokter.map((list) => {
                                return (
                                    <Option value={list?.kodeDokter}>{list?.namaDokter} {list?.jadwalPraktek} ({list?.kapasitas})</Option>
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
            <Modal
                isOpen={isOpen}
                toggle={toggle}
                title={"Peringantan"}
            >{message}</Modal>
        </ModalInput>
    )
}