import React, { useState} from "react";
import { useForm } from "react-hook-form";
import AxiosInstance from "../../axiosConfig"
import { getItem } from "utils/localStorage";
const AddNodeForm = () => {
  const [activeTab, setActiveTab] = useState("content"); 
  const { register, handleSubmit, formState: { errors } } = useForm(); 

  const onSubmit = async (data) => {
    try {
      const token = getItem("access_token")
      const response = token && await AxiosInstance(token).post("/node-creation");
      console.log(response.data);
      alert("Your node has been saved.");
    } catch (error) {
      console.error("Error saving node: ", error);
      alert("Failed to save node. Please try again later.");
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="add-node-form p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Node</h2>
      <div className="tabs flex justify-around mb-4">
        <button
          className={`tab-btn px-4 py-2 rounded ${activeTab === "content" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => handleTabChange("content")}
        >
          Content
        </button>
        <button
          className={`tab-btn px-4 py-2 rounded ${activeTab === "category" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => handleTabChange("category")}
        >
          Category
        </button>
        <button
          className={`tab-btn px-4 py-2 rounded ${activeTab === "node_language" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => handleTabChange("role")}
        >
          Role
        </button>
        <button
          className={`tab-btn px-4 py-2 rounded ${activeTab === "language" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => handleTabChange("language")}
        >
          Language
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Content Tab */}
        {activeTab === "content" && (
          <div className="tab-content space-y-4">
            <div>
              <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">Keywords To check on Received Message</label>
              <input type="text" id="keywords" {...register("keywords", { required: true })} className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
              {errors.keywords && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div>
              <label htmlFor="response" className="block text-sm font-medium text-gray-700">Response To Sender</label>
              <input type="text" id="response" {...register("response", { required: true })} className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" />
              {errors.response && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
          </div>
        )}

        {/* Category Tab */}
        {activeTab === "category" && (
          <div className="tab-content space-y-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Choose Category</label>
              <select id="category" {...register("category", { required: true })} className="mt-1 block w-full p-2 shadow-sm sm:text-sm border border-gray-300 rounded-md">
                <option value="">Select Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
              </select>
              {errors.category && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
          </div>
        )}

        {/* Role Tab */}
        {activeTab === "role" && (
          <div className="tab-content space-y-4">
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Choose Role</label>
              <select id="role" {...register("role", { required: true })} className="mt-1 block w-full p-2 shadow-sm sm:text-sm border border-gray-300 rounded-md">
                <option value="">Select Role</option>
                <option value="role1">Role 1</option>
                <option value="role2">Role 2</option>
              </select>
              {errors.role && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
          </div>
        )}

        {/* Language Tab */}
        {activeTab === "language" && (
          <div className="tab-content space-y-4">
            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-700">Choose Language</label>
              <select id="language" {...register("language", { required: true })} className="mt-1 block w-full p-2 shadow-sm sm:text-sm border border-gray-300 rounded-md">
                <option value="">Select Language</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
              </select>
              {errors.language && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
          </div>
        )}

        <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Save Node
        </button>
      </form>
    </div>
  );
}

export default AddNodeForm;
