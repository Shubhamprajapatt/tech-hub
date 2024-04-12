import React, { useState } from "react";
import { Checkbox, Form, Input } from "antd";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("asdasd");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onFinish = async (values) => {
    console.log("Success:", values.username, values.password);
    //api calling
    axios
      .post("http://localhost:8080/login", {
        email: values.username,
        password: values.password,
      })
      .then((res) => {
        console.log("backend response", res);
        if (res.data.status == 1) {
          // alert(`${res.data.message}`);
          setSuccessMessage(`${res.data.message}`);
          setErrorMessage("");
          localStorage.setItem("email", values.username);
          setTimeout(() => {
            navigate("/subjects");
          }, 2000);
        } else {
          // alert(`${res.data.message}`);
          setErrorMessage(`${res.data.message}`);
        }
      })
      .catch((err) => {
        console.log("backend error", err);
        alert(`${err.message}`);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handlePassword = (e) => {
    console.log("value:", e.target.value);
  };
  return (
    <>
      <div className="content">
        <center>
          <div>
            <h1 className="mb-4">Login</h1>
            <h2 className="text-green-500 text-xl m-5">{successMessage}</h2>
            <h2 className="text-red-500 text-xl m-5">{errorMessage}</h2>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter username"
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input
                  placeholder="enter password"
                  value={password}
                  name="password"
                  onChange={(e) => handlePassword(e)}
                />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <div>
                  <span>
                    Don't have an Account ?<Link to="/register"> Register</Link>
                  </span>
                </div>

                <Button type="primary" htmlType="submit" name="Submit" />
              </Form.Item>
            </Form>
          </div>
        </center>
      </div>
    </>
  );
}
