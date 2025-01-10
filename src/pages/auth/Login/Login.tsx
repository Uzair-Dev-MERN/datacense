import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup"; // Optional: For validation

interface LoginFormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values: LoginFormValues) => {
    console.log(values);
    navigate("/dashboard");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ touched, errors, values, handleBlur, handleChange }) => {
        return (
          <div className="min-h-screen bg-primary">
            <div className="text-white text-lg font-bold pl-10 pt-5">
              Datacense
            </div>
            <div className="flex flex-col items-center pt-16 px-4">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                <div className="flex mb-8 gap-5 ">
                  <button
                    className={`flex-1 py-3 bg-[#E3EBF7] text-center
                    `}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                  <button
                    className={`flex-1 py-3 bg-[#f2f6fc] text-center
                    `}
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </button>
                </div>

                <h1 className="text-2xl font-semibold text-center mb-6">
                  Login
                </h1>

                <Form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {touched.email && errors.email && (
                      <div className="text-red-500 text-sm">{errors.email}</div>
                    )}
                  </div>

                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {touched.password && errors.password && (
                      <div className="text-red-500 text-sm">
                        {errors.password}
                      </div>
                    )}
                  </div>

                  <div className="text-right text-sm text-gray-600 hover:text-gray-800 cursor-pointer">
                    Forgot Password?
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1a1f2e] text-white py-2 rounded-md hover:bg-[#2a2f3e] transition-colors"
                  >
                    Login
                  </button>
                </Form>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
