"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/Button";

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name: string) {
  if (typeof document === "undefined") return undefined;
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
}

export function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (getCookie("hideNewsletterPopup") !== "true") {
      setHidden(false);
    }
    setShouldRender(true);
  }, []);

  const handleClose = () => {
    setCookie("hideNewsletterPopup", "true", 7);
    setHidden(true);
    onClose();
  };

  if (!shouldRender || !isOpen || hidden) return null;

  return (
    <div className="fixed left-0 bottom-0 z-50 p-4 w-full max-w-sm flex items-end">
      <div className="bg-gray-900 rounded-2xl p-8 w-full relative border border-gray-400/50">
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