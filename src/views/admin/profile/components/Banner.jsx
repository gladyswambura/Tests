import React, { useState, useEffect } from "react";
import avatar from "assets/img/avatars/avatar1.png.jpg";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";
import { TiEdit } from "react-icons/ti";
import { Button } from "@chakra-ui/react";
import EditProfile from "./editProfile";
import ProfileData from "./profileData";


const Banner = () => {

  const [modalOpen, setModalOpen] = useState(false)
  const [profileForm, setProfileForm] = useState(ProfileData)
  const [currentProfile, setCurrentProfile] = useState({});

// fetch changes from local storage
  useEffect(() => {
    const storedProfiles = localStorage.getItem('profiles');
    if (storedProfiles) {
      setProfileForm(JSON.parse(storedProfiles))
    } else {
      setProfileForm(ProfileData)
    }
  })

  const handleOpenEditModal = (profile) => {
    setCurrentProfile(profile)
    setModalOpen(true)
    console.log('profile passed to function:', profile);
  }

  const handleCloseEditModal = () => { setModalOpen(false) }

  const handleSave = (updatedProfile) => {
    const updatedProfiles = profileForm.map((profile) =>
      profile.id === updatedProfile.id ? updatedProfile : profile
    );
    setProfileForm(updatedProfiles);
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles))
    setModalOpen(false);
  };

  return (
    <Card extra={"items-start w-full h-full p-[20px] bg-cover"}>
      {/* Edit Modal */}
      <EditProfile
        isOpen={modalOpen}
        onClose={handleCloseEditModal}
        currentProfile={currentProfile}
        onSave={handleSave} />

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

      {profileForm.map((profile, i) => (
        //  Name. email and position 
        <div className="mt-14" key={i}>

          <div className=" flex flex-col items-center text-navy-700 dark:text-white">
            {/* {{NAME OF THE SIGN INNED PERSON}}  */}
            <p className="text-xl font-semibold">{profile.fullname}</p>
            <p className="text-lg font-medium">{profile.email}</p>
            <p className="text-lg font-medium">{profile.role} at {profile.company}</p>
          </div>
          <div>
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

            <p className="text-base mx-2">{profile.about}</p>

          </div>
          <div className="flex justify-center items-center">
            {/* EDIT pROFILE BUTTON --SHOULD BRING A POP UP EDIT FORM THAT CAN BE CLOSED*/}
            <Button onClick={() => handleOpenEditModal(profile)} className="bg-blue-50 backdrop-blur py-1.5 px-5 mt-2 text-lg rounded-lg hover:bg-blue-200"> Edit Profile </Button>
          </div>

        </div>

      ))}
    </Card>
  );
};

export default Banner;
