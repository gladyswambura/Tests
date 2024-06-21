import React, {useState} from 'react'
import { Select } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import CustomForm from './customForm'

const Channel = () => {

    const [formData, setFormData] = useState({})

    const selectedOption = {params: '', socials: ''}

    const [selectData, setSelectData] = useState(selectedOption)

    const handleChange = (name, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        const fullForm = {...formData, ...selectData}
        console.log('Form Submitted:', fullForm)
    }

    const handleSelect = (e) => {
        const { name, value } = e.target;
        setSelectData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };


    const formFields = [
        { name: 'pageId', label: 'Page Id or Account Id', type:'text' },
        { name: 'desc', label: 'Description', type:'text' }
    ]

    
    return (

        <div className="bg-white rounded-lg shadow-md p-6 mt-4">

            <form onSubmit={handleSubmit}>
                
                <Select name='params' value='selectData.params' onChange={handleSelect} iconColor='transparent' placeholder='Choose Parameter Type' className='p-2 w-3/12 border border-green-500 rounded-lg bg-white mb-7'>
                    <option value='Client Parameters'>Client Parameters</option>
                    <option value='Global Parameters'>Global Parameters</option>
                </Select>

                <Select name='socials' value='selectData.socials' onChange={handleSelect} iconColor='transparent' placeholder='Select Channel' className='p-2 w-3/12 border border-green-500 rounded-lg bg-white mb-7'>
                    <option value='Website'>Website</option>
                    <option value='Facebook'>Facebook</option>
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