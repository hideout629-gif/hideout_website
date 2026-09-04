import React, { useEffect } from 'react';
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';
import type { ToastMessage } from '../types';

interface ToastNotificationProps {
  toast: ToastMessage | null;
  onClose: () => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({ toast, onClose }) => {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />;
      default:
        return <Info className="w-5 h-5 text-amber-300 shrink-0" />;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#142E1F] text-white rounded-2xl p-4 shadow-2xl border border-white/20 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          {getIcon()}
          <div>
            <div className="text-sm font-bold font-serif text-[#E5C158]">
              {toast.title}
            </div>
            <div className="text-xs text-gray-200 mt-0.5 leading-relaxed font-sans">
              {toast.message}
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white p-1 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
