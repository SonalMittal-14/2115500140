import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate("/account/login");
  };

  const [registerPayload, setRegisterPayload] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [file, setFile] = useState(null);

  const updatePayload = (event) => {
    const { name, value } = event.target;
    setRegisterPayload((prevPayload) => ({
      ...prevPayload,
      [name]: value,
    }));
  };

  const loadFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", registerPayload.name);
    formData.append("email", registerPayload.email);
    formData.append("password", registerPayload.password);
    if (file) {
      formData.append("image", file);
    }

    try {
      const response = await axios.post("/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert(response.data.message);
        navigate("/account/login");
      }
    } catch (error) {
      console.log("THERE IS AN ERROR WHILE REGISTERING THE USER", error);
    }
  };

  return (
    <form
      method="post"
      className="md:col-span-2 w-full py-6 px-6 sm:px-16"
      onSubmit={submitForm}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold">Create an account</h3>
      </div>

      <div className="flex items-center space-x-6 pb-8">
        <div className="shrink-0">
          <img
            id="preview_img"
            className="h-16 w-16 object-cover rounded-full"
            src={file ? URL.createObjectURL(file) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4V2hNksnmAV1Keq-R04Jsk-hf4s1_eIz4QAz4jdsc7w&s"}
            alt="Current Profile"
          />
        </div>
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            onChange={loadFile}
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          />
        </label>
      </div>

      <div className="space-y-5">
        <div>
          <label className="text-sm mb-2 block">Name</label>
          <div className="relative flex items-center">
            <input
              name="name"
              type="text"
              required
              className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
              placeholder="Enter name"
              value={registerPayload.name}
              onChange={updatePayload}
            />
          </div>
        </div>
        <div>
          <label className="text-sm mb-2 block">Email Id</label>
          <div className="relative flex items-center">
            <input
              name="email"
              type="email"
              required
              className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
              placeholder="Enter email"
              value={registerPayload.email}
              onChange={updatePayload}
            />
          </div>
        </div>
        <div>
          <label className="text-sm mb-2 block">Password</label>
          <div className="relative flex items-center">
            <input
              name="password"
              type="password"
              required
              className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
              placeholder="Enter password"
              value={registerPayload.password}
              onChange={updatePayload}
            />
          </div>
        </div>
      </div>
      <div className="!mt-10">
        <button
          className="w-full py-3 px-4 text-sm font-semibold rounded bg-green-300 hover:bg-green-200 text-white focus:outline-none cursor-pointer"
        >
          Create an account
        </button>
      </div>
      <p className="text-sm mt-6 text-center">
        Already have an account?
        <span
          onClick={goLogin}
          className="text-green-500 font-semibold hover:underline ml-1 cursor-pointer"
        >
          Login here
        </span>
      </p>
    </form>
  );
};

export default RegistrationPage;