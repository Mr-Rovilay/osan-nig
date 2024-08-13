"use client"
import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import Image from 'next/image';
import styles from './styles/form.module.css';

interface EmploymentFormProps {
  jobTitle: string;
}

const EmploymentForm: React.FC<EmploymentFormProps> = ({ jobTitle }) => {
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

    if (!fullName || !email || !phone || !address) {
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
              onChange={(e) => e.target.value} // No need to update the state, as it's a read-only field
              className={`w-full p-3 rounded-lg text-gray-700 ${styles.inputField}`}
              readOnly
            />
          </div>

          {/* Other form fields */}
          {/* ... */}

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
