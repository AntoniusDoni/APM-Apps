import React, { useEffect } from "react";
import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import Button from "@/Components/Button";
import FormInput from "@/Components/FormInput";
import SelectionInput from "./SelectionInput";
import { Option, Select } from "@/Components/SelectInput";
import FormInputNumeric from "@/Components/FormInputNumeric";

export default function FormModal(props) {
    const { modalState } = props
    const { data, setData, post, put, processing, errors, reset, clearErrors } = useForm({
        id: null,
        name: '',
        short_name: '',
        base_unit_id: null,
        operator: '',
        operator_value: '',
    })

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value)
    }

    const onItemSelected = (id) => {
        if (id === null) {
            setData('base_unit_id', null)
            return
        }
        if (data.base_unit_id === null) {
            setData({
                ...data,
                base_unit_id: id,
                operator: '*',
                operator_value: 1,
            })
        }
    }

    const handleReset = () => {
        modalState.setData(null)
        reset()
        clearErrors()
    }

    const handleClose = () => {
        handleReset()
        modalState.toggle()
    }

    const handleSubmit = () => {
        const unit = modalState.data
        if(unit !== null) {
            put(route('unit.update', unit), {
                onSuccess: () => handleClose(),
            })
            return
        } 
        post(route('unit.store'), {
            onSuccess: () => handleClose()
        })
    }

    useEffect(() => {
        const unit = modalState.data
        if (unit !== null) {
            setData({
                id: unit?.id,
                name: unit?.name,
                short_name: unit?.short_name,
                base_unit_id: unit?.base_unit_id,
                operator: unit?.operator,
                operator_value: unit?.operator_value,
            })
            return 
        }
    }, [modalState])

    return (
        <Modal
            isOpen={modalState.isOpen}
            toggle={handleClose}
            title={"Satuan"}
        >
            <FormInput
                name="name"
                value={data.name}
                onChange={handleOnChange}
                label="Nama"
                error={errors.name}
            />
            <FormInput
                name="short_name"
                value={data.short_name}
                onChange={handleOnChange}
                label="Singkatan"
                error={errors.short_name}
            />
            <SelectionInput
                label="Basis"
                editId={data.id}
                itemSelected={data.base_unit_id}
                onItemSelected={onItemSelected}
                onClear={() => {}}
                error={errors.base_unit_id}
            />
            {data.base_unit_id !== null && (
                <div>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Operator</label>
                    <Select
                        name="operator"
                        onChange={handleOnChange}
                        value={data.operator}
                        error={errors.operator}
                    >
                        <Option value=""> - select - </Option>
                        <Option value="/">Bagi (/)</Option>
                        <Option value="*">Kali (*)</Option>
                    </Select>
                    <FormInputNumeric
                        type="number"
                        name="operator_value"
                        value={data.operator_value}
                        onChange={handleOnChange}
                        label="Nilai"
                        error={errors.operator_value}
                    />
                </div>
            )}
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
        </Modal>
    )
}