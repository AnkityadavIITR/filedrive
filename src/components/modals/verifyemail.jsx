/* eslint-disable react/no-unescaped-entities */
'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { User } from 'firebase/auth';
import { verifyUserEmail } from '@/hooks/firebase/verifyUserEmail';
import { useEffect, useState } from 'react';


export default function EmailVerificationModal({ currentUser, page }) {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(60);

  useEffect(() => {
    let intervalId;
    if (isButtonDisabled) {
      intervalId = setInterval(() => {
        setSecondsRemaining((prevSeconds) => {
          if (prevSeconds === 1) {
            clearInterval(intervalId);
            setButtonDisabled(false);
            return 60;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
    
  }, [isButtonDisabled]);

  async function onSendEmail() {
    const response = await verifyUserEmail(currentUser, page);

    if (response) {
      toast('Email Sent', {
        description: 'A verify link is send to your email address ',
      });
      setButtonDisabled(true);
    }
  }

  return (
    <>
      <Dialog open>
        <DialogContent className="bg-white text-black p-0 overflow-hidden">
          <DialogHeader className="pt-8 px-4 text-center">
            <DialogTitle className="mb-4">
              <h2 className="text-2xl font-bold">Verify Your Email</h2>
            </DialogTitle>
            <DialogDescription className="text-zinc-500">
              To continue please click the below link, after that a verification
              link will send to your email
            </DialogDescription>
          </DialogHeader>
          <div className="pt-4 px-4 text-center pb-6">
            <Button
              variant="link"
              onClick={onSendEmail}
              disabled={isButtonDisabled}
            >
              {isButtonDisabled
                ? `Retry in ${secondsRemaining} seconds`
                : 'Verify Your Email'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
