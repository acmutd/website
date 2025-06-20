import React, { useEffect, useState } from "react";
import { Button } from "@/components/Button";

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

function setLocalStorage(key: string, days: number) {
  const now = new Date();
  const item = { expireDate: now.getTime() + days * 864e5 };
  localStorage.setItem(key, JSON.stringify(item));
}

function findLocalStorage(key: string) {
  if (typeof window === "undefined") return false;
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return false;
  try {
    const item = JSON.parse(itemStr);
    if (!item.expireDate || Date.now() > item.expireDate) {
      localStorage.removeItem(key);
      return false;
    }
    return true;
  } catch {
    localStorage.removeItem(key);
    return false;
  }
}

export function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
  const [displayThis, setDisplayThis] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (findLocalStorage("hideNewsletterPopup")) {
        setHidden(true);
      } else {
        setHidden(false);
        setTimeout(() => setSliding(true), 10); // This will delay the slide effect so in the styles down below it will start becoming invisible a little bit later
      }
      setDisplayThis(true);
    }, 1000); // This delays the popup appearance by 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setSliding(false);
    setTimeout(() => {
      setLocalStorage("hideNewsletterPopup", 1);
      setHidden(true);
      onClose();
    }, 300);
  };

  if (!displayThis || !isOpen || hidden) return null;

  return (
    <div className="fixed left-0 bottom-0 z-50 p-4 w-full max-w-sm flex items-end">
      <div
        className={`background-container p-8 w-full relative rounded-3xl border border-primary/50 bg-black/40 backdrop-blur-md transition-all duration-300
          ${sliding ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
        `}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col h-full justify-between">
          <div className="text-xl font-normal leading-relaxed">
            join our mailing list to stay<br />
            updated with our events and<br />
            programs!
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            href="/newsletter"
            text="join"
            bgStyle="acm"
          />
        </div>
      </div>
    </div>
  );
}