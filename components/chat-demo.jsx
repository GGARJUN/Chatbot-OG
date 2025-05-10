"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { cn } from "@/lib/utils";
import { Chat } from "@/components/ui/chat";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MODELS = [
  { id: "gpt-4o-mini", name: "GPT-4o Mini" },
  { id: "llama3-70b", name: "Llama 3 70B" },
];

export function ChatDemo({ onClose }) {
  const [selectedModel, setSelectedModel] = useState(MODELS[0].id);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    stop,
    isLoading,
    setMessages,
  } = useChat({
    api: "/api/chat",
    body: {
      model: selectedModel,
    },
  });

  return (
    <div
      className={cn(
        "flex flex-col h-[450px] w-[400px] rounded-lg  border border-gray-200"
      )}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-3 border-b border-gray-200 bg-gray-200 rounded-t-lg">
        <h3 className="text-sm font-semibold text-gray-700">AI Assistant</h3>
        <div className="flex items-center space-x-2">
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger
              className="w-[140px] text-xs border-gray-300"
              aria-label="Select AI model"
            >
              <SelectValue placeholder="Select Model" />
            </SelectTrigger>
            <SelectContent>
              {MODELS.map((model) => (
                <SelectItem key={model.id} value={model.id}>
                  {model.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-sm"
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <Chat
        className="grow overflow-y-auto p-3"
        messages={messages}
        handleSubmit={handleSubmit}
        input={input}
        handleInputChange={handleInputChange}
        isGenerating={isLoading}
        stop={stop}
        append={append}
        setMessages={setMessages}
        suggestions={[
          "Solve: x² + 6x + 9 = 25",
          "Generate a React button",
          "Tell a short joke",
        ]}
      />
    </div>
  );
}