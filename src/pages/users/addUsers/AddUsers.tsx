"use client";

import { useState } from "react";
import { Form, Input, Select, Button, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { SelectField } from "../../../components/Fields/SelectField";
import { InputField } from "../../../components/Fields/InputField";

interface UserForm {
  id: string;
  name: string;
  age: string;
  veteran: string;
}

const initialUserForm: UserForm = {
  id: "",
  name: "",
  age: "",
  veteran: "",
};

export default function AddUsers() {
  const [userForms, setUserForms] = useState<UserForm[]>([initialUserForm]);

  const handleAddForm = () => {
    setUserForms([...userForms, { ...initialUserForm }]);
  };

  const handleSave = (index: number) => {
    console.log("Saving user:", userForms[index]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-6">
        <Form layout="vertical">
          <Form.Item label="Select Grandpa" className="mb-6">
            <SelectField
              placeholder="Select Grandpa"
              options={[
                { value: "grandpa1", label: "Grandpa 1" },
                { value: "grandpa2", label: "Grandpa 2" },
              ]}
            />
          </Form.Item>

          {userForms.map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
            >
              <Form.Item label="ID">
                <InputField 
                placeholder="Enter ID"/>
              </Form.Item>

              <Form.Item label="Name">
                <Input
                  placeholder="Enter Name"
                  value={userForms[index].name}
                  onChange={(e) => {
                    const newForms = [...userForms];
                    newForms[index].name = e.target.value;
                    setUserForms(newForms);
                  }}
                />
              </Form.Item>

              <Form.Item label="Age">
                <Input
                  placeholder="Enter Age"
                  value={userForms[index].age}
                  onChange={(e) => {
                    const newForms = [...userForms];
                    newForms[index].age = e.target.value;
                    setUserForms(newForms);
                  }}
                />
              </Form.Item>

              <Form.Item label="Veteran">
                <Input
                  placeholder="Enter Yes/No"
                  value={userForms[index].veteran}
                  onChange={(e) => {
                    const newForms = [...userForms];
                    newForms[index].veteran = e.target.value;
                    setUserForms(newForms);
                  }}
                />
              </Form.Item>

              <Space>
                <Button
                  type="primary"
                  onClick={() => handleSave(index)}
                  className="bg-blue-500"
                >
                  Save
                </Button>
                <Button type="primary" className="bg-[#1a1f2e]">
                  Add Children
                </Button>
              </Space>
            </div>
          ))}

          <Button
            type="dashed"
            onClick={handleAddForm}
            icon={<PlusOutlined />}
            className="w-full"
          >
            Add Another User
          </Button>
        </Form>
      </div>
    </div>
  );
}
