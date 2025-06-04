import React from "react";

function FormInput({ label, name, type, defaultValue, size }) {
  return (
    <>
      <div className="form-control">
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          <span className="label-text capitalize">{label}</span>
        </label>
        <input
          type={type}
          name={name}
          defaultValue={defaultValue}
          className={`input input-bordered bg-gray-100 dark:text-black ${size}`}
        />
      </div>
    </>
  );
}

export default FormInput;
