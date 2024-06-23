import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import CustomForm from './customForm'

const AddConvo = () => {

    const [formData, setFormData] = useState({})

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

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

    const formFileds = [
        { name: 'name', label: 'Name of the Form/Questionnaire', placeholder: 'E.g Customer Opinion on Product X', type: 'text' },
        { name: 'description', label: 'Detailed Description of What This Form is Meant For', placeholder: 'E.g This survey is for ...', type: 'text' },
        { name: 'prompts', label: 'Form Prompts to Sender to Fill', placeholder: 'E.g Book Train TR29018313', type: 'text' },
        { name: 'times', label: 'Number of Times Sender is Allowed to Fill This Form ', placeholder: 'E.g 1 0r 9999 for mutiple all', type: 'text' },
        { name: 'formType', label: 'Form Type', placeholder: 'Form Type' },
    ]

    return (

        <div className="bg-white rounded-lg shadow-md p-6 mt-4">

            <div className='ml-3'>

                <h2 className='text-2xl font-semibold mb-5'>Add A Questionnaire/Survey</h2>

                <form onSubmit={handleSubmit}>

                    <CustomForm
                        formFields={formFileds}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        formData={formData}
                    />

                    <Button
                        type='submit'
                        className='bg-green-200 py-2 px-6 text-lg rounded-lg hover:bg-green-500'>
                        Save Questionnaire
                    </Button>

                </form>

            </div>


        </div>
    )
}

export default AddConvo