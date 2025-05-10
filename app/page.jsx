import { ChatWidget } from "@/components/chat-widget";

export default function Home() {
  return (
    <div
      className=""
    >
      {/* <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Welcome to the AI Chat Widget
      </h1>
      <p className="text-gray-600 mb-6">
        Click the chat bubble in the bottom-right corner to start chatting!
      </p> */}
      <ChatWidget />
    </div>
  );
}