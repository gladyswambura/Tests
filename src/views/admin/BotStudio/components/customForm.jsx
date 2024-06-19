import React from 'react'
import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'


const CustomForm = ({ formFields, formData, onChange, onSubmit }) => {

  const handleChange = (e) => {
    const {name, value} = e.target
    onChange(name, value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }

   
  return (

    <form onSubmit={handleSubmit}>
        <VStack spacing='4' align='stretch'>
            {formFields.map((field) => (
                <FormControl key={field.name} id={field.name}>
                    <FormLabel> {field.label} </FormLabel>
                    <Input 
                    type={field.type || ''}
                    name={field.name}
                    placeholder={field.placeholder || ''}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    className='border border-green-500 w-1/2 p-2 rounded-lg mb-7 text-lg'/>
                </FormControl>
            ))}
            {/* <Button type='submit' colorScheme='green'>Submit</Button> */}
        </VStack>
    </form>
  )

}

export default CustomForm