import React, { useState } from 'react';
import { Tabs, TabList, Tab, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Routes, Route, useNavigate } from 'react-router-dom'; 
import './styles.css';
import Channel from './components/channel';
import AddConvo from './components/addConvo';
import ReviewConvo from './components/reviewConvo';
import AddBooking from './components/addBooking';

const TabMenu = () => {
  const [nodeMenuOpen, setNodeMenuOpen] = useState(false);
  const [paramsMenuOpen, setParamsMenuOpen] = useState(false);
  const [conversationMenuOpen, setConversationMenuOpen] = useState(false);
  const [bookingMenuOpen, setBookingMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNodeMenuOpen = () => setNodeMenuOpen(true);
  const handleNodeMenuClose = () => setNodeMenuOpen(false);

  const handleParamsMenuOpen = () => setParamsMenuOpen(true);
  const handleParamsMenuClose = () => setParamsMenuOpen(false);

  const handleConversationMenuOpen = () => setConversationMenuOpen(true);
  const handleConversationMenuClose = () => setConversationMenuOpen(false);

  const handleBookingMenuOpen = () => setBookingMenuOpen(true);
  const handleBookingMenuClose = () => setBookingMenuOpen(false);

  const handleMenuItemClick = (path) => {
    navigate(path);
  };

  return (
    <Tabs variant="unstyled">
      <TabList className="flex justify-around text-xl">
        <Box p="2" rounded="md" flex="1" mx="1" onMouseEnter={handleNodeMenuOpen} onMouseLeave={handleNodeMenuClose} position="relative">
          <Menu isOpen={nodeMenuOpen}>
            <MenuButton as={Tab} _expanded={{ borderBottom: '2px solid rgb(29 78 216)', color: 'black' }} className="menu-button-hover" variant="unstyled">
              Node Maintenance
            </MenuButton>
            <MenuList bg='white' boxShadow='xl' px='30' py='8' fontSize='1rem' zIndex='1' className='box-shadow box-shadow-hover'>
              <MenuItem onClick={() => handleMenuItemClick('/admin/bot-studio/review-Node')}>Review Node</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('/admin/bot-studio/add-Bulk-Nodes')}>Add Bulk Nodes</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box p="2" rounded="md" flex="1" mx="1" onMouseEnter={handleParamsMenuOpen} onMouseLeave={handleParamsMenuClose} position='relative'>
          <Menu isOpen={paramsMenuOpen}>
            <MenuButton as={Tab} _expanded={{ borderBottom: '2px solid rgb(29 78 216)', color: 'black' }} variant="unstyled">
              Parameters Configuration
            </MenuButton>
            <MenuList bg='white' boxShadow='xl' px='50' py='8' fontSize='1rem' zIndex='1' className='box-shadow box-shadow-hover'>
              <MenuItem onClick={() => handleMenuItemClick('/admin/bot-studio/channel')}>Channel Config</MenuItem>
              <MenuItem>Global Configs</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box p="2" rounded="md" flex="1" mx="1" onMouseEnter={handleConversationMenuOpen} onMouseLeave={handleConversationMenuClose} position='relative'>
          <Menu isOpen={conversationMenuOpen}>
            <MenuButton as={Tab} _expanded={{ borderBottom: '2px solid rgb(29 78 216)', color: 'black' }} variant="unstyled">
              Conversation
            </MenuButton>
            <MenuList bg='white' boxShadow='xl' px='50' py='8' fontSize='1rem' zIndex='1' className='box-shadow box-shadow-hover'>
              <MenuItem>Designer Tool</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('/admin/bot-studio/add-convo')}>Add Conversation</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('/admin/bot-studio/review-convo')}>Review Conversation</MenuItem>
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
              <MenuItem onClick={() => handleMenuItemClick('/admin/bot-studio/create-bookings')}>Manage Bookings</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </TabList>

      <Routes> {/* Wrap Routes around all Route components */}
        {/* Render Routes for each tab */}
        {/* <Route path="/admin/bot-studio/review-Node" element={<ReviewNodeComponent />} />
        <Route path="/admin/bot-studio/add-Bulk-Nodes" element={<AddBulkNodesComponent />} /> */}
        <Route path="/admin/bot-studio/channel" element={<Channel />} />
        <Route path="/admin/bot-studio/add-convo" element={<AddConvo />} />
        <Route path="/admin/bot-studio/review-convo" element={<ReviewConvo />} />
        <Route path="/admin/bot-studio/create-bookings" element={<AddBooking />} />
      </Routes>
    </Tabs>
  );
};

export default TabMenu;
