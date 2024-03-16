"use client";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { EyeOff, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

const Form = ({onSubmit, loading, setLoading}) => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
    }),
  });

  const handleSignIn =() => {
    setLoading(true);
    onSubmit(formik.values.email, formik.values.password);
  };

  return (
    <form onSubmit={handleSignIn} className="w-full">
      <div className="mb-4 text-[#585858] font-semibold mt-10 lg:mt-4">
        <label className="block mb-1" for="email">
          Email-Address
        </label>
        <input
          type="email"
          placeholder="Email"
          my="2"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="py-2 px-3 rounded-xl mt-2 border-black border-2 text-gray-600 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50 shadow-sm disabled:bg-gray-100 block w-full placeholder:font-light"
        />
        <div className="text-red-500 text-xs italic mt-2">
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-700">{formik.errors.email}</div>
          ) : null}
        </div>
        <label className="block mb-1 mt-5 lg:mt-2" for="email">
          Password
        </label>
        <div className="flex relative">
          <input
            id="email"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formik.values.password}
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="py-2 px-3 rounded-xl mt-2 border-black border-2 text-gray-600 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50 shadow-sm disabled:bg-gray-100 block w-full placeholder:font-light"
          />
          {!showPassword ? (
            <EyeOff
              size={24}
              strokeWidth={1.25}
              className="absolute right-2 top-[16px]"
              onClick={() => {
                if (formik.values.password) setShowPassword(true);
              }}
            />
          ) : (
            <Eye
              size={24}
              strokeWidth={1.25}
              className="absolute right-2 top-[16px]"
              onClick={() => setShowPassword(false)}
            />
          )}
        </div>
        <div className="text-red-500 text-xs italic mt-2">
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-700">{formik.errors.password}</div>
          ) : null}
        </div>

        <button
          type="submit"
          className={
            loading == false
              ? "w-full mt-5 bg-black py-2 text-white font-extrabold text-lg rounded-2xl desktop-arrow arrow text-center"
              : "w-full mt-5 bg-black py-2 text-white font-extrabold text-lg rounded-2xl desktop-arrow text-center"
          }
          disabled={loading}
          onClick={handleSignIn}
        >
          {loading ? (
            "loading.."
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default Form;
