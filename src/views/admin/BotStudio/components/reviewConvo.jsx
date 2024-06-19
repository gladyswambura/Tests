import React, {useState} from 'react'
import { Select } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import CustomForm from './customForm'


const ReviewConvo = () => {

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
        { name: 'paste', label: 'Paste The Question Here', type:'text' },
        { name: 'colum', label: 'Column Label', placeholder:'E.g Date of Birt or Question 1', type:'text' },
        { name: 'default', label: 'Default Value if Skipped', type:'text' }
    ]

    return (

        <div className="bg-white rounded-lg shadow-md p-6 mt-4">

            <form onSubmit={handleSubmit}>
                
                <Select iconColor='transparent' placeholder='Select The Form' className='p-2 w-3/12 border border-green-500 rounded-lg bg-white mb-7'>
                    <option value='option1'>Form Sample 1</option>
                    <option value='option2'>Form Sample 2</option>
                </Select>

                <CustomForm formFields={formFields} onChange={handleChange} onSubmit={handleSubmit} formData={formData} />

                <span> Optional: <Select iconColor='transparent' placeholder='Sepecify Data Type' className='p-2 w-3/12 border border-green-500 rounded-lg bg-white mb-7'>
                    <option value='option1'>Free from Text</option>
                    <option value='option2'>Email Address</option>
                    <option value='option2'>Account Number</option>
                    <option value='option2'>Location</option>
                    <option value='option2'>Instagram</option>
                    <option value='option2'>WhatsApp</option>
                    <option value='option2'>Telegram</option>
                    <option value='option2'>All Channels</option>
                </Select>
                </span>

                <Button type='submit' className='bg-green-200 py-2 px-6 text-lg rounded-lg hover:bg-green-500'>Add Question</Button>

            </form>



        </div>

    )
}


export default ReviewConvo