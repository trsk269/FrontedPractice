"use client";
import React, { useState } from "react";
import axios from "axios";

export default function AddAPost() {
  const [formData, setFormData] = useState({
    name: "",
    village: "",
    mobileNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("backendpractice-production-cf37.up.railway.app/api/posts/add", formData);
      
      if (res.status === 201) {
        alert("Form submitted successfully!");
        setFormData({ name: "", village: "", mobileNumber: "" }); // reset form
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="village"
          className="block text-gray-700 font-semibold mb-1"
        >
          Village:
        </label>
        <input
          type="text"
          id="village"
          name="village"
          value={formData.village}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your village"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="mobileNumber"
          className="block text-gray-700 font-semibold mb-1"
        >
          Mobile Number:
        </label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          pattern="[0-9]{10}"
          placeholder="10-digit number"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
