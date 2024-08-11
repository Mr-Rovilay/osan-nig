'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles/form.module.css';
import Button from '@/components/Button';

const EmploymentForm = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [fullName, setFullName] = useState('');
  const [cv, setCV] = useState<File | null>(null);  
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [driversLicense, setDriversLicense] = useState('');
  const [guarantorAddress, setGuarantorAddress] = useState('');
  const [licensePicture, setLicensePicture] = useState<File | null>(null);
  const [address, setAddress] = useState('');
  const [experience, setExperience] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validation
    if (!fullName || !email || !phone || !address) {
      setError('Please fill out all required fields.');
      return;
    }

    if (jobTitle === 'driver') {
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

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSuccess('Your application has been submitted successfully!');
      setFullName('');
      setEmail('');
      setPhone('');
      setDriversLicense('');
      setExperience('');
      setGuarantorAddress('');
      setAddress('');
      setJobTitle('');
      setLicensePicture(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6">Employment Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="jobTitle">
              Job Title
            </label>
            <select
              id="jobTitle"
              name="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className={`w-full p-3 rounded-lg text-gray-700 ${styles.inputField}`}
            >
              <option value="" disabled>Select a job title</option>
              <option value="driver">Driver</option>
              <option value="packer">Packer</option>
              <option value="operator">Operator</option>
              <option value="storekeeper">Storekeeper</option>
              <option value="motorboy">Motor Boy</option>
              <option value="marketer">Marketer</option>
              <option value="manager">Manager</option>
            </select>
          </div>

          <div className="mb-4">
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

          <div className="mb-4">
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

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full p-3 rounded-lg text-gray-700 ${styles.inputField}`}
            />
          </div>
          <div className="mb-6">
                <label className="block text-xs font-bold mb-2" htmlFor="cvPicture">
                  Upload Cv
                </label>
                <input
                  type="file"
                  id="CvPicture"
                  accept="image/*"
                  onChange={(e) => setCV(e.target.files ? e.target.files[0] : null)}
                  className={`w-full p-3 rounded-lg text-gray-700 ${styles.inputField}`}
                  required
                />
              </div>

          {jobTitle === 'driver' && (
            <>
              <div className="mb-4">
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
              <div className="mb-4">
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
                  required
                />
              </div>
              <div className="mb-4">
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
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-xs font-bold mb-2" htmlFor="licensePicture">
                  Upload Driver&apos;s License Picture
                </label>
                <input
                  type="file"
                  id="licensePicture"
                  accept="image/*"
                  onChange={(e) => setLicensePicture(e.target.files ? e.target.files[0] : null)}
                  className="w-full bg-white py-3 px-3 rounded-lg text-gray-700 text-base leading-tight"
                  required
                />
              </div>
            </>
          )}

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="address">
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

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

          <Button text="Submit Application" variant="secondary" type="submit" loading={loading} />
        </form>
      </div>
    </div>
  );
};

export default EmploymentForm;
