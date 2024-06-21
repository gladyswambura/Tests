import React, { useState } from 'react'
import { Select } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import CustomForm from './customForm'
import { type } from '@testing-library/user-event/dist/type'

const CreateBookings = () => {

    const [formData, setFormData] = useState([])

    const handleChange = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form Submitted:', formData)
    }


    const formFields = [
        { name: 'itemId', label: 'Item Id', type: 'text' },
        { name: 'dateTime', label: 'Datetime Picker', type: 'text' },
        { name: 'slots', label: 'Item Slots Count', type: 'text' },
        { name: 'starting', label: 'Starting Venue', placeholder: 'E.g Nairobi', type: 'text' },
        { name: 'stopping', label: 'Stopping Venue', placeholder: 'E.g Kampala', type: 'text' }

    ]

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mt-4">

            <Select iconColor='transparent' placeholder='Choose Item To Create' className='p-2 w-3/12 border border-green-500 rounded-lg bg-white mb-7'>
                <option value='option1'>Event Booking</option>
                <option value='option2'>Client Booking</option>
            </Select>

            <CustomForm formFields={formFields} formData={formData} onChange={handleChange} onSubmit={handleSubmit} />

            <Button type='submit' className='bg-green-200 py-2 px-6 text-lg rounded-lg hover:bg-green-500'>Save Item</Button>
        </div>
    )
}

export default CreateBookings