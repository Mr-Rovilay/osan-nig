"use client";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Button from "@/components/Button";
import { db } from "@/lib/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function ProfileForm({ className }: React.ComponentProps<"form">) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Validation checks
    if (!fullName) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }
    if (!message) {
      setErrorMessage("Please write a short message.");
      return;
    }
    if (!contactNumber.match(/^\d{11}$/)) {
      setErrorMessage("Please enter a valid contact number with 11 digits.");
      return;
    }
    if (!email.match(isValidEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (message.length > 200) {
      setErrorMessage("Message can't be more than 200 characters.");
      return;
    }

    setLoading(true);

    try {
      // Add data to Firestore
      await addDoc(collection(db, "contact-form"), {
        fullName,
        email,
        contactNumber,
        message,
        time: serverTimestamp(),
      });

      // Show success message and clear form fields
      setLoading(false);
      setSuccessMessage("Thank you for getting in touch! We'll contact you soon.");
      setFullName("");
      setEmail("");
      setContactNumber("");
      setMessage("");

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <form className={cn("grid items-start gap-4", className)} onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Your full name"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="youremail@example.com"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="number">Contact Number</Label>
        <Input
          type="text"
          id="number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          placeholder="Mobile number"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here."
          rows={4}
        />
      </div>

      <Button
        type="submit"
        text={"Submit"}
        variant="secondary"
        className="flex items-center justify-center"
        loading={loading}
      />

      {successMessage && (
        <p className="mt-1 text-green-500 text-sm">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="mt-1 text-red-500 text-sm">{errorMessage}</p>
      )}
    </form>
  );
}

export default ProfileForm;
