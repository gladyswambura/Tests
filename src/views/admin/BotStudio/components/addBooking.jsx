import React, { useState} from 'react'
import { Button } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import CustomForm from './customForm';

const AddBooking = () => {
    const [formData, setFormData] = useState({})

    const handleChange = (name, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form Submitted:', formData)
    }


    const formFields = [
        { name: 'item', label: 'Item ID', placeholder:'E.g Plate Number', type:'text' },
        { name: 'desc', label: 'Brief Item Description', type:'text' },
        { name: 'slots', label: 'Item Slots Count', type:'text' },
        { name: 'starting', label: 'Starting Venue', placeholder:'E.g Nairobi', type:'text' },
        { name: 'stopping', label: 'Stopping Venue', placeholder:'E.g Kampala', type:'text' }
    ]

    return (

        <div className="bg-white rounded-lg shadow-md p-6 mt-4">

            <p className='text-xl font-normal mt-2 mb-5'>Add an Item For Booking</p>

            <form onSubmit={handleSubmit}>

                <CustomForm formFields={formFields} onChange={handleChange} onSubmit={handleSubmit} formData={formData} />

                <Select iconColor='transparent' placeholder='Select Item Type' className='p-2 w-3/12 border border-green-500 rounded-lg bg-white mb-7'>
                    <option value='option1'>Event Booking</option>
                    <option value='option2'>Property Booking</option>
                </Select>

                <Button type='submit' className='bg-green-200 py-2 px-6 text-lg rounded-lg hover:bg-green-500'>Save Item</Button>

            </form>



        </div>

    )
}

export default AddBooking