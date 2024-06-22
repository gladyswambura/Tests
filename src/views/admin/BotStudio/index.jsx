import React from "react";
import {  FormControl, FormLabel, Select, Textarea } from "@chakra-ui/react";
import { Checkbox} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import TabMenu from "./tabs";
import './styles.css'
import { Outlet } from "react-router-dom";


const BotStudio = () => {

  return (
    <div>
      <div className="mt-4">
        <TabMenu />
      </div>

      <div className="mt-4 rounded-lg bg-white p-6 shadow-md">
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(2, 1fr)"
          gap={40}
          className="mx-5 mb-4"
        >
          <GridItem>
            <FormControl flex="1">
              <FormLabel className="mb-1.5 text-lg font-medium">
                Node Topic
              </FormLabel>
              <Select
                placeholder="Select"
                iconColor="transparent"
                className="w-full rounded-lg border border-green-500 bg-white p-2"
              >
                <option>Topic 1</option>
                <option>Topic 2</option>
                <option>Topic 3</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl flex="1">
              <FormLabel className="mb-1.5 text-lg font-medium">
                Node Category
              </FormLabel>
              <Select
                placeholder="Select"
                iconColor="transparent"
                className="w-full rounded-lg border border-green-500 bg-white p-2"
              >
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel className="mb-1.5 text-lg font-medium">
                Node Role
              </FormLabel>
              <Select
                placeholder="Select"
                iconColor="transparent"
                className="w-full rounded-lg border border-green-500 bg-white p-2"
              >
                <option>Role 1</option>
                <option>Role 2</option>
                <option>Role 3</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel className="mb-1.5 text-lg font-medium">
                Node Language
              </FormLabel>
              <Select
                placeholder="Select"
                iconColor="transparent"
                className="w-full rounded-lg border border-green-500 bg-white p-2"
              >
                <option>Language 1</option>
                <option>Language 2</option>
                <option>Language 3</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel className="mb-1.5 text-lg font-medium">
                Node Keywords
              </FormLabel>
              <Textarea className="w-full rounded-lg border border-green-500 p-4" />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel className="mb-1.5 text-lg font-medium">
                Node Response
              </FormLabel>
              <Textarea className="w-full rounded-lg border border-green-500 p-4" />
            </FormControl>
          </GridItem>

          <GridItem>
            <Checkbox
              colorScheme="green"
              size="sm"
              defaultChecked
              className="custom-checkbox w-1/2 rounded-lg bg-green-100 p-1.5 text-lg font-medium"
            >
              Triggers an Action
            </Checkbox>
          </GridItem>

          <GridItem>
            <Checkbox
              colorScheme="green"
              size="sm"
              defaultChecked
              className="custom-checkbox w-1/2 rounded-lg bg-green-100 p-1.5 text-lg font-medium"
            >
              Has More Responses
            </Checkbox>
          </GridItem>

          <GridItem>
            <Checkbox
              colorScheme="green"
              size="sm"
              defaultChecked
              className=" custom-checkbox w-1/2 rounded-lg bg-green-100 p-1.5 text-lg font-medium"
            >
              Force Full March
            </Checkbox>
          </GridItem>

          <GridItem>
            <Checkbox
              colorScheme="green"
              size="sm"
              defaultChecked
              className="custom-checkbox w-1/2 rounded-lg bg-green-100 p-1.5 text-lg font-medium"
            >
              Has Numbered Choices
            </Checkbox>
          </GridItem>
        </Grid>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default BotStudio;
