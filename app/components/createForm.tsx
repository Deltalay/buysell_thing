"use client";
import { useFormState } from "react-dom";
import { CreateAccount } from "../actions";
export default function CreateForm() {
  const initialState = {
    email_message: "",
    pass_message: "",
    con_pass_message: "",
    match_message: "",
    username_message: "",
  };
  const [formState, formAction] = useFormState(CreateAccount, initialState);
  return (
    <form
      action={formAction}
      className="bg-white p-4 glow rounded-md w-11/12 sm:w-10/12 md:w-8/12 lg:w-1/2 xl:w-1/3  shadown-lg ring ring-inset text-black"
    >
      <div>
        <h2 className="font-bold font-serif md:text-4xl text-2xl py-2">
          Create Account
        </h2>
      </div>
      <div className="mt-2">
        <label className="font-semibold" htmlFor="email">
          Email:
        </label>
        <input
          className={`block border outline-none rounded-md p-2 ${
            formState.email_message == "" ? "border-black" : "border-red-500 "
          } w-full`}
          placeholder="Your Email"
          name="email"
          id="email"
          type="text"
        />
        {formState.email_message == "" ? null : (
          <p className="text-red-500 text-sm font-bold">
            {formState.email_message}
          </p>
        )}
      </div>
      <div className="mt-2">
        <label className="font-semibold" htmlFor="username">
          Username:
        </label>
        <input
          className={`block border outline-none rounded-md p-2 ${
            formState.username_message == ""
              ? "border-black"
              : "border-red-500 "
          } w-full`}
          placeholder="Your Email"
          name="username"
          id="username"
          type="text"
        />
      </div>
      <div className="mt-5">
        <label className="font-semibold" htmlFor="password">
          Password:
        </label>
        <input
          className={`block border outline-none rounded-md p-2 ${
            formState.pass_message == "" || formState.match_message == ""
              ? "border-black"
              : "border-red-500 "
          } w-full`}
          name="password"
          id="password"
          placeholder="Your Password"
          type="password"
        />
        {formState.pass_message == "" ? null : (
          <p className="text-red-500 text-sm font-bold">
            {formState.pass_message}
          </p>
        )}
        {formState.match_message == "" ? null : (
          <p className="text-red-500 text-sm font-bold">
            {formState.match_message}
          </p>
        )}
      </div>
      <div className="mt-5">
        <label className="font-semibold" htmlFor="passwordCon">
          Password Confrimation:
        </label>
        <input
          className={`block border outline-none rounded-md p-2 ${
            formState.con_pass_message == "" || formState.match_message == ""
              ? "border-black"
              : "border-red-500 "
          } w-full`}
          name="passwordCon"
          id="passwordCon"
          placeholder="Your Password"
          type="password"
        />
        {formState.con_pass_message == "" ? null : (
          <p className="text-red-500 text-sm font-bold">
            {formState.con_pass_message}
          </p>
        )}
        {formState.match_message == "" ? null : (
          <p className="text-red-500 text-sm font-bold">
            {formState.match_message}
          </p>
        )}
      </div>

      <div className="mt-4">
        <button className="font-bold w-full text-lg text-black bg-white border border-black p-2 hover:text-white hover:bg-black transition-all duration-150 ease-in">
          Create Account
        </button>
      </div>
    </form>
  );
}
