import { useState } from "react";
import { Send } from "lucide-react";

function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div>
       {submitted && (
  <p className="text-green-600 text-xl mt-2 text-center">Thanks for signing up!</p>
)}

    <div className="flex justify-center mt-8 space-x-4">
      
      {/* Input field with Send icon */}
      <div className="relative flex items-center border rounded-full px-4 py-1 focus-within:ring-2 focus-within:ring-black">
        <Send className="absolute left-3 text-black w-4 h-4" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="pl-4 sm:pl-8 pr-2 py-2 text-xs sm:text-base lg:text-lg outline-none bg-transparent"
        />
      </div>

      {/* Sign Up Button */}
      <button
        onClick={handleSubmit}
        className="bg-black text-white text-xs sm:text-base px-4 sm:px-6 py-2 rounded-full cursor-pointer"
      >
        Sign Up
      </button>
    
    </div>
   
    </div>
  );
}

export default EmailCapture;
