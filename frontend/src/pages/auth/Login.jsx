import React, { useState } from "react";
import Navbar from "../../components/shared/Navbar";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { RadioGroup } from "../../components/ui/radio-group";
import { Button } from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { USER_END_POINT_URL } from "../../components/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/components/store/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const { toast } = useToast();
  const { loading, user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const eventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_END_POINT_URL}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      toast({
        title: "Success",
        description: "Login successful!",
        status: "success",
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast({
          title: "Success",
          description: res.data.message,
          status: "success",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Login failed.",
        status: "error",
      });
    }
    finally{
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto pt-24">
        <form
          onSubmit={submitHandler}
          className="w-4/5 md:w-1/2 border border-gray-500 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="@gmail.com"
              name="email"
              value={input.email}
              onChange={eventHandler}
              required={true}
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="@#$"
              name="password"
              value={input.password}
              onChange={eventHandler}
              required={true}
            />
          </div>
          <div className="flex items-center justify-between">
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
                <Label>Student</Label>
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
                <Label>Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {loading ? (
            <Button className="w-full my-4">
              {" "}
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Login
            </Button>
          )}
          <span className="text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;
