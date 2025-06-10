import React, { useEffect, useRef, useState } from "react";
import InputField from "../Common/FormComponents/InputField";
import SubmissionButton from "../Common/Buttons/SubmissionButton";
import { userService } from "../../services/userService";
import { useSelector } from "react-redux";
import useUpdateUserData from "../../hooks/useUpdateUserData";

function UpdateResume() {
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeLink, setResumeLink] = useState("");
  const [resume, setResume] = useState("");
  const [updating, setUpdating] = useState(false);
  const fileInputRef = useRef(null);

  const updateUserData = useUpdateUserData();

  const { userData } = useSelector((store) => store.auth);

  useEffect(() => {
    if (userData?.userProfile?.resume) {
      setResume(userData.userProfile.resume);
    }
  }, [userData]);

  const handleInputChange = (event) => {
    setResumeLink(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setUpdating(true);
      if (resumeLink) {
        await userService.updateResume(resumeLink);
      } else if (resumeFile) {
        const formData = new FormData();
        formData.append("resumeFile", resumeFile);
        await userService.uploadResumeFile(formData);
      } else {
        throw new Error(
          "Please provide a resume link or upload a resume file."
        );
      }
      updateUserData();
    } catch (error) {
      console.error(error);
    } finally {
      setUpdating(false);
      setResumeLink("");
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 py-10 sm:px-5 md:px-10 lg:px-20">
      <div className="w-full max-w-2xl p-6 bg-white rounded shadow-md">
        <h2 className="mb-5 text-lg sm:text-xl md:text-2xl font-bold text-gray-700">
          Upload your recent resume or CV
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <InputField
              label="Resume link"
              id="resumeLink"
              value={resumeLink || ""}
              onChange={handleInputChange}
              isRequired={!resumeFile}
              placeholder="Paste your Google Drive link here"
              description="Make sure the Google Drive link is public and accessible."
            />
          </div>
          {resume && !resume.includes("res.cloudinary.com") && (
            <div className="mt-4 text-sm text-gray-600 break-words">
              Resume Link:{" "}
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline"
              >
                {resume}
              </a>
            </div>
          )}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-sm text-gray-500">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="resumeFile"
              className="block text-sm font-medium text-gray-700"
            >
              Upload resume file (PDF only)
            </label>
            <input
              id="resumeFile"
              type="file"
              accept=".pdf"
              ref={fileInputRef}
              onChange={(e) => setResumeFile(e.target.files[0])}
              className="block w-full text-sm text-gray-700
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:bg-gray-100 file:text-gray-700
                hover:file:bg-gray-200
                file:font-medium"
            />
            <p className="text-xs text-gray-500 mt-1">
              Max file size: 5MB. PDF only.
            </p>
          </div>
          {resume?.includes("res.cloudinary.com") && (
            <div className="mt-4 inline-flex justify-center items-center bg-green-200 py-1 px-3 rounded">
              <a
                href={resume.replace("/upload/", "/upload/fl_attachment/")}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 text-xs font-semibold no-underline hover:cursor-pointer"
              >
                Download Resume ✨
              </a>
            </div>
          )}
          <div className="flex justify-end">
            <SubmissionButton
              type="submit"
              label={updating ? "Updating..." : "Update"}
              color="black"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateResume;
