import React, { useEffect } from 'react';
import { Select, Button } from '@chakra-ui/react';
import CustomForm from './customForm';

const Channel = () => {
  // State for form data
  const [formData, setFormData] = React.useState({});

  // State for select options
  const [selectData, setSelectData] = React.useState({ params: '', socials: '' });

  // Handle form field changes
  const handleChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle select option changes
  const handleSelect = (e) => {
    const { name, value } = e.target;
    setSelectData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullForm = { ...formData, ...selectData };
    console.log('Form Submitted:', fullForm);
  };

  // Form fields configuration
  const formFields = [
    { name: 'pageId', label: 'Page Id or Account Id', type: 'text' },
    { name: 'desc', label: 'Description', type: 'text' }
  ];

  // Effect to log component mounting
  useEffect(() => {
    console.log('Channel component mounted');
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-4">
      <form onSubmit={handleSubmit}>

        {/* Select for parameter type */}
        <Select
          name='params'
          value={selectData.params}
          onChange={handleSelect}
          iconColor='transparent'
          placeholder='Choose Parameter Type'
          className='p-2 w-3/12 border border-green-500 rounded-lg bg-white mb-7'
        >
          <option value='Client Parameters'>Client Parameters</option>
          <option value='Global Parameters'>Global Parameters</option>
        </Select>

        {/* Select for social channel */}
        <Select
          name='socials'
          value={selectData.socials}
          onChange={handleSelect}
          iconColor='transparent'
          placeholder='Select Channel'
          className='p-2 w-3/12 border border-green-500 rounded-lg bg-white mb-7'
        >
          <option value='Website'>Website</option>
          <option value='Facebook'>Facebook</option>
          <option value='Twitter'>Twitter</option>
          <option value='Slack'>Slack</option>
          <option value='Instagram'>Instagram</option>
          <option value='WhatsApp'>WhatsApp</option>
          <option value='Telegram'>Telegram</option>
          <option value='All Channels'>All Channels</option>
        </Select>

        {/* Custom form component */}
        <CustomForm
          formFields={formFields}
          onChange={handleChange}
          formData={formData}
        />

        {/* Submit button */}
        <Button
          type='submit'
          className='bg-green-200 py-2 px-6 text-lg rounded-lg hover:bg-green-500'
        >
          Save Parameter
        </Button>

      </form>
    </div>
  );
};

export default Channel;
