import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const HistoryButton = ({props}) => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <p className='text-softTextColor'>{props}</p>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white rounded-xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Ayee randi muh band kar warna muh mee de dunga choco
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter >
            <AlertDialogCancel className="bg-white text-black rounded-xl">Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-black text-white hover:bg-gray-800 rounded-xl">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default HistoryButton;
