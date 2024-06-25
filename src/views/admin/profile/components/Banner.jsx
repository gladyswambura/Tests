import React, { useState } from "react";
import avatar from "assets/img/avatars/avatar1.png.jpg";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";
import { TiEdit } from "react-icons/ti";
import { Button } from "@chakra-ui/react";
import EditProfile from "./editProfile";




const Banner = () => {

  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenEditModal = () => { setModalOpen(true) }
  const handleCloseEditModal = () => { setModalOpen(false) }

  return (
    <Card extra={"items-start w-full h-full p-[20px] bg-cover"}>

      {/* <EditProfile isOpen={modalOpen} onClose={handleCloseEditModal}/> */}

      {/* Background and profile---IMAGE url OF THE SIGNED IN PERSON ---CALL FROM THE API*/}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover" style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src={avatar} alt="" />
          <div className="absolute bottom-0 right-1 p-1.5 bg-green-400 rounded-full cursor-pointer">
            {/* Edit icon for editing profile photo */}
            <TiEdit className="" />
          </div>
        </div>

      </div>

      {/* Name and position */}
      <div className="mt-14">
        <div className=" flex flex-col items-center text-navy-700 dark:text-white">
          {/* {{NAME OF THE SIGN INNED PERSON}} */}
          <p className="text-xl font-semibold">Jane Doe</p>
          <p className="text-lg font-medium">janedoe@example.com</p>
          <p className="text-lg font-medium">Project Manager at Vassbot</p>
        </div>
        <div>
          {/* <p className="text-base font-normal text-gray-600">ROLE OF THE SIGNED IN PERSON</p> */}
          {/* <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            General Information
          </h4> */}

          {/* <p className="mt-2 text-base ">
            I am a project manager */}
            {/* {description pulled from the backend} */}
          {/* </p> */}
        </div>


        <div className="rounded-xl border bg-blue-50/40 backdrop-blur my-2 p-1">
          <p className="text-lg font-bold mx-2">
            {/* About the person pulled from backend */}
            About
          </p>

          <p className="text-base mx-2">
            Sit nulla est ex deserunt exercitation anim occaecat.
            Nostrud ullamco deserunt aute id consequat veniam
            incididunt duis in sint irure nisi. Mollit officia
            cillum Lorem ullamco minim nostrud elit officia tempor esse quis.
          </p>

        </div>


        <EditProfile isOpen={modalOpen} onClose={handleCloseEditModal} />

      </div>

      <div className="flex justify-center items-center">
        <Button onClick={handleOpenEditModal} className="bg-blue-50 py-1.5 px-5 mt-2 text-lg rounded-lg hover:bg-blue-200"> Edit Profile </Button>
      </div>




      {/* EDIT pROFILE BUTTON --SHOULD BRING A POP UP EDIT FORM THAT CAN BE CLOSED*/}
    </Card>
  );
};

export default Banner;
