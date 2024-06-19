import React, { useState } from 'react';
import { Tabs, TabList, Tab, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './styles.css'


const TabMenu = () => {

  const [nodeMenuOpen, setNodeMenuOpen] = useState(false)
  const [paramsMenuOpen, setParamsMenuOpen] = useState(false)
  const [conversationMenuOpen, setConversationMenuOpen] = useState(false)
  const [bookingMenuOpen, setBookingMenuOpen] = useState(false)

  const handleNodeMenuOpen = () => setNodeMenuOpen(true)
  const handleNodeMenuClose = () => setNodeMenuOpen(false)

  const handleParamsMenuOpen = () => setParamsMenuOpen(true)
  const handleParamsMenuClose = () => setParamsMenuOpen(false)

  const handleconversationMenuOpen = () => setConversationMenuOpen(true)
  const handleConversationMenuClose = () => setConversationMenuOpen(false)

  const handleBookingMenuOpen = () => setBookingMenuOpen(true)
  const handleBookingMenuClose = () => setBookingMenuOpen(false)


  return (
    <Tabs variant="unstyled">
      <TabList className="flex justify-around text-xl">
        <Box p="2" rounded="md" flex="1" mx="1" onMouseEnter={handleNodeMenuOpen} onMouseLeave={handleNodeMenuClose} position="relative">
          <Menu isOpen={nodeMenuOpen}>
            <MenuButton as={Tab} _expanded={{ borderBottom: '2px solid rgb(29 78 216)', color: 'black' }} className="menu-button-hover" variant="unstyled">
              Node Maintenance
            </MenuButton>
            <MenuList bg='white' boxShadow='xl' px='30' py='8' fontSize='1rem' zIndex='1' className='box-shadow box-shadow-hover'>
              <MenuItem>Add Node</MenuItem>
               <MenuItem>Review Node</MenuItem>
              <MenuItem>Add Bulk Nodes</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box p="2" rounded="md" flex="1" mx="1" onMouseEnter={handleParamsMenuOpen} onMouseLeave={handleParamsMenuClose} position='relative'>
          <Menu isOpen={paramsMenuOpen}>
            <MenuButton as={Tab} _expanded={{ borderBottom: '2px solid rgb(29 78 216)', color: 'black' }} variant="unstyled">
              Parameters Configuration
            </MenuButton>
            <MenuList bg='white' boxShadow='xl' px='50' py='8' fontSize='1rem' zIndex='1' className='box-shadow box-shadow-hover'>
              <MenuItem> <Link  to='channel'>Channel Config</Link> </MenuItem>
              <MenuItem>Global Configs</MenuItem>

            </MenuList>
          </Menu>

        </Box>

        <Box p="2" rounded="md" flex="1" mx="1" onMouseEnter={handleconversationMenuOpen} onMouseLeave={handleConversationMenuClose} position='relative'>
          <Menu isOpen={conversationMenuOpen}>
            <MenuButton as={Tab} _expanded={{ borderBottom: '2px solid rgb(29 78 216)', color: 'black' }} variant="unstyled">
              Conversation 
            </MenuButton>
            <MenuList bg='white' boxShadow='xl' px='50' py='8' fontSize='1rem' zIndex='1' className='box-shadow box-shadow-hover'>
              <MenuItem>Designer Tool</MenuItem>
              <MenuItem> <Link to='addConvo'>Add Conversation</Link> </MenuItem>
              <MenuItem> <Link to='reviewConvo'>Review Conversation</Link> </MenuItem>
              <MenuItem>Templates</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box p="2" rounded="md" flex="1" mx="1" onMouseEnter={handleBookingMenuOpen} onMouseLeave={handleBookingMenuClose} position='relative'>
          <Menu isOpen={bookingMenuOpen}>
            <MenuButton as={Tab} _expanded={{ borderBottom: '2px solid rgb(29 78 216)', color: 'black' }} variant="unstyled">
              Administration
            </MenuButton>
            <MenuList bg='white' boxShadow='xl' px='50' py='8' fontSize='1rem' zIndex='1' className='box-shadow box-shadow-hover'>
              <MenuItem>Manage Users</MenuItem>
              <MenuItem>Manage Functions</MenuItem>
              <MenuItem>Manage Rights</MenuItem>
              <MenuItem> <Link to='createBooking'>Manage Bookings</Link> </MenuItem>
            </MenuList>
          </Menu>

        </Box>
      </TabList>

    </Tabs>
    
  );
};

export default TabMenu;
