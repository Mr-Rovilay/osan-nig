/* eslint-disable react/display-name */
"use client"

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuthRedirect = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (user) {
        router.replace("/"); // Redirect to home or another page if logged in
      }
    }, [user, router]);

    if (user) {
      return null; // While redirecting, don't render anything
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthRedirect;
