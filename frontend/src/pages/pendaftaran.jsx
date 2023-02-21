import React, { useEffect } from "react";
import FormInput from "../components/FormInput"
import Button from "../components/Button";
import { useForm } from "@inertiajs/react";
import { useBucket } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Option, Select } from "../components/SelectInput";
import {CreateRegis} from "../../wailsjs/go/repository/Repository"
export default function Pendaftaran() {
    const { user } = useBucket()
    const navigate = useNavigate();
    const { data, setData, processing, errors, reset, clearErrors } = useForm({
        no_ka: '0001926061569',
        no_rujukan: '',
        tglKunjungan: '',
        nama: '',
        nik: '',
        noMR: '',
        noTelepon: '',
        tglLahir: '',
        alamat: '',
        kdPPK: '',
        nmProvider: '',
        hakKelas: '',
        kodeKelas: '',
        jenisPeserta: '',
        status: '',
        prolanisPRB: '',
        kdicd: '',
        nmIcd: '',
        kdPoli: '',
        nmPoli: '',
        jnsPelayanan: '',
        kodeJnsPelayanan: '',
        umurSekarang: '',
        umurSaatPelayanan: '',
        kodeDokter: '',
        skdp: '',
        tujuanKunj: '',
        flagProcedure: '',
        assesmentPel:'',
        kdPenunjang:'',
        listDokter: []
    })
    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value)
    }
    const handleSubmit = () => {
        
        CreateRegis(data).then((resp)=>{
            
        })

    }
    let listdokter
    let JmlRujukan
    useEffect(() => {
        if (user) {
            let data = user?.response?.rujukan
            JmlRujukan = user?.JmlRujukan?.jumlahSEP

            setData({
                no_ka: data?.peserta?.noKartu,
                tglKunjungan: data?.tglKunjungan,
                no_rujukan: data?.noKunjungan,
                nama: data?.peserta?.nama,
                nik: data?.peserta?.nik,
                noMR: data?.peserta?.mr?.noMR,
                noTelepon: data?.peserta?.mr?.noTelepon,
                tglLahir: data?.peserta?.tglLahir,
                alamat: data?.peserta?.alamat,
                kdPPK: data?.provPerujuk?.kode,
                nmProvider: data?.provPerujuk?.nama,
                hakKelas: data?.peserta?.hakKelas?.keterangan,
                kodeKelas: data?.peserta?.hakKelas?.kode,
                jenisPeserta: data?.peserta?.jenisPeserta?.keterangan,
                status: data?.peserta?.statusPeserta?.keterangan,
                prolanisPRB: data?.informasi?.prolanisPRB,
                kdicd: data?.diagnosa?.kode,
                nmIcd: data?.diagnosa?.nama,
                kdPoli: data?.poliRujukan?.kode,
                nmPoli: data?.poliRujukan?.nama,
                jnsPelayanan: data?.pelayanan?.nama,
                kodeJnsPelayanan: data?.pelayanan?.kode,
                umurSaatPelayanan:data?.peserta?.umur?.umurSaatPelayanan,
                umurSekarang:data?.peserta?.umur?.umurSekarang,
                listDokter: user?.listdokter.list,
                skdp:user?.skdp
            })
            return
        } else {
            navigate("/")
        }
    }, [])

    return (
        <div>
            <div className="grid md:grid-cols-3 md:gap-6">
                <FormInput
                    className={"relative z-0 w-full mb-6 group"}
                    name="no_rujukan"
                    value={data.no_rujukan}
                    label="Nomor Rujukan"
                    error={errors.no_rujukan}
                    onChange={handleOnChange}
                    disabled={true}
                />
                <FormInput
                    className={"relative z-0 w-full mb-6 group"}
                    name="no_ka"
                    value={data.tglKunjungan}
                    label="Tangga Rujukan"
                    error={errors.tglKunjungan}
                    onChange={handleOnChange}
                    disabled={true}
                />
                <FormInput
                    className={"relative z-0 w-full mb-6 group"}
                    name="no_ka"
                    value={data.no_ka}
                    label="Nomor Kartu"
                    error={errors.no_ka}
                    onChange={handleOnChange}
                    disabled={true}
                />
            </div>
            <div className="grid md:grid-cols-3 md:gap-4">
                <FormInput
                    className={"relative z-0 w-full mb-6 group"}
                    name="noMR"
                    value={data.noMR}
                    label="Nomor RM"
                    error={errors.noMR}
                    onChange={handleOnChange}
                    disabled={true}
                />
                <FormInput
                    className={"relative z-0 w-full mb-6 group"}
                    name="nik"
                    value={data.nik}
                    label="NIK"
                    error={errors.nik}
                    onChange={handleOnChange}
                    disabled={true}
                />
                <FormInput
                    className={"relative z-0 w-full mb-6 group"}
                    name="nama"
                    value={data.nama}
                    label="Nama"
                    error={errors.nama}
                    onChange={handleOnChange}
                    disabled={true}
                />
            </div>
            <div className="grid md:grid-cols-3 md:gap-4">
                <FormInput
                    className={"relative z-0 w-full mb-6 group"}
                    name="tglLahir"
                    value={data.tglLahir}
                    label="Tanggal Lahir"
                    error={errors.tglLahir}
                    onChange={handleOnChange}
                    disabled={true}
                />
                <FormInput
                    className={"relative z-0 w-full mb-6 group"}
                    name="alamat"
                    value={data.alamat}
                    label="Alamat"
                    error={errors.alamat}
                    onChange={handleOnChange}
                    disabled={true}
                />
                <FormInput
                    className={"relative z-0 w-full mb-6 group"}
                    name="noTelepon"
                    value={data.noTelepon}
                    label="No TLP"
                    error={errors.noTelepon}
                    onChange={handleOnChange}
                    disabled={true}
                />
            </div>
            <div className="grid md:grid-cols-4 md:gap-6">
                <FormInput
                    className={"relative z-0 w-full mb-6 group"}
                    name="jenisPeserta"
                    value={data.jenisPeserta}
                    label="Jenis Peserta"
                    error={errors.jenisPeserta}
                    onChange={handleOnChange}
                    disabled={true}
                />
                <FormInput
                    className={"relative z-0 w-full mb-6 group"}
                    name="status"
                    value={data.status}
                    label="Status Peserta"
                    error={errors.status}
                    onChange={handleOnChange}
                    disabled={true}
                />

                <FormInput
                    className={"relative z-0 w-full mb-6 group"}
                    name="kdPoli"
                    value={data.kdPoli}
                    label="Kode Poli"
                    error={errors.kdPoli}
                    onChange={handleOnChange}
                    disabled={true}
                />
                <FormInput
                    className={"relative z-0 w-full mb-6 group"}
                    name="nmPoli"
                    value={data.nmPoli}
                    label="Nama Poli"
                    error={errors.nmPoli}
                    onChange={handleOnChange}
                    disabled={true}
                />
            </div>
            <div className="grid md:grid-cols-3 md:gap-6 items-center">
                <div>
                    <div className="mb-1" />
                    <Select
                        name="kodeDokter"
                        onChange={handleOnChange}
                        value={data.kodeDokter}
                        error={errors.kodeDokter}
                    >
                        <Option value={""}>-- Pilih Dokter --</Option>
                        {
                            data?.listDokter.map((list) => {
                                return (
                                    <Option value={list.kode}>{list.nama}</Option>
                                )
                            })
                        }
                    </Select>
                </div>
                <FormInput
                    className={"relative z-0 w-full mb-6 group"}
                    name="kdicd"
                    value={data.kdicd}
                    label="Kode ICD"
                    error={errors.kdicd}
                    onChange={handleOnChange}
                    disabled={true}
                />
                <FormInput
                    className={"relative z-0 w-full mb-6 group"}
                    name="nmIcd"
                    value={data.nmIcd}
                    label="Nama ICD"
                    error={errors.nmIcd}
                    onChange={handleOnChange}
                    disabled={true}
                />
            </div>
            {user?.JmlRujukan?.jumlahSEP > 0 && (
                <>
                    <div className="grid md:grid-cols-3 md:gap-6 items-center">
                        <FormInput
                            className={"relative z-0 w-full mb-6 group"}
                            name="skdp"
                            value={data.skdp}
                            label="SKDP"
                            error={errors.skdp}
                            onChange={handleOnChange}
                        />
                        <div>
                            <div className="mb-1" />
                            <Select
                                name="tujuanKunj"
                                onChange={handleOnChange}
                                value={data.tujuanKunj}
                                error={errors.tujuanKunj}
                                label={"Tujuan Kunjungan"}
                            >
                                 <Option value={""}> - </Option>
                                <Option value={"0"}>Normal</Option>
                                <Option value={"1"}>Prosedur</Option>
                                <Option value={"2"}>Konsul Dokter</Option>
                            </Select>
                        </div>
                        <div>
                            <div className="mb-1" />
                            <Select
                                name="flagProcedure"
                                onChange={handleOnChange}
                                value={data.flagProcedure}
                                error={errors.flagProcedure}
                                label={"Flag Prosedur"}
                            >
                                <Option value={""}> - </Option>
                                <Option value={"0"}>Prosedur Tidak Berkelanjutan</Option>
                                <Option value={"1"}>Prosedur dan Terapi Berkelanjutan</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6 items-center">
                    <div>
                    <div className="mb-1" />
                        <Select
                            name="kdPenunjang"
                            onChange={handleOnChange}
                            value={data.kdPenunjang}
                            error={errors.kdPenunjang}
                            label={"Kode Penunjang"}
                        >
                            <Option value={""}> - </Option>
                            <Option value={"1"}>Radioterapi</Option>
                            <Option value={"2"}>Kemoterapi</Option>
                            <Option value={"3"}>Rehabilitasi Medik</Option>
                            <Option value={"4"}>Rehabilitasi Psikososial</Option>
                            <Option value={"5"}>Transfusi Darah</Option>
                            <Option value={"6"}>Pelayanan Gigi</Option>
                            <Option value={"7"}>Laboratorium</Option>
                            <Option value={"8"}>USG</Option>
                            <Option value={"9"}>Farmasi</Option>
                            <Option value={"10"}>Lain-Lain</Option>
                            <Option value={"11"}>MRI</Option>
                            <Option value={"12"}>HEMODIALISA</Option>
                        </Select>
                        </div>
                        <div>
                        <div className="mb-1" />
                        <Select
                            name="assesmentPel"
                            onChange={handleOnChange}
                            value={data.assesmentPel}
                            error={errors.assesmentPel}
                            label={"Assesment Pelayanan"}
                        >
                             <Option value={""}> - </Option>
                            <Option value={"1"}>Poli spesialis tidak tersedia pada hari sebelumnya</Option>
                            <Option value={"2"}>Jam Poli telah berakhir pada hari sebelumnya</Option>
                            <Option value={"3"}>Dokter Spesialis yang dimaksud tidak praktek pada hari sebelumnya</Option>
                            <Option value={"4"}>Atas Instruksi RS</Option>
                            <Option value={"5"}>Tujuan Kontrol</Option>
                        </Select>
                        </div>
                    </div>
                </>
            )
            }
            <div className="flex items-center">
                <Button
                    onClick={handleSubmit}
                    processing={processing}
                >
                    Proses Daftar Anjungan Pasien Mandiri BPJS
                </Button>

            </div>
        </div >
    )
}