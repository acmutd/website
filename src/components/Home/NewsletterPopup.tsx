import React from 'react';
import { Button } from '@/components/Button';

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed left-0 bottom-0 z-50 p-4 w-full max-w-sm flex items-end">
      <div className="background-container p-8 w-full relative rounded-3xl border border-primary/50 bg-gray-600/10 backdrop-blur-md">
        {/* ts will close ts 🙏 */}
        <button
          onClick={onClose}
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
          {/* ikiag, i was tryna make my own button and then i saw there was alr a component for it in the top level of component folder kms 🙏🙏 */}
          <Button
            href="https://cdn.forms-content.sg-form.com/22d851f4-5f47-11eb-9b58-e2c4feadfaf0"
            text="join"
            bgStyle="acm"
          />
        </div>
      </div>
    </div>
  );
}