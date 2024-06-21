import React from "react";
import { IoCreateOutline, IoDocuments } from "react-icons/io5";
import { MdAddCircle, MdBarChart, MdDomain } from "react-icons/md";
import { Link } from "react-router-dom";
import Widget from "components/widget/Widget";
import AddNodeForm from '../../../components/nodes/add-node';
import AddBulkNodeForm from '../../../components/nodes/add-bulk-node';
import ReviewNodesForm from '../../../components/nodes/review-nodes';
import { Tabs, TabList, Tab } from '@chakra-ui/react'


const BotStudio = () => {

  return (
    <div>
      <div className="mt-4">
        <Tabs variant='unstyled'>
          <TabList className="flex justify-around text-xl">
          <Tab _selected={{ borderBottom: '2px solid rgb(29 78 216)', color: 'blue.500' }} className="pb-2">Node Maintenance</Tab>
            <Tab _selected={{ borderBottom: '2px solid rgb(29 78 216)', color: 'blue.500' }} className="pb-2">Parameters Configuration</Tab>
            <Tab _selected={{ borderBottom: '2px solid rgb(29 78 216)', color: 'blue.500' }} className="pb-2">Conversation Designers</Tab>
            <Tab _selected={{ borderBottom: '2px solid rgb(29 78 216)', color: 'blue.500' }} className="pb-2">Booking Management</Tab>
          </TabList>
        </Tabs>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-12">
          <p className="mb-4 text-xl">Nodes are leaves stored in the knowledge tree. They are searched on User SMS received to reply correctly</p>
          <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3">
            <Link to="./" element={<AddNodeForm />} className="border border-blue-700 rounded-md style={myStyle}">
              <Widget
                icon={<MdAddCircle className="h-7 w-7" />}
                title={<h2 style={{ fontWeight: 'bold', color: 'red' }}>ADD NODE</h2>}
              />
            </Link>
            <Link to="/add-bulk-node" element={<AddBulkNodeForm />} className="border border-blue-700 rounded-md style={myStyle}">
              <Widget
                icon={<IoDocuments className="h-6 w-6" />}
                title={<h2 style={{ fontWeight: 'bold', color: 'red' }}>ADD BULK NODE</h2>}
              />
            </Link>
            <Link to="/review-nodes" element={<ReviewNodesForm />} className="border border-blue-700 rounded-md style={myStyle}">
              <Widget
                icon={<MdBarChart className="h-7 w-7" />}
                title={<h2 style={{ fontWeight: 'bold', color: 'red' }}>REVIEW NODES</h2>}
              />
            </Link>
          </div>
        </div>

        <div className="mb-12">
          <p className="mb-4 text-xl">Here You can add Options that you can can choose from during node creation</p>
          <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3">
            <Link to="/variable-maintainance" className="border border-blue-700 rounded-md style={myStyle}">
              <Widget
                icon={<MdDomain className="h-7 w-7" />}
                title={<h2 style={{ fontWeight: 'bold', color: 'red' }}>VARIABLES MAINTENANCE</h2>}
              />
            </Link>
            <Link to="/add-topic" className="border border-blue-700 rounded-md style={myStyle}">
              <Widget
                icon={<MdAddCircle className="h-6 w-6" />}
                title={<h2 style={{ fontWeight: 'bold', color: 'red' }}>ADD TOPIC</h2>}
              />
            </Link>
            <Link to="/add-category" className="border border-blue-700 rounded-md style={myStyle}">
              <Widget
                icon={<MdAddCircle className="h-7 w-7" />}
                title={<h2 style={{ fontWeight: 'bold', color: 'red' }}>ADD CATEGORY</h2>}
              />
            </Link>
          </div>
        </div>

        <div className="mb-12">
          <p className="mb-4 text-xl">Here You create forms for feedback, survey or user vetting which leads to an Action</p>
          <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3">
            <Link to="/add-questionnaire" className="border border-blue-700 rounded-md style={myStyle}">
              <Widget
                icon={<MdAddCircle className="h-7 w-7" />}
                title={<h2 style={{ fontWeight: 'bold', color: 'red' }}>ADD QUESTIONNAIRE</h2>}
              />
            </Link>
            <Link to="/add-question-to-form" className="border border-blue-700 rounded-md style={myStyle}">
              <Widget
                icon={<MdAddCircle className="h-6 w-6" />}
                title={<h2 style={{ fontWeight: 'bold', color: 'red' }}>ADD QUESTIONS TO A FORM</h2>}
              />
            </Link>
            <Link to="/review-questionnaire" className="border border-blue-700 rounded-md style={myStyle}">
              <Widget
                icon={<MdBarChart className="h-7 w-7" />}
                title={<h2 style={{ fontWeight: 'bold', color: 'red' }}>REVIEW QUESTIONNAIRE</h2>}
              />
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xl">Booking Management: Events, Transport, Accommodation et cetera</p>
          <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3">
            <Link to="/add-item-for-booking" className="border border-blue-700 rounded-md style={myStyle}">
              <Widget
                icon={<MdAddCircle className="h-7 w-7" />}
                title={<h2 style={{ fontWeight: 'bold', color: 'red' }}>ADD ITEM FOR BOOKING</h2>}
              />
            </Link>
            <Link to="/create-booking-slots" className="border border-blue-700 rounded-md style={myStyle}">
              <Widget
                icon={<IoCreateOutline className="h-6 w-6" />}
                title={<h2 style={{ fontWeight: 'bold', color: 'red' }}>CREATE BOOKING SLOTS</h2>}
              />
            </Link>
            <Link to="/booking-reports" className="border border-blue-700 rounded-md style={myStyle}">
              <Widget
                icon={<MdBarChart className="h-7 w-7" />}
                title={<h2 style={{ fontWeight: 'bold', color: 'red' }}>BOOKING REPORTS</h2>}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotStudio;
