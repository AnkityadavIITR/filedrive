"use client";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
} from "../ui/dialog";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function UploadBtn() {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      title: "",
      file: null,
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(2, "Minimum 2 characters for title")
        .max(100)
        .required(),
      file: Yup.mixed().required("File is required"),
    }),
  });

  const handleFileChange = (event) => {
    formik.setFieldValue("file", event.currentTarget.files[0]);
  };

  function onSubmit(e) {
    setLoading(true);
    e.preventDefault();
    console.log(formik.values);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="">Upload</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload your file here</DialogTitle>
          <DialogDescription className="mt-3">
            <form onSubmit={onSubmit}>
              <label className="block mb-1" for="name">
                File title
              </label>
              <input
                type="name"
                placeholder="name"
                my="2"
                name="title"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="py-2 px-3 rounded-xl mt-2 border-black border-2 text-gray-600 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50 shadow-sm disabled:bg-gray-100 block w-full placeholder:font-light"
              />
              <div className="text-red-500 text-xs italic mt-2">
                {formik.touched.title && formik.errors.title ? (
                  <div className="text-red-700">{formik.errors.title}</div>
                ) : null}
              </div>
              <label className="block mb-1" for="file">
                Upload file
              </label>
              <input
                type="file"
                placeholder="Upload File"
                my="2"
                name="file"
                value={formik.values.file}
                onChange={handleFileChange}
                // onChange={(event) => {
                //   formik.setFieldValue("file", event.target.files[0]);
                // }}
                className="h-[30px] rounded-xl mt-2 border-black border-2 text-gray-600 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50 shadow-sm disabled:bg-gray-100 block w-full placeholder:font-light"
              />
              <div className="text-red-500 text-xs italic mt-2">
                {formik.touched.file && formik.errors.file ? (
                  <div className="text-red-700">{formik.errors.file}</div>
                ) : null}
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className={
                    loading == false
                      ? "w-[150px] mt-5 bg-black py-2 text-white font-extrabold text-lg rounded-2xl desktop-arrow arrow text-center"
                      : "w-[150px] mt-5 bg-black py-2 text-white font-extrabold text-lg rounded-2xl desktop-arrow text-center"
                  }
                  disabled={loading}
                  onClick={onSubmit}
                >
                  {loading ? "loading..." : "Submit"}
                </button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
export default UploadBtn;
