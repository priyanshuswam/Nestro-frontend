import React, { Suspense } from "react";
import VerifyOtpContent from "./VerifyOtpContent";

export default function VerifyOtpPage() {
  return (
    <Suspense fallback={<VerifyOtpFallback />}>
      <VerifyOtpContent />
    </Suspense>
  );
}

function VerifyOtpFallback() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center px-6 sm:px-8 lg:px-10 py-8 lg:py-10">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-6">
          <div className="text-[24px] font-medium text-[#1E1E1E] mb-1">Verify your email</div>
          <div className="text-[12px] text-[#6B7280]">Loading...</div>
        </div>
        <div className="flex justify-center gap-2 sm:gap-3 mb-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="w-12 h-12 sm:w-14 sm:h-14 border border-[#E8E0D5] rounded-md bg-gray-50 animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}


