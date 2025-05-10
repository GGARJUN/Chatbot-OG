"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChatDemo } from "@/components/chat-demo";

export default function WidgetPage() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const projectId = searchParams.get("project_id") || "default";
  const tags = searchParams.get("tags")?.split(",").filter(Boolean) || [];

  const toggleChat = () => setIsOpen(!isOpen);

  // Log query parameters for debugging or pass to API
  console.log("Project ID:", projectId, "Tags:", tags);

  return (
    <div
      className="min-h-screen flex items-end justify-end p-4"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="fixed bottom-4 right-4 z-50">
        {/* Chat Bubble */}
        {!isOpen && (
          <button
            onClick={toggleChat}
            className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-700 transition-all duration-300 animate-bobble"
            aria-label="Open chat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </button>
        )}

        {/* Chat Box */}
        {isOpen && (
          <div className="animate-slide-in">
            <ChatDemo onClose={toggleChat} projectId={projectId} tags={tags} />
          </div>
        )}

        {/* CSS for Animations */}
        <style jsx>{`
          @keyframes bobble {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-6px);
            }
          }
          .animate-bobble {
            animation: bobble 2s ease-in-out infinite;
          }
          @keyframes slide-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slide-in {
            animation: slide-in 0.3s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
}