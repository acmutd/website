"use client";
import React from "react";
import { Button } from "@/components/Button";
import { setCookie, getCookie } from "@/lib/utils";

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
  const handleClose = () => {
    setCookie("hideNewsletterPopup", "true", 1); // Hide it for 1 day I guess
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={`${getCookie("hideNewsletterPopup") === "true" ? "hidden" : ""} fixed left-0 bottom-0 z-50 p-4 w-full max-w-sm flex items-end`}>
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