import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'

const EditProfile = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (

        <div  className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50" onClick={handleOverlayClick}>
            <div className="relative bg-white rounded-xl p-2 shadow-lg w-2/5" onClick={(e) => e.stopPropagation()}>

              <div className="p-6 ml-3">
              <div className="text-2xl font-semibold mb-4">
                    <p>Edit Your Profile</p>
                </div>

                <div>
                    <FormControl>
                        <FormLabel className='text-xl mb-1'>Name</FormLabel>
                        <Input type='text' className='rounded-lg mb-7 text-lg focus:outline-blue-500 border border-blue-500 w-3/4 p-2' />
                    </FormControl>

                    <FormControl>
                        <FormLabel className='text-xl mb-1'>Email</FormLabel>
                        <Input type='text' className='rounded-lg mb-7 text-lg focus:outline-blue-500 border border-blue-500 w-3/4 p-2'/>
                    </FormControl>
                    <FormControl>
                        <FormLabel className='text-xl mb-1'>Position/Role</FormLabel>
                        <Input type='text' className='rounded-lg mb-7 text-lg focus:outline-blue-500 border border-blue-500 w-3/4 p-2'/>
                    </FormControl>

                    <FormControl>
                        <FormLabel className='text-xl mb-1'>About</FormLabel>
                        <Textarea type='text' className='rounded-lg mb-7 text-lg focus:outline-blue-500 border border-blue-500 w-3/4 p-2'/>
                    </FormControl>
                </div>

                <div className='flex justify-between '>
                    <Button className="bg-blue-300 py-1.5 px-5 mt-2 text-lg font-semibold rounded-lg hover:bg-blue-500">Update Profile</Button>
                    <Button className="bg-red-400 py-1.5 px-5 mt-2 text-lg font-semibold rounded-lg hover:bg-red-500" onClick={onClose}>Close</Button>
                </div>
              </div>
                
               
            </div>
        </div>

       
    )
}

export default EditProfile