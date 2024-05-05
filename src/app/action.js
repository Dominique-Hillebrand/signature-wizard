"use server";

import { redirect } from "next/navigation";

export default async function sendData(formData) {
  let redirectPath;
  const rawFormData = {
    fullName: formData.get("fullName"),
    pin: formData.get("pin"),
    date: formData.get("date"),
  };
  const data = { fullName: rawFormData.fullName, pin: rawFormData.pin };

  try {
    const response = await fetch("http://localhost:3000/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to send data");
    }

    const responseData = await response.json();

    if (responseData.message === "authenticated") {
      redirectPath = `/Success`;
    } else {
      redirectPath = `/AuthenticationFailed`;
    }
  } catch (error) {
    console.error(error);
    redirectPath = `/`;
  } finally {
    if (redirectPath) redirect(redirectPath);
  }
}
