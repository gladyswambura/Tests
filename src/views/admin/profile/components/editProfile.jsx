import React, { useState, useEffect } from 'react'
import { Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'

const EditProfile = ({ isOpen, onClose, currentProfile, onSave }) => {

    const [formData, setFormData] = useState(currentProfile)

    // Sets current profile data
    useEffect(() => {

        if (isOpen) {
            setFormData(currentProfile)
        }

    }, [currentProfile, isOpen])

    // Closes 
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    // Updates & saves edited profile
    const handleSubmit = (e) => {
        e.preventDefault()
        onSave(formData);
        console.log('Edited Form:', formData)
    }

    // Handles input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };



    if (!isOpen) return null;

    console.log('formData edit:', formData)

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50" onClick={handleOverlayClick}>
            <div className="relative bg-white rounded-xl p-2 shadow-lg w-2/5" onClick={(e) => e.stopPropagation()}>

                <div className="p-6 ml-3">
                    <div className="text-2xl font-semibold mb-4">
                        <p>Edit Your Profile</p>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div>
                            <FormControl>
                                <FormLabel className='text-xl mb-1'>Name</FormLabel>
                                <Input
                                    name='fullname'
                                    value={formData.fullname || ''}
                                    type='text'
                                    className='rounded-lg mb-7 text-lg focus:outline-blue-500 border border-blue-500 w-3/4 p-2'
                                    onChange={handleInputChange}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel className='text-xl mb-1'>Email</FormLabel>
                                <Input
                                    name='email'
                                    value={formData.email || ''}
                                    type='text'
                                    className='rounded-lg mb-7 text-lg focus:outline-blue-500 border border-blue-500 w-3/4 p-2'
                                    onChange={handleInputChange} />
                            </FormControl>

                            <FormControl>
                                <FormLabel className='text-xl mb-1'>Position/Role</FormLabel>
                                <Input
                                    name='role'
                                    value={formData.role}
                                    type='text'
                                    className='rounded-lg mb-7 text-lg focus:outline-blue-500 border border-blue-500 w-3/4 p-2'
                                    onChange={handleInputChange} />
                            </FormControl>

                            <FormControl>
                                <FormLabel className='text-xl mb-1'>Company</FormLabel>
                                <Input
                                    name='company'
                                    value={formData.company}
                                    type='text'
                                    className='rounded-lg mb-7 text-lg focus:outline-blue-500 border border-blue-500 w-3/4 p-2'
                                    onChange={handleInputChange} />
                            </FormControl>


                            <FormControl>
                                <FormLabel className='text-xl mb-1'>About</FormLabel>
                                <Textarea
                                    name='about'
                                    value={formData.about}
                                    type='text'
                                    className='rounded-lg mb-7 text-lg focus:outline-blue-500 border border-blue-500 w-3/4 p-2'
                                    onChange={handleInputChange} />
                            </FormControl>
                            
                        </div>

                        <div className='flex justify-between '>
                            <Button
                                type='submit'
                                className="bg-blue-300 py-1.5 px-5 mt-2 text-lg font-semibold rounded-lg hover:bg-blue-500">
                                Update Profile
                            </Button>

                            <Button
                                className="bg-red-400 py-1.5 px-5 mt-2 text-lg font-semibold rounded-lg hover:bg-red-500"
                                onClick={onClose}>
                                Close
                            </Button>
                        </div>

                    </form>
                </div>


            </div>
        </div>

    )
}

export default EditProfile