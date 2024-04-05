import React from "react";
import { Checkbox, Form, Input } from "antd";
import Button from "../components/Button";
import Link from "antd/es/typography/Link";
import {useNavigate} from "react-router-dom";

export default function Login() {
  const navigate=useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleRegister=()=>{
    navigate("/register");
  }
  return (
    <>
    <div className="content">
      <div>
      <h1>Login</h1>
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
          <Input />
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
          <Input />
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
      <span>Don't have an Account</span><p className="text-white text-xl cursor-pointer" onClick={handleRegister}>Register</p>
      </div>

          <Button type="primary" htmlType="submit" name="Submit"/>

        </Form.Item>

      </Form>
      </div>
    </div>
    </>
  );
}
