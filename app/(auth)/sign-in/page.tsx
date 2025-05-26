"use client";

import { signIn } from "@/auth";
import Authform from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";
import React from "react";

const SignIn = () => {
  return (
    <Authform
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data: any) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignIn;
