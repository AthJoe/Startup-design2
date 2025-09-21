import { useState } from "react";
import Lottie from "lottie-react";
import speakingAnimation from "./assets/lottie/SpeakingAI.json";
import NavigationBar from "./components/NavigationBar.jsx";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelContent, setPanelContent] = useState("");
  const [focusedCard, setFocusedCard] = useState(null);

  const openPanel = (answer) => {
    setPanelContent(answer);
    setPanelOpen(true);
  };

  const closePanel = () => {
    setPanelOpen(false);
  };

  const benefits = [
    {
      title: "Seamless Productivity",
      desc: "CF helps you stay in the zone with minimal distractions, letting your ideas flow naturally and boosting productivity.",
      gradient: "from-purple-100 to-purple-200",
    },
    {
      title: "Smart Collaboration",
      desc: "Work effortlessly with your team, share insights instantly, and stay aligned with real-time feedback loops.",
      gradient: "from-pink-100 to-pink-200",
    },
    {
      title: "Intuitive Experience",
      desc: "With a clean and calming design, CF ensures a stress-free experience, letting you focus only on what matters most.",
      gradient: "from-green-100 to-green-200",
    },
  ];

  return (
    <div className="h-screen w-screen dark:bg-gray-700 flex flex-col relative">
      {/* Top Navigation */}
      <NavigationBar />

      {/* Blur Wrapper */}
      <motion.div
        className="flex flex-1 flex-col items-center justify-center bg-white dark:bg-gray-700 px-4 text-center"
        animate={{ filter: focusedCard !== null ? "blur(5px)" : "blur(0px)" }}
        transition={{ duration: 0.3 }}
      >
        {/* Main Content */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-dancing text-primary dark:text-white mb-6">
          Cognitive Flow
        </h1>
        <Lottie
          animationData={speakingAnimation}
          loop={true}
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem]"
        />

        {/* Buttons Row */}
        <div className="flex items-center justify-center space-x-4 py-6">
          <button
            onClick={() =>
              openPanel(
                "Teams plan starts at $29/month with collaboration tools included."
              )
            }
            className="bg-purple-400 rounded-full px-5 py-3 text-white hover:bg-purple-500 transition-colors shadow-md"
          >
            What's the Price for teams?
          </button>
          <button
            onClick={() =>
              openPanel(
                "Developer plan starts at $9/month, best for individual projects."
              )
            }
            className="bg-purple-400 rounded-full px-5 py-3 text-white hover:bg-purple-500 transition-colors shadow-md"
          >
            What's the Price for dev?
          </button>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mt-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${benefit.gradient} dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg p-6 cursor-pointer relative z-10`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setFocusedCard(index)}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Focused Card Overlay */}
      <AnimatePresence>
        {focusedCard !== null && (
          <>
            {/* Dimmed background */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setFocusedCard(null)}
            />

            {/* Enlarged focused card */}
            <motion.div
              className="fixed top-1/2 left-1/2 w-11/12 max-w-2xl p-8 rounded-3xl shadow-2xl bg-white dark:bg-gray-800 z-40"
              initial={{ scale: 0.5, opacity: 0, x: "-50%", y: "-50%" }}
              animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                {benefits[focusedCard].title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {benefits[focusedCard].desc}
              </p>
              <button
                className="mt-6 px-4 py-2 bg-purple-400 text-white rounded-full hover:bg-purple-500 transition-colors"
                onClick={() => setFocusedCard(null)}
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Right-side Pricing Panel */}
      {panelOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={closePanel}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 z-50 ${
          panelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-600">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Answer
          </h2>
          <button
            onClick={closePanel}
            className="text-gray-500 hover:text-gray-800 dark:hover:text-white"
          >
            ✕
          </button>
        </div>
        <div className="p-4 text-gray-700 dark:text-gray-300">{panelContent}</div>
      </div>
    </div>
  );
}
