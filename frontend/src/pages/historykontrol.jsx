import React, { useState, useEffect } from "react";
import { ListSKDP, SearchRujukanByNoKa,DELETESKDP } from "../../wailsjs/go/repository/Repository"
import Modal from "../components/Modal";
import Loading from "../components/Loading"
import { useForm } from "@inertiajs/react";
import FormInputMounthYears from "../components/FormInputMounthYears"
import { TextInput, Label } from 'flowbite-react';
import { defaultSKDP } from "../utils/helper";
import { Dropdown } from "flowbite-react";
import { HiPlus, HiTrash } from "react-icons/hi";
import { useBucket } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import ModallConfrim from "../components/ModallConfrim";
import { useModalState } from "../utils/hooks";
export default function HistoryKontrol() {
    const { user, setUser } = useBucket()
    let { noka } = useParams()
    if (noka == undefined) {
        noka = ''
    }
    const [list, setList] = useState(() => defaultSKDP());
    const { data, setData, errors } = useForm({
        no_ka: noka,
        tanggal: new Date()
    })
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const formModal = useModalState()
    const toggleFormModal = (data = null) => {
        formModal.setData({ title: "Perhatian",text:"Apakah Anda Yakin akan Menghapus data ini?",confrim:"Delete",cancel:"Tidak", data })
        formModal.toggle()
    }

    const navigate = useNavigate();
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value)
    }
    const GelistSKDP = () => {
        setLoading(true)
        ListSKDP(data.no_ka, data.tanggal).then((response) => {
            if (response.metaData.code == 200) {
                setList(response?.listdata?.list)
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
            GelistSKDP()
        }
    }
    const handleSubmit = (noSuratKontrol) => {
        setLoading(true)
        SearchRujukanByNoKa(data.no_ka, noSuratKontrol).then((response) => {
      
            if (response.metaData.code == 200) {
                setUser(response)
                navigate("/pendaftaran")
            } else {
                setMessage(response.metaData.message)
                toggle()
            }
        }).catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }
    const deleteSkdp = (noSuratKontrol) => {
        DELETESKDP(noSuratKontrol).then((resp)=>{
            console.log(resp)
            setMessage(resp.message)
            toggle()
            formModal.toggle()
            GelistSKDP()
        })
    }
    useEffect(() => {
        if (data.tanggal != '' && data.no_ka != '')
            GelistSKDP()
    }, [data.tanggal])

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <FormInputMounthYears
                        label="Tanggal"
                        selected={data.tanggal}
                        onChange={(date) => setData('tanggal', date)}
                        format={"MM/yyyy"}
                        error={errors.tanggal}
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
                    <th scope="col" className="px-6 py-3">No</th>
                    <th scope="col" className="px-6 py-3">No Surat</th>
                    <th scope="col" className="px-6 py-3">No SEP</th>
                    <th scope="col" className="px-6 py-3">Poli</th>
                    <th scope="col" className="px-6 py-3">Tgl Kontrol</th>
                    <th>Daftar </th>
                </thead>
                <tbody>
                    {
                        list?.map((detail, index) => (
                            <tr key={index + 1} className="font-medium text-gray-900 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td key={detail.noSuratKontrol} scope="row" className="px-6 py-4  whitespace-nowrap dark:text-white">{index + 1}</td>
                                <td className="py-4 px-6">{detail.noSuratKontrol}</td>
                                <td className="py-4 px-6">{detail.noSepAsalKontrol}</td>
                                <td className="py-4 px-6">{detail.namaPoliTujuan}</td>
                                <td className="py-4 px-6">{detail.tglRencanaKontrol}</td>
                                <td className="py-4 px-6">
                                    {
                                        detail.noSepAsalKontrol != '' && (
                                            <Dropdown
                                                label={"Opsi"}
                                                floatingArrow={true}
                                                arrowIcon={true}
                                                dismissOnClick={true}
                                                size={'sm'}
                                            >
                                                <Dropdown.Item onClick={() => handleSubmit(detail.noSuratKontrol)}>
                                                    <div className='flex space-x-1 items-center'>
                                                        <HiPlus />
                                                        <div>Daftar</div>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item onClick={() => toggleFormModal(detail)}>
                                                    <div className='flex space-x-1 items-center'>
                                                        <HiPlus />
                                                        <div>Hapus SKDP</div>
                                                    </div>
                                                </Dropdown.Item>
                                            </Dropdown>
                                        )
                                    }

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <ModallConfrim modalState={formModal} Onconfrim={deleteSkdp}></ModallConfrim>
        </div>
    )
}