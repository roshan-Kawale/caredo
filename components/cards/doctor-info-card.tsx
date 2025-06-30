import { Card, CardContent } from "@/components/ui/card"
import { Check, MapPin, Phone} from "lucide-react"

export function DoctorInfoCard() {
    return (
        <Card className="overflow-hidden border-2 relative">
        <CardContent className="px-6">
        <div className="flex gap-6">
          <div className="w-1/4 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center">
              <div className="text-2xl">👨‍⚕️</div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg">Dr. Sanket Gidmare</h3>
              <Check className="w-5 h-5 text-blue-500 bg-blue-100 rounded-full p-1" />
            </div>
            <p className="text-sm text-gray-600">Shree Hospital</p>
            <p className="text-sm text-gray-600">Dental Surgeon</p>
            <p className="text-sm text-gray-600">MBBS, M.D</p>
            <p className="text-sm text-gray-600">10 years experience</p>

            <div className="flex items-center gap-1 text-sm mt-2">
              <Phone className="w-3 h-3" />
              <span>+91000100100</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-orange-500">
              <MapPin className="w-3 h-3" />
              <span>G-2 Shanti Gokha</span>
              <span>Andhira Nagar</span>
            </div>
            <button className="text-sm text-blue-500 hover:underline">View in map</button>
          </div>

          <div className="text-right absolute bottom-4 right-6">
              <span className="font-semibold">Rs 100 fees</span>
              <button className="block text-sm text-blue-500 hover:underline">Show more</button>
            </div>
        </div>
        </CardContent>
      </Card>
    )
}