import { Suspense } from "react";
import { DoctorSearch } from "@/components/search";
import { DoctorFiltersClient } from "@/components/filters";
import { getDoctors } from "./action";
import { DoctorGrid } from "@/components/cards";

export default function DoctorsPage() {
  const doctors = getDoctors();

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="relative">
        {" "}
        {/* Added relative for potential absolute positioning of filters */}
        {/* ✅ Wrap DoctorSearch in Suspense */}
        <Suspense
          fallback={
            <div className="bg-teal-500 p-4 text-white">Loading search...</div>
          }
        >
          <DoctorSearch />
        </Suspense>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-4 text-gray-700">
            16 Doctors {/* This count should be dynamic */}
          </div>

          {/* DoctorFilters will now be a floating panel, conditionally rendered */}
          {/* Client-side interactive filters */}
          <DoctorFiltersClient />

          <div className="mt-6">
            <Suspense
              fallback={
                <div className="text-center py-10">Loading doctors...</div>
              }
            >
              <DoctorGrid doctors={doctors} />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}
