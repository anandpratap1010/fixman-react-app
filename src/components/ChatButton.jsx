import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

export default function ChatButton() {
  return (
    <button
      type="button"
      aria-label="Open chat"
      className="fixed right-6 top-1/2 z-40 inline-flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-orange-400 shadow-[0_16px_40px_rgba(251,146,60,0.35)] transition hover:scale-105 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-200"
    >
      <span className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-[14px] bg-white shadow-[0_4px_10px_rgba(15,23,42,0.08)]">
        <HiOutlineChatBubbleLeftRight className="text-[24px] text-orange-400" />
      </span>
    </button>
  );
}
