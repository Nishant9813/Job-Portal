import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import axios from "axios";
import { USER_END_POINT_URL } from "../utils/constant";
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup } from "../ui/radio-group";

const Register = () => {
  const { toast } = useToast();
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    // file: null,
  });

  const eventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    console.log(input);

    try {
      const res = await axios.post(`${USER_END_POINT_URL}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true, 
      });
      console.log("Response:", res.data);
      toast({
        title: "Success",
        description: "Registration successful!",
        status: "success",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Registration failed.",
        status: "error",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-4/5 md:w-1/2 border border-gray-500 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              placeholder="Nishant Ruhil"
              name="fullName"
              value={input.fullName}
              onChange={eventHandler}
              required = {true}
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="@gmail.com"
              name="email"
              value={input.email}
              onChange={eventHandler}
              required = {true}
            />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="Number"
              placeholder="1234567890"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={eventHandler}
              required = {true}
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="Password"
              placeholder="@#$"
              name="password"
              value={input.password}
              onChange={eventHandler}
              required = {true}
            />
          </div>
          <div className="flex items-center justify-between flex-wrap">
            <RadioGroup  className="flex items-center justify-center gap-4 my-2">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={eventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={eventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-5">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                required = {true}
                onChange={changeFileHandler}
                className="cursor-pointer bg-slate-300 dark:bg-slate-600"
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4">
            Signup
          </Button>
          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/Login" className="text-blue-600">
              Login
            </Link>{" "}
          </span>
        </form>
      </div>
    </>
  );
};

export default Register;
