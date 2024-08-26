"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

type Props = {};

type FormData = {
  email: string;
  message: string;
};

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    console.log(data);

    try {
      axios.post("/api/contect", data).then((response) => {
        if (response.status === 200) {
          toast.success("Message sent successfully!");
        } else {
          toast.error(response.data.error);
        }
      });
    } catch (error: any) {
      setStatusMessage(`Error: ${error.response?.data.error || error.message}`);
    }
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-900">
      <div className="py-5 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="name@gmail.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                errors.message ? "border-red-500" : ""
              }`}
              placeholder="Leave a comment..."
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-500 sm:w-fit hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
          {statusMessage && (
            <p className="text-center text-green-500 mt-4">{statusMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
