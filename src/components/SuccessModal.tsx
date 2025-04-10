import React from "react";
import { CheckCircle, X } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileNames: string[];
}

export function SuccessModal({
  isOpen,
  onClose,
  fileNames,
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 relative animate-modal-appear">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center">
          <div className="mb-4 relative">
            <div className="absolute inset-0 bg-green-100 rounded-full scale-150 animate-pulse" />
            <CheckCircle className="h-12 w-12 text-green-500 relative animate-success-check" />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">Success!</h3>
          <p className="text-center text-gray-600">
            Ihre Datei wurde erfolgreich verarbeitet und hochgeladen. Sie können
            jetzt den Druck von der Druckeroberfläche starten.
          </p>
          <p className="text-center text-gray-600">
            Your file has been successfully processed and uploaded. You can now
            start the print from your printer's interface.
          </p>
          <p className="text-center text-gray-600 mt-4">
            <b>Dateiname(n) auf Drucker | File Name(s) on Printer:</b>
            <br />
            <ul>
              {fileNames.map((fileName) => (
                <li key={fileName}>{fileName}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
