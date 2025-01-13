import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { loginSchema } from "../../../validations/validations";
import { InputField } from "../../../components/Fields/InputField";
import { login } from "../../../services/auth.service";
import CustomButton from "../../../components/button/FormButton";
import { useAuth } from "../../../context/AuthContext";
import { notification } from "antd";

interface LoginFormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const payload = {
        email: values.email,
        password: values.password,
      };
      const response = await login(payload);
      if (response.status === 200) {
        setToken(response.data.token);
        navigate("/dashboard");
      }
    } catch (error: any) {
      notification.error({
        message: error.response.data.message,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
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
                    className="flex-1 py-3 bg-[#E3EBF7] text-center"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                  <button
                    className="flex-1 py-3 bg-[#f2f6fc] text-center"
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

                  <div className="text-right text-sm text-gray-600 hover:text-gray-800 cursor-pointer">
                    Forgot Password?
                  </div>

                  <CustomButton type="submit" disabled={isSubmitting}>
                    Login
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
