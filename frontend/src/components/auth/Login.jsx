import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const eventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async(e) => {
e.preventDefault();
console.log(input)
  };
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-4/5 md:w-1/2 border border-gray-500 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 ">Login</h1>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="@gmail.com" name="email" value={input.email} onChange={eventHandler}/>
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="Password" placeholder="@#$" name="password" value={input.password} onChange={eventHandler}/>
          </div>
          <div className=" flex items-center justify-between">
            <RadioGroup className="flex items-center justify-center gap-4 my-2">
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
          </div>
          <Button type="submit" className="w-full my-4">Login</Button>
          <span className="text-sm">Don't have an account? <Link to="/register" className="text-blue-600">Signup</Link> </span>
        </form>
      </div>
    </>
  )
}

export default Login