"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { signupSchema } from "../../../validations/validations";
import { InputField } from "../../../components/Fields/InputField";
import CustomButton from "../../../components/button/FormButton";
import { register } from "../../../services/auth.service";
import { notification } from "antd";

interface SignupFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignupForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const handleSubmit = async (values: SignupFormValues) => {
    try {
      const payload = {
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };
      await register(payload);
      navigate("/login");
    } catch (error: any) {
      notification.error({
        message: error.response.data.message,
      });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      {({
        touched,
        errors,
        values,
        handleBlur,
        handleChange,
        isSubmitting,
      }) => {
        return (
          <div className="min-h-screen bg-primary">
            <div className="text-white text-lg font-bold pl-10 pt-5">
              Datacense
            </div>
            <div className="flex flex-col items-center pt-16 px-4">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                <div className="flex mb-8 gap-5">
                  <button
                    className={`flex-1 py-3 hover:bg-[#f2f6fc] text-center`}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                  <button
                    className={`flex-1 py-3 bg-[#E3EBF7] text-center`}
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </button>
                </div>

                <h1 className="text-2xl font-semibold text-center mb-6">
                  Register
                </h1>

                <Form className="space-y-4">
                  <div>
                    <InputField
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.email}
                      touched={touched.email}
                    />
                  </div>

                  <div>
                    <InputField
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.password}
                      touched={touched.password}
                    />
                  </div>

                  <div>
                    <InputField
                      type="password"
                      name="confirmPassword"
                      placeholder="Repeat Password"
                      value={values.confirmPassword}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.confirmPassword}
                      touched={touched.confirmPassword}
                    />
                  </div>

                  <CustomButton type="submit" disabled={isSubmitting}>
                    Register
                  </CustomButton>
                </Form>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
