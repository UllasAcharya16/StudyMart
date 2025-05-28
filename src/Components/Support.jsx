import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  LifebuoyIcon, 
  PaperAirplaneIcon, 
  ChatBubbleLeftRightIcon, 
  ClockIcon, 
  LockClosedIcon 
} from "@heroicons/react/24/solid";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("form");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Message sent successfully!");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="min-h-screen px-4 py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <br />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block p-6 mb-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl"
          >
            <LifebuoyIcon className="w-16 h-16 text-white" />
          </motion.div>
          <h1 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">
            24/7 Support Center
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Get instant help from our expert team or explore our knowledge base for quick solutions
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          {["form", "status", "chat"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full flex items-center gap-2 ${
                activeTab === tab 
                  ? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab === "form" && <PaperAirplaneIcon className="w-5 h-5" />}
              {tab === "status" && <ClockIcon className="w-5 h-5" />}
              {tab === "chat" && <ChatBubbleLeftRightIcon className="w-5 h-5" />}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Form Section */}
        {activeTab === "form" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid gap-12 p-8 border md:grid-cols-2 bg-gray-800/30 backdrop-blur-lg rounded-3xl border-gray-700/50"
          >
            <div className="space-y-6">
              <h2 className="mb-6 text-3xl font-bold text-white">Contact Form</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-6 py-4 text-white placeholder-gray-500 border border-gray-700 bg-gray-900/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                    <div className="absolute p-2 bg-gray-800 rounded-lg right-4 top-4">
                      <span className="text-2xl">👤</span>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-6 py-4 text-white placeholder-gray-500 border border-gray-700 bg-gray-900/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                    <div className="absolute p-2 bg-gray-800 rounded-lg right-4 top-4">
                      <span className="text-2xl">📧</span>
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="5"
                      className="w-full px-6 py-4 text-white placeholder-gray-500 border border-gray-700 bg-gray-900/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                    <div className="absolute p-2 bg-gray-800 rounded-lg right-4 top-4">
                      <span className="text-2xl">💬</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-4 rounded-xl flex items-center gap-2 transition-all ${
                      isSubmitting 
                        ? "bg-gray-600 cursor-not-allowed" 
                        : "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                    }`}
                  >
                    <PaperAirplaneIcon className="w-5 h-5" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  <div className="flex items-center gap-2 text-gray-400">
                    <LockClosedIcon className="w-5 h-5" />
                    <span className="text-sm">256-bit Encrypted</span>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="pl-8 space-y-8 border-l border-gray-700/50">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl">
                    <div className="p-3 rounded-lg bg-green-500/10">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <p className="text-gray-400">Emergency Support</p>
                      <p className="text-lg font-semibold">+1-800-123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl">
                    <div className="p-3 rounded-lg bg-blue-500/10">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <p className="text-gray-400">General Inquiry</p>
                      <p className="text-lg font-semibold">support@studymart.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Live Support</h3>
                <div className="p-6 border bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl border-green-500/30">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-500 rounded-lg">
                      <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Chat Available</p>
                      <p className="text-sm text-gray-400">Mon-Sun: 8AM - 12AM EST</p>
                    </div>
                  </div>
                  <button className="w-full py-3 mt-4 transition-colors bg-green-500 rounded-lg hover:bg-green-600">
                    Start Live Chat
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Additional Status Tab Content */}
        {activeTab === "status" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-8 text-center border bg-gray-800/30 backdrop-blur-lg rounded-3xl border-gray-700/50"
          >
            <div className="max-w-2xl mx-auto space-y-8">
              <ClockIcon className="w-16 h-16 mx-auto text-blue-400" />
              <h2 className="text-3xl font-bold text-white">Case Status Check</h2>
              <p className="text-gray-400">
                Enter your case ID to check the status of your support request
              </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Case ID"
                  className="w-full px-6 py-4 text-white placeholder-gray-500 border border-gray-700 bg-gray-900/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute px-6 py-3 bg-blue-500 rounded-lg right-2 top-2 hover:bg-blue-600">
                  Check Status
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 mt-16 border bg-gray-800/30 backdrop-blur-lg rounded-3xl border-gray-700/50"
        >
          <h2 className="mb-6 text-3xl font-bold text-center text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="pb-4 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white">
                Q1: How do I contact support?
              </h3>
              <p className="mt-2 text-gray-300">
                A: You can reach out using our contact form above, or directly call our emergency support number.
              </p>
            </div>
            <div className="pb-4 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white">
                Q2: What are your support hours?
              </h3>
              <p className="mt-2 text-gray-300">
                A: Our support team is available 24/7 through our live chat and phone support.
              </p>
            </div>
            <div className="pb-4 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white">
                Q3: Is my information secure?
              </h3>
              <p className="mt-2 text-gray-300">
                A: Yes, all communications are secured with 256-bit encryption.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Q4: Can I track the status of my support request?
              </h3>
              <p className="mt-2 text-gray-300">
                A: Absolutely! Use the Case Status Check tab above to enter your case ID and see the current status.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Support;
