import React, { useEffect, useState } from "react";
import { Button } from "@/components/Button";

const localStorageKey = "newsletterExpiresAt";

function setPopupExpiry(days: number) {
  const expireDate = Date.now() + days * 864e5;
  localStorage.setItem(localStorageKey, String(expireDate));
}

function isItemExpired() {
  if (typeof window === "undefined") return false;
  const expireDate = Number(localStorage.getItem(localStorageKey));
  if (!expireDate || isNaN(expireDate)) return false;
  if (Date.now() > expireDate) {
    localStorage.removeItem(localStorageKey);
    return false;
  }
  return true;
}

export function NewsletterPopup() {
  const [hidden, setHidden] = useState(true); // Whether the popup is in the DOM or not
  const [sliding, setSliding] = useState(false); // Whether the popup is currently animating

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isItemExpired()) { // "If the item IS expired"
        setHidden(false); // Add popup to DOM
        setTimeout(() => setSliding(true), 10); // Animate it in
      }
    }, 2000); // Delay popup appearance by 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setSliding(false); // Animate it out
    setTimeout(() => { // Ensures the animation completes before removing from DOM
      setPopupExpiry(1);
      setHidden(true); // Remove from DOM after animation
    }, 300); // Same as the transition duration below
  };

  if (hidden) return null;

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