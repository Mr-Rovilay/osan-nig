"use client"
import { useState } from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, setPersistence, browserLocalPersistence, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, signInWithGoogle } from "@/lib/firebaseConfig";
import { HiOutlineMail } from "react-icons/hi";
import { MdLock } from "react-icons/md";
import { BsLink } from "react-icons/bs";
import Button from "@/components/Button";
import AnimationWrapper from "@/common/AnimationWrapper";
import styles from './styles/signup.module.css';
import Image from 'next/image';
import { FaSpinner } from 'react-icons/fa';
import withAuthRedirect from '@/components/HOC/redirect';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState(""); 
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFullNameError("");
  setEmailError("");
  setPasswordError("");
  if (!fullName) {
    setFullNameError("Can't be empty");
    return;
  }

  if (!email) {
    setEmailError("Can't be empty");
    return;
  }

  if (!password) {
    setPasswordError("Cant be empty");
    return;
  }

  setLoading(true);
  // ...
  try {
    await setPersistence(auth, browserLocalPersistence);
    await createUserWithEmailAndPassword(auth, email, password);
    sessionStorage.setItem("user", JSON.stringify(true));
    setFullName("");  
    setEmail("");
    setPassword("");
    router.push("/");
  } catch (error: any) {
    console.error("Error during sign-up:", error);
    setError(error.message || "Invalid email or password");
  } finally {
    setLoading(false);
  }
};

  const handleGoogleSignIn = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (error: any) {
      console.error("Error during Google sign-in:", error);
      setError(error.message || "Google sign-in failed");
    }
  };

  return (
    <AnimationWrapper keyValue="loginPage">
      <div className="flex py-9 items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Signup</h1>
          <p className="mb-8 text-gray-400 font-light">
            Add your details below to get back into the app
          </p>
          <form onSubmit={handleSubmit}>

          <div className="mb-4 relative">
              <label className={`block text-xs font-bold mb-2 ${fullNameError ? styles.errorLabel : 'text-gray-400'}`} htmlFor="fullName">
              Full Name
              </label>
              <div className="relative">
                <HiOutlineMail className="absolute inset-y-0 left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  placeholder="John Doe"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full bg-white py-3 pl-12 pr-3 rounded-lg text-gray-700 text-base leading-tight ${styles.inputField} ${fullNameError ? styles.errorField : ''}`}
                />
                {fullNameError && <span className={`${styles.errorText} absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 italic text-xs`}>{fullNameError}</span>}
              </div>
            </div>

            <div className="mb-4 relative">
              <label className={`block text-xs font-bold mb-2 ${emailError ? styles.errorLabel : 'text-gray-400'}`} htmlFor="email">
                Email address
              </label>
              <div className="relative">
                <HiOutlineMail className="absolute inset-y-0 left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="email"
                  placeholder="eg. abc@example.com"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-white py-3 pl-12 pr-3 rounded-lg text-gray-700 text-base leading-tight ${styles.inputField} ${emailError ? styles.errorField : ''}`}
                />
                {emailError && <span className={`${styles.errorText} absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 italic text-xs`}>{emailError}</span>}
              </div>
            </div>
            <div className="mb-4 relative">
              <label className={`block text-xs font-bold mb-2 ${passwordError ? styles.errorLabel : 'text-gray-400'}`} htmlFor="password">
                Password
              </label>
              <div className="relative">
                <MdLock className="absolute inset-y-0 left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full py-3 pl-12 pr-3 rounded-lg text-gray-700 text-base leading-tight ${styles.inputField} ${passwordError ? styles.errorField : ''}`}
                />
                {passwordError && <span className={`${styles.errorText} absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 italic text-xs`}>{passwordError}</span>}
              </div>
            </div>
            {error && <p className="text-red-500 text-x italic">{error}</p>}
            <div className="flex items-center justify-between pt-4">
              <Button text="Sign up" variant="secondary" type="submit" loading={loading} className='w-full items-center justify-center'/>
            </div>
          </form>
          <div className="relative w-full flex items-center gap-2 my-4 uppercase text-black font-bold">
            <hr className="w-1/2 border-black" />
            <p>or</p>
            <hr className="w-1/2 border-black" />
          </div>
          <button
            className="flex items-center justify-center gap-4 w-[100%] center bg-black text-white py-2 rounded-xl"
            onClick={handleGoogleSignIn}
            disabled={googleLoading}
          >
            {googleLoading ? (
              <FaSpinner className="animate-spin h-5 w-5 text-white inline-block" />
            ) : (
              <>
                <Image width={20} height={20} src="/google.png" alt="" className="w-5" />
                Continue with Google
              </>
            )}
          </button>

          <p className="my-4 text-gray-500 flex gap-1 items-center justify-center">
            Don&apos;t have an account?{' '}
            <Link href="/login">
              <span className="text-blue-500 hover:text-blue-700">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default withAuthRedirect(Signup);
