"use client";

import { useState } from "react";
import { Form, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { SelectField } from "../../../components/Fields/SelectField";
import { InputField } from "../../../components/Fields/InputField";
import CustomButton from "../../../components/button/FormButton";

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
          <Form.Item label="Select Grandpa" className="mb-6 w-1/3 ">
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
                <InputField placeholder="Enter ID" />
              </Form.Item>

              <Form.Item label="Name">
                <InputField placeholder="Enter Name" />
              </Form.Item>

              <Form.Item label="Age">
                <InputField placeholder="Enter Age" />
              </Form.Item>

              <Form.Item label="Veteran">
                <SelectField
                  placeholder="Select Yes/No"
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                />
              </Form.Item>

              <CustomButton
                type="submit"
                onClick={() => handleSave(index)}
                className="bg-blue-500"
              >
                Save
              </CustomButton>

              <CustomButton
                type="submit"
                onClick={() => handleSave(index)}
                className="bg-[#1a1f2e]"
              >
                Add Children
              </CustomButton>
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
