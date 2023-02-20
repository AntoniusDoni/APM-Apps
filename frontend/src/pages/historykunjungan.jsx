import React, { useState, useEffect } from "react";
import { ListHistory } from "../../wailsjs/go/repository/Repository"
import Modal from "../components/Modal";
import Loading from "../components/Loading"
import { useForm } from "@inertiajs/react";
import FormInputDate from "../components/FormInputDate"
import { TextInput, Label } from 'flowbite-react';
import { defaultSKDP } from "../utils/helper";
import { Dropdown } from "flowbite-react";
import { HiPlus, HiTrash } from "react-icons/hi";
import { useModalState } from "../utils/hooks";
import ModalSKDP from "./modalSkdp";
import { useNavigate } from "react-router-dom";
export default function HistoryKunjungan() {
    const [list, setList] = useState(() => defaultSKDP());
    const navigate = useNavigate();
    const { data, setData, errors } = useForm({
        no_ka: '',
        tglmulai: new Date(),
        tglakhir: new Date(),
    })
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const formModal = useModalState()
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value)
    }
    const GetListHistory = () => {
        setLoading(true)
        ListHistory(data.tglmulai, data.tglakhir, data.no_ka).then((response) => {
            if (response.metaData.code == 200) {
                setList(response?.listdata?.histori)
            } else {
                setMessage(response.metaData.message)
                setList(defaultSKDP)
                toggle()
            }
        }).catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }
    const handleKeyDown = e => {
        if (e.code === 'Enter') {
            GetListHistory()
        }
    }
    const toggleFormModal = (sep = null) => {
        formModal.setData({ title: "SKDP", sep })
        formModal.toggle()
    }
    const deletSEP = (noSep) => {

    }
    useEffect(() => {
        if (data.no_ka !== "") {
            GetListHistory()
        }
    }, [data.tglmulai, data.tglakhir])
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {loading && (
                <Loading />
            )}
            <Modal
                isOpen={isOpen}
                toggle={toggle}
                title={"Peringantan"}
            >{message}</Modal>
            <div className="pb-4 bg-white dark:bg-gray-900 flex justify-end">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <FormInputDate
                        label="Tanggal Awal"
                        selected={data.tglmulai}
                        onChange={(date) => setData('tglmulai', date)}
                        format={"dd/MM/yyyy"}
                        error={errors.tglmulai}
                    />
                    <FormInputDate
                        label="Tanggal Akhir"
                        selected={data.tglakhir}
                        onChange={(date) => setData('tglakhir', date)}
                        format={"dd/MM/yyyy"}
                        error={errors.tglakhir}
                    />
                    <div >
                        <Label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Kartu</Label>
                        <TextInput
                            type="text"
                            name="no_ka"
                            value={data.no_ka}
                            className="mb-2 block w-full"
                            autoComplete="current-password"
                            onChange={handleOnChange}
                            onKeyDownCapture={e => handleKeyDown(e)}
                        />
                    </div>
                </div>
            </div>
            <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-00">
                    <tr>
                        <th key={0} scope="col" className="px-6 py-4">No</th>
                        <th>No Rujukan</th>
                        <th>No SEP</th>
                        <th>Nama Peserta</th>
                        <th>Diagnosa</th>
                        <th>Poli</th>
                        <th>Tgl SEP</th>
                        <th>Kelas</th>
                        <th>Pilih</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list?.map((detail, index) => (
                            <tr key={index + 1} className="font-medium text-gray-900 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td key={detail.noSuratKontrol} scope="row" className="px-6 py-4  whitespace-nowrap dark:text-white">{index + 1}</td>
                                <td className="py-4 px-6">{detail.noRujukan}</td>
                                <td className="py-4 px-6">{detail.noSep}</td>
                                <td className="py-4 px-6">{detail.namaPeserta}</td>
                                <td className="py-4 px-6">{detail.diagnosa}</td>
                                <td className="py-4 px-6">{detail.poli}</td>
                                <td className="py-4 px-6">{detail.tglSep}</td>
                                <td className="py-4 px-6">{detail.kelasRawat}</td>
                                <td className="py-4 px-6">
                                    {detail.noSuratKontrol != '' && (
                                        <Dropdown
                                            label={"Opsi"}
                                            floatingArrow={true}
                                            arrowIcon={true}
                                            dismissOnClick={true}
                                            size={'sm'}
                                        >
                                             <Dropdown.Item onClick={()=>navigate("/histrorykontrol/"+detail.noKartu)}>
                                                <div className='flex space-x-1 items-center'>
                                                    <HiPlus />
                                                    <div>Lihat History Kontrol</div>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => toggleFormModal(detail)}>
                                                <div className='flex space-x-1 items-center'>
                                                    <HiPlus />
                                                    <div>Buat SKDP</div>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => deletSEP(detail.noSep)}>
                                                <div className='flex space-x-1 items-center'>
                                                    <HiTrash />
                                                    <div>Delete SEP</div>
                                                </div>
                                            </Dropdown.Item>
                                        </Dropdown>
                                    )}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <ModalSKDP modalState={formModal}></ModalSKDP>
        </div>
    )
}