"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../lib/authContext";

export default function LogoutPage() {
  const router = useRouter();
  const { signOut } = useAuth();

  useEffect(() => {
    signOut();
    router.push("/sign-in");
  }, []);

  return <p>Logging out...</p>;
}
