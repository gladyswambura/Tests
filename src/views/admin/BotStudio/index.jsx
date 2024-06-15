import React, { useState } from "react";
import { Box, FormControl, FormLabel, Select, Textarea } from "@chakra-ui/react";
import { Checkbox, Stack } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import TabMenu from "./tabs";
import './styles.css'


const BotStudio = () => {

  return (
    <div>
      <div className="mt-4">
        <TabMenu />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mt-4">

        <Grid templateColumns='repeat(2, 1fr)' templateRows='repeat(2, 1fr)' gap={40} className="mx-5 mb-4">

          <GridItem>
            <FormControl flex='1'>
              <FormLabel className="text-lg font-medium mb-1.5">Node Topic</FormLabel>
              <Select placeholder="Select" iconColor="transparent" className="p-2 w-full border border-green-500 rounded-lg bg-white">
                <option>Topic 1</option>
                <option>Topic 2</option>
                <option>Topic 3</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl flex='1'>
              <FormLabel className="text-lg font-medium mb-1.5">Node Category</FormLabel>
              <Select placeholder="Select" iconColor="transparent" className="p-2 w-full border border-green-500 rounded-lg bg-white">
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel className="text-lg font-medium mb-1.5">Node Role</FormLabel>
              <Select placeholder="Select" iconColor="transparent" className="p-2 w-full border border-green-500 rounded-lg bg-white">
                <option>Role 1</option>
                <option>Role 2</option>
                <option>Role 3</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel className="text-lg font-medium mb-1.5">Node Language</FormLabel>
              <Select placeholder="Select" iconColor="transparent" className="p-2 w-full border border-green-500 rounded-lg bg-white">
                <option>Language 1</option>
                <option>Language 2</option>
                <option>Language 3</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel className="text-lg font-medium mb-1.5">Node Keywords</FormLabel>
              <Textarea className="w-full border border-green-500 rounded-lg p-4" />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel className="text-lg font-medium mb-1.5">Node Response</FormLabel>
              <Textarea className="w-full border border-green-500 rounded-lg p-4" />
            </FormControl>
          </GridItem>

          <GridItem>
            <Checkbox colorScheme='green' size='sm' defaultChecked className="custom-checkbox p-1.5 w-1/2 text-lg font-medium rounded-lg bg-green-100">Triggers an Action</Checkbox>
          </GridItem>

          <GridItem>
            <Checkbox colorScheme='green' size='sm' defaultChecked className="custom-checkbox p-1.5 w-1/2 text-lg font-medium rounded-lg bg-green-100">Has More Responses</Checkbox>
          </GridItem>

          <GridItem>
            <Checkbox colorScheme='green' size='sm' defaultChecked className=" custom-checkbox p-1.5 w-1/2 text-lg font-medium rounded-lg bg-green-100">Force Full March</Checkbox>
          </GridItem>

          <GridItem>
            <Checkbox colorScheme='green' size='sm' defaultChecked className="custom-checkbox p-1.5 w-1/2 text-lg font-medium rounded-lg bg-green-100">Has Numbered Choices</Checkbox>
          </GridItem>

        </Grid>

      </div>
    </div>
  );
};

export default BotStudio;
