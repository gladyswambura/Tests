import React, {useState} from 'react'
import { Select } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import CustomForm from './customForm'

const Channel = () => {

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
        { name: 'pageId', label: 'Page Id or Account Id', type:'text' },
        { name: 'desc', label: 'Description', type:'text' }
    ]

    return (

        <div className="bg-white rounded-lg shadow-md p-6 mt-4">

            <form onSubmit={handleSubmit}>
                
                <Select iconColor='transparent' placeholder='Choose Parameter Type' className='p-2 w-3/12 border border-green-500 rounded-lg bg-white mb-7'>
                    <option value='option1'>Client Parameters</option>
                    <option value='option2'>Global Parameters</option>
                </Select>

                <Select iconColor='transparent' placeholder='Select Channel' className='p-2 w-3/12 border border-green-500 rounded-lg bg-white mb-7'>
                    <option value='option1'>Website</option>
                    <option value='option2'>Facebook</option>
                    <option value='option2'>Twitter</option>
                    <option value='option2'>Slack</option>
                    <option value='option2'>Instagram</option>
                    <option value='option2'>WhatsApp</option>
                    <option value='option2'>Telegram</option>
                    <option value='option2'>All Channels</option>
                </Select>

                <CustomForm formFields={formFields} onChange={handleChange} onSubmit={handleSubmit} formData={formData} />

                <Button type='submit'className='bg-green-200 py-2 px-6 text-lg rounded-lg hover:bg-green-500'>Save Parameter</Button>

            </form>



        </div>

    )
}

export default Channel