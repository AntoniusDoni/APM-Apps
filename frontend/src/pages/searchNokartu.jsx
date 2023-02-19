import React, { useEffect,useState } from "react";
import FormInput from "../components/FormInput"
import { TextInput,Label } from 'flowbite-react';
import Button from "../components/Button";
import { useForm } from "@inertiajs/react";
import { useBucket } from "../context/AppContext";
import { SearchPasien } from "../../wailsjs/go/repository/Repository"
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Loading from "../components/Loading"

export default function SearchNOKartu() {
    const { user, setUser } = useBucket()
    const [isOpen, setIsOpen] = useState(false);
    const [message,setMessage]=useState("")
    const [loading, setLoading] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const { data, setData, processing, errors, reset, clearErrors } = useForm({
        no_ka: '0001166324534',
        no_rujukan: '0302B0461222P000563'
    })
  
    const navigate = useNavigate();
    const handleReset = () => {
        reset()
        clearErrors()
    }
    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value)
    }
    const handleSubmit = () => {
        setLoading(true)
        SearchPasien(data.no_rujukan, data.no_ka).then((response) => {
            if (response.metaData.code == 200) {
                setUser(response)
                handleReset()
            }else{
                setMessage(response.metaData.message)
                toggle()
            }
        }) .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }
    const handleKeyDown = e => {
        if(e.code === 'Enter') {
            handleSubmit()
        }
    }
    useEffect(() => {
        if (user) {
            navigate("/pendaftaran")
        }
    }, [user])
    return (
        <div>
             {loading && (
                        <Loading/>
                    )}
                    <form onSubmit={handleSubmit}>
            <FormInput
                name="no_ka"
                value={data.no_ka}
                onChange={handleOnChange}
                label="Nomor Kartu"
                error={errors.no_ka}
            />
             <div className="mt-4">
             <Label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Rujukan</Label>
                        <TextInput
                            type="text"
                            name="no_rujukan"
                            value={data.no_rujukan}
                            className="mb-2 block w-full"
                            autoComplete="current-password"
                            onChange={handleOnChange}
                            onKeyDownCapture={e => handleKeyDown(e)}
                        />
            </div>
            <div className="flex items-center">
                <Button
                    onClick={handleSubmit}
                    processing={processing}
                >
                    Proses Daftar Anjungan Pasien Mandiri BPJS
                </Button>
                <Button
                    onClick={handleReset}
                    type="secondary"
                >
                    Batal
                </Button>
            </div>
           </form>
            <Modal 
            isOpen={isOpen}
            toggle={toggle}
            title={"Peringantan"}
            >{message}</Modal>
        </div>
    )
}