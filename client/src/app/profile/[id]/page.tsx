"use client";
import { useParams } from "next/navigation";
import React, { ChangeEvent, use, useEffect, useState } from "react";
import { AuthService } from "../../service/AuthService";
import MyModal from "../../components/modal/MyModal";
import axios from "axios";

const ProfileDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({} as any);
  const [visible, setVisible] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const getUser = async () => {
    const response = await AuthService.getUser();
    setUser(response.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("username", newUsername);
    formData.append("password", newPassword);
    if (image) {
      formData.append("userImage", image);
    }

    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/change-profile/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 py-6 max-w-lg w-full">
        <div className="text-center mb-4">
          <img
            src={user.userImage}
            alt="User"
            className="h-24 w-24 mx-auto rounded-full"
          />
          <h2 className="text-xl font-bold mt-4">{user.username}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => setVisible(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Edit Profile
          </button>
        </div>
        <MyModal visible={visible} setVisible={setVisible}>
          <div className="flex flex-col border-2 rounded">
            <input
              className="px-4 py-2"
              type="text"
              placeholder="Новый никнейм"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <hr />
            <input
              className="px-4 py-2"
              type="text"
              placeholder="Новый пароль"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <hr />
            <div className="mx-auto p-6 bg-white rounded-md shadow-md">
              <label
                htmlFor="fileInput"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Image
              </label>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            <button onClick={() => {
                handleSubmit()
                setVisible(false)
            }}>Submit</button>
          </div>
        </MyModal>
      </div>
    </div>
  );
};

export default ProfileDetails;
