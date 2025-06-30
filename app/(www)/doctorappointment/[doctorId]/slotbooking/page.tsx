import { DoctorInfoCard } from "@/components/cards";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AppointmentBookingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Confirm Your Appointment
          </h1>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Doctor Info */}
          <div>
            <DoctorInfoCard />
          </div>

          {/* Right Column - Booking Details */}
          <div>
            <Card>
              <CardContent className="p-6 space-y-6">
                {/* Appointment Info Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-xl mb-1">Number: 3</div>
                    <div className="font-bold text-xl mb-1">
                      Your Timing: 6:20 AM
                    </div>
                    <div className="text-sm text-gray-600">
                      Date: 2 Oct 2024
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-center">
                    <div className="bg-gray-700 text-white text-xs px-6 py-1 w-full">
                      Time Remains
                    </div>
                    <div>
                      <div className="bg-teal-500 font-bold text-white text-sm px-10 py-1">
                        44 min
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-light">
                      Patient Full Name
                    </Label>
                    <Input id="fullName" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-light">
                      gmail (optional)
                    </Label>
                    <Input id="email" type="email" className="mt-1" />
                  </div>
                </div>

                {/* Selected Slot */}
                <div>
                  <Label className="text-sm font-light">Selected Slot</Label>
                  <div className="mt-2 p-3 bg-teal-50 border border-teal-200 rounded-md text-center">
                    <span className="text-teal-700 font-medium">
                      6:20 AM on June 6,2025
                    </span>
                  </div>
                </div>

                {/* Book Now Button */}
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 text-lg">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
