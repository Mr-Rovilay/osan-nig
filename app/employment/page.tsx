"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './styles/form.module.css';
import Button from '@/components/Button';
import Image from 'next/image';

const EmploymentForm = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [fullName, setFullName] = useState('');
  const [cv, setCV] = useState<File | null>(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gPhone, setGPhone] = useState('');
  const [driversLicense, setDriversLicense] = useState('');
  const [guarantorAddress, setGuarantorAddress] = useState('');
  const [licensePicture, setLicensePicture] = useState<File | null>(null);
  const [address, setAddress] = useState('');
  const [experience, setExperience] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const jobTitleFromQuery = searchParams.get('jobTitle');
    if (jobTitleFromQuery) {
      setJobTitle(jobTitleFromQuery);
    }
  }, [searchParams]);

  useEffect(() => {
    if (licensePicture) {
      const objectUrl = URL.createObjectURL(licensePicture);
      setPreviewURL(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [licensePicture]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!fullName || !email || !phone || !address ) {
      setError('Please fill out all required fields.');
      return;
    }

    if (!phone.match(/^\d{11}$/)) {
      setError('Please provide a valid phone number.');
      return;
    }

    if (jobTitle === 'Driver') {
      if (!driversLicense) {
        setError('Please provide your driver\'s license number.');
        return;
      }
      if (!experience) {
        setError('Please provide the number of years of experience.');
        return;
      }
      if (!guarantorAddress) {
        setError('Please provide the guarantor\'s address.');
        return;
      }
      if (!licensePicture) {
        setError('Please upload a picture of your driver\'s license.');
        return;
      }
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess('Your application has been submitted successfully!');
      setFullName('');
      setEmail('');
      setPhone('');
      setGPhone('');
      setDriversLicense('');
      setExperience('');
      setGuarantorAddress('');
      setAddress('');
      setJobTitle('');
      setLicensePicture(null);
      setPreviewURL(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container bg-white p-8 rounded-lg shadow-md w-full">
        <h1 className="text-2xl font-bold mb-6">Employment Details</h1>
        <form onSubmit={handleSubmit} className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-4">

            <label className="block text-sm font-bold mb-2" htmlFor="jobTitle">
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className={`w-full p-3 rounded-lg text-gray-700 ${styles.inputField}`}
              readOnly
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`w-full p-3 rounded-lg text-gray-700 ${styles.inputField}`}
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 rounded-lg text-gray-700 ${styles.inputField}`}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full p-3 rounded-lg text-gray-700 ${styles.inputField}`}
            />
          </div>

          {jobTitle === 'Motor Boy' ? (
        <div className="w-full md:w-1/2 px-3 mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="gPhone">
                Parent/Guarantor&apos;s Phone Number
              </label>
              <input
                type="number"
                id="gPhone"
                name="gPhone"
                value={gPhone}
                onChange={(e) => setGPhone(e.target.value)}
                className={`w-full p-3 rounded-lg text-gray-700 ${styles.inputField}`}
              />
            </div>
          ) : (
            <div className="w-full md:w-1/2 px-3 mb-4">
              <label className="block text-xs font-bold mb-2" htmlFor="cvPicture">
                Upload CV
              </label>
              <input
                type="file"
                id="cvPicture"
                accept="application/pdf"
                onChange={(e) => setCV(e.target.files ? e.target.files[0] : null)}
                className={`w-full p-3 rounded-lg text-gray-700 ${styles.inputField}`}
              />
            </div>
          )}

          {jobTitle === 'Driver' && (
            <>
              <div className="w-full md:w-1/2 px-3 mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="driversLicense">
                  Driver&apos;s License Number
                </label>
                <input
                  type="text"
                  id="driversLicense"
                  name="driversLicense"
                  value={driversLicense}
                  onChange={(e) => setDriversLicense(e.target.value)}
                  className={`w-full p-3 rounded-lg text-gray-700 ${styles.inputField}`}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-4">
                <label className="block text-xs font-bold mb-2" htmlFor="experience">
                  Number of Years of Experience
                </label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className={`w-full p-3 rounded-lg text-gray-700 ${styles.inputField}`}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-4">
                <label className="block text-xs font-bold mb-2" htmlFor="guarantorAddress">
                  Guarantor&apos;s Address
                </label>
                <input
                  type="text"
                  id="guarantorAddress"
                  name="guarantorAddress"
                  value={guarantorAddress}
                  onChange={(e) => setGuarantorAddress(e.target.value)}
                  className={`w-full p-3 rounded-lg text-gray-700 ${styles.inputField}`}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-4">
                <label className="block text-xs font-bold mb-2" htmlFor="licensePicture">
                  Upload Driver&apos;s License Picture
                </label>
                <input
                  type="file"
                  id="licensePicture"
                  accept="image/*"
                  onChange={(e) => setLicensePicture(e.target.files ? e.target.files[0] : null)}
                  className={`w-full p-3 rounded-lg text-gray-700 ${styles.inputField}`}
                />
                {previewURL && (
                  <div className="w-full md:w-1/2 px-3 mb-4">
                    <p className="text-sm font-bold mb-2">Preview:</p>
                    <Image
                      src={previewURL}
                      alt="Driver's License Preview"
                      className="w-32 h-auto rounded-lg shadow-md"
                      width={128}
                      height={128}
                    />
                  </div>
                )}
              </div>
            </>
          )}

<div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-xs font-bold mb-2" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`w-full p-3 rounded-lg text-gray-700 ${styles.inputField}`}
            />
          </div>

          <div className="flex flex-col px-3">
            
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          {success && <p className="text-green-500 text-xs italic mb-4">{success}</p>}

          <div className="flex items-center justify-between">
          <Button text="Submit Application" variant="secondary" type="submit" loading={loading} />
          </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EmploymentForm;


