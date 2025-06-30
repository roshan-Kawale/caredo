"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DoctorInfoCard } from "@/components/cards";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function DoctorAppointmentPage() {
  const [selectedDay, setSelectedDay] = useState(2);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState("Today, 2 Oct");

  const param = useParams();

  // Mock booking data - some slots are booked
  const [bookedSlots] = useState(
    new Set([
      "morning-5",
      "morning-12",
      "morning-18",
      "morning-25",
      "evening-3",
      "evening-8",
      "evening-15",
      "evening-22",
    ])
  );

  // Generate week days
  const weekDays = [
    { day: "Fri", date: 2 },
    { day: "Sat", date: 3 },
    { day: "Sun", date: 4 },
    { day: "Mon", date: 5 },
    { day: "Tue", date: 6 },
    { day: "Wed", date: 7 },
    { day: "Thu", date: 8 },
    { day: "Fri", date: 9 },
  ];

  // Generate time slots for morning (5:00 AM to 11:55 AM) and evening (5:00 PM to 10:55 PM)
  const generateTimeSlots = (
    startHour: number,
    endHour: number,
    period: "AM" | "PM"
  ) => {
    const slots = [];
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 10) {
        // Changed from 5 to 10
        if (hour === endHour && minute > 50) break;
        const displayHour =
          period === "PM" && hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        const displayTime = `${displayHour}:${minute
          .toString()
          .padStart(2, "0")} ${period}`;
        slots.push(displayTime);
      }
    }
    return slots;
  };

  const morningSlots = generateTimeSlots(5, 11, "AM"); // 5:00 AM to 11:55 AM
  const eveningSlots = generateTimeSlots(17, 22, "PM"); // 5:00 PM to 10:55 PM (displayed as PM)

  return (
    <div className="p-10 space-y-6 bg-gray-50 min-h-screen">
      {/* Doctor Information Card */}
      <div className="max-w-3xl">
        <DoctorInfoCard />
      </div>

      {/* Time Slot Selection */}
      <div className="space-y-6">
        <h3 className="text-lg font-medium text-gray-700">
          Select a time slot for your appointment
        </h3>

        {/* Week Days */}
        <div className="flex items-center gap-3  max-w-2xl mb-8">
          <div className="flex gap-2 overflow-x-auto flex-1">
            {weekDays.map((day) => (
              <button
                key={day.date}
                onClick={() => {
                  setSelectedDay(day.date);
                  setSelectedDate(`${day.day}, ${day.date} Oct`);
                }}
                className={`flex flex-col items-center p-4 rounded-xl min-w-[70px] transition-all ${
                  selectedDay === day.date
                    ? "bg-teal-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                }`}
              >
                <span className="text-sm font-medium">{day.day}</span>
                <span className="text-xl font-bold">{day.date}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Day Info */}
        <div className="text-xl font-semibold text-gray-800">
          {selectedDate}
        </div>
        {/* Time Slots */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Morning Slots */}
          <div className="bg-white rounded-xl p-6 shadow-sm border-2">
            <div className="flex items-center gap-3 mb-6">
              <h4 className="font-semibold text-gray-800 text-lg">MORNING</h4>
              <span className="text-sm text-green-600 font-medium">
                21 slots available
              </span>
            </div>
            <div className="grid grid-cols-6 gap-3">
              {morningSlots.map((slot, index) => {
                const slotId = `morning-${index}`;
                const isBooked = bookedSlots.has(slotId);
                const isSelected = selectedTimeSlot === slotId;

                return (
                  <button
                    key={slotId}
                    onClick={() => !isBooked && setSelectedTimeSlot(slotId)}
                    disabled={isBooked}
                    className={`p-2 text-sm font-medium border rounded-lg transition-all ${
                      isBooked
                        ? "bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed"
                        : isSelected
                        ? "bg-teal-500 text-white border-teal-500 shadow-md"
                        : "bg-white text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Evening Slots */}
          <div className="bg-white rounded-xl p-6 shadow-sm border-2">
            <div className="flex items-center gap-3 mb-6">
              <h4 className="font-semibold text-gray-800 text-lg">EVENING</h4>
              <span className="text-sm text-green-600 font-medium">
                21 slots available
              </span>
            </div>
            <div className="grid grid-cols-6 gap-3">
              {eveningSlots.map((slot, index) => {
                const slotId = `evening-${index}`;
                const isBooked = bookedSlots.has(slotId);
                const isSelected = selectedTimeSlot === slotId;

                return (
                  <button
                    key={slotId}
                    onClick={() => !isBooked && setSelectedTimeSlot(slotId)}
                    disabled={isBooked}
                    className={`p-2 text-sm font-medium border rounded-lg transition-all ${
                      isBooked
                        ? "bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed"
                        : isSelected
                        ? "bg-teal-500 text-white border-teal-500 shadow-md"
                        : "bg-white text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Book Now Button */}
      <div className="pt-6 pb-8 max-w-xl mx-auto">
        <Link href={`/doctorappointment/${param.doctorId}/slotbooking`}>
        <Button
          className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6 text-xl font-semibold rounded-full shadow-lg transition-all hover:shadow-xl"
          disabled={!selectedTimeSlot}
        >
          Book Now
        </Button>
        </Link>
      </div>
    </div>
  );
}
