import React from "react";

const AuthBanner = () => {
  return (
    <div className="p-3 max-w-[420px] bg-primary text-white lg:flex sm:hidden flex-col gap-2 justify-center">
      <span className="typography-h4">
        Managed web data extraction.At scale.
      </span>
      <p className="typography-h5">
        The one-stop platform for all your data sourcing needs. No complicated
        software to use, no tools to configure!
      </p>
    </div>
  );
};

export default AuthBanner;
