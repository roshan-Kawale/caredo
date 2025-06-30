"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const cities = ["Nagpur", "Mumbai", "Delhi", "Bangalore", "Pune"]; // Example cities

export function DoctorSearchHero() {
  const [selectedCity, setSelectedCity] = useState("nagpur");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (selectedCity) params.set("city", selectedCity);
    if (searchQuery) params.set("query", searchQuery);
    router.push(`/doctors?${params.toString()}`);
  };

  return (
    <div className="mt-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-2xl">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-none sm:w-1/3">
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="h-14 text-gray-700 text-base border-gray-300">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem
                  key={city}
                  value={city.toLowerCase()}
                  className="text-base"
                >
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-grow relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search doctor, clinic, hospitals"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-14 pl-10 text-gray-700 text-base border-gray-300"
          />
        </div>
        <Button
          onClick={handleSearch}
          size="lg"
          className="h-14 bg-orange-500 hover:bg-orange-600 text-white text-base px-6 sm:px-4"
        >
          <Search className="h-5 w-5 sm:mr-2" />
          <span className="hidden sm:inline">Search</span>
        </Button>
      </div>
    </div>
  );
}
