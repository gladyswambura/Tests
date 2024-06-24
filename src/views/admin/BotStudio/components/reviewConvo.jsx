import React, { useState } from 'react'
import { Select } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import CustomForm from './customForm'


const ReviewConvo = () => {

    const [formData, setFormData] = useState({})
    const [selectData, setSelectData] = useState({ form: '', data: '' })

    const handleChange = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelect = (e) => {
        const { name, value } = e.target
        setSelectData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const fullForm = { ...formData, ...selectData }
        console.log('Form Submitted:', fullForm)
    }


    const formFields = [
        { name: 'paste', label: 'Paste The Question Here', type: 'text' },
        { name: 'colum', label: 'Column Label', placeholder: 'E.g Date of Birt or Question 1', type: 'text' },
        { name: 'default', label: 'Default Value if Skipped', type: 'text' }
    ]

    return (

        <div className="bg-white rounded-lg shadow-md p-6 mt-4">

            <div className='ml-3'>

                <p className='text-2xl font-semibold mb-5'>Review Conversation</p>

            <form onSubmit={handleSubmit}>

                <Select
                    name='form'
                    value={selectData.form}
                    onChange={handleSelect}
                    iconColor='transparent'
                    placeholder='Select The Form'
                    className='p-2 w-3/12 border border-green-500 rounded-lg bg-white mb-7'>
                    <option value='Form Sample 1'>Form Sample 1</option>
                    <option value='Form Sample 2'>Form Sample 2</option>
                </Select>

                <CustomForm formFields={formFields} onChange={handleChange} onSubmit={handleSubmit} formData={formData} />

                <span>
                    Optional:
                    <Select
                        name='data'
                        value={selectData.data}
                        onChange={handleSelect}
                        iconColor='transparent'
                        placeholder='Specify Data Type'
                        className='p-2 w-3/12 border border-green-500 rounded-lg bg-white mb-7'>
                        <option value='Free from Text'>Free from Text</option>
                        <option value='Email Address'>Email Address</option>
                        <option value='Account Number'>Account Number</option>
                        <option value='Location'>Location</option>
                        <option value='Instagram'>Instagram</option>
                        <option value='WhatsApp'>WhatsApp</option>
                        <option value='Telegram'>Telegram</option>
                        <option value='All Channels'>All Channels</option>
                    </Select>
                </span>

                <Button
                    type='submit'
                    className='bg-green-200 py-2 px-6 text-lg rounded-lg hover:bg-green-500'>
                    Add Question
                </Button>

            </form>

            </div>

        </div>

    )
}


export default ReviewConvo