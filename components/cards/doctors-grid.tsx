import { Doctor } from "@/types/doctors";
import { DoctorCard } from "./doctor-card";

export function DoctorGrid({ doctors }: { doctors: Doctor[] }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {doctors?.map((doctor) => (
          <DoctorCard key={doctor.user_id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
