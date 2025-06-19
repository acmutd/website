"use client";
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

  useEffect(() => {
    // If the item exists and is valid, hide the popup
    if (findLocalStorage("hideNewsletterPopup")) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setDisplayThis(true);
  }, []);

  const handleClose = () => {
    setLocalStorage("hideNewsletterPopup", 1);
    setHidden(true);
    onClose();
  };

  if (!displayThis || !isOpen || hidden) return null;

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
            // Old link: https://cdn.forms-content.sg-form.com/22d851f4-5f47-11eb-9b58-e2c4feadfaf0
            text="join"
            bgStyle="acm"
          />
        </div>
      </div>
    </div>
  );
}