import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import MailboxImage from "../../IMG/mali.png"; // Adjust the path as needed

const Index = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID, // <-- replace with your EmailJS service ID
        process.env.REACT_APP_TEMPLET_ID, // <-- replace with your EmailJS template ID
        form.current,
        process.env.REACT_APP_PUBLIC_KEY // <-- replace with your EmailJS public key
      )
      .then(
        (result) => {
          setLoading(false);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again.");
        }
      );
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 cursor-auto "
    >
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row p-8 md:p-16">
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
          <img
            src={MailboxImage}
            alt="Mailbox Illustration"
            className="w-[80%] max-w-md"
          />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2">
          <p className="text-sm text-gray-500 mb-1">You can text me directly</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Write Me</h2>

          <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-800 font-medium mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2f5689]"
                placeholder="Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-800 font-medium mb-1"
              >
                Email Me
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                className="w-full px-4 py-2 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2f5689]"
                placeholder="Email"
              />
            </div>

            {/* Message Field */}
            <div>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2f5689]"
                placeholder="Message..."
              ></textarea>
            </div>

            {/* Hidden Time Field */}
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#4a7bba] hover:bg-[#2f5689] text-white font-semibold py-2 rounded-md flex items-center justify-center transition-all duration-200 ${
                loading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 text-white mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  <span>Sending...</span>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Index;
