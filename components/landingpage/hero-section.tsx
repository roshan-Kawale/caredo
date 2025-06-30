import Image from "next/image";
import { DoctorSearchHero } from "../search";

export function HeroSection() {

    return (
        <section className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 lg:pt-28 lg:pb-36">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                            India&#39;s Most Trusted Doctor Booking Platform
                        </h1>
                        <p className="text-lg lg:text-xl text-teal-100">
                            &#34;Our mission is to bring all doctors of India together on Cared.&#34;
                        </p>
                        {/* Search Integrated into Hero */}
                        <DoctorSearchHero/>
                    </div>

                    {/* Doctor Image */}
                    <div className="hidden lg:block relative">
                        <Image
                            src="/doctor.png" // Using the existing placeholder
                            alt="Professional Doctor"
                            className="w-full h-[350px] max-w-md mx-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>
            {/* Adding the bottom promotional banner from the screenshot */}
            <div className="absolute bottom-0 left-0 right-0 hidden md:block transform translate-y-1/2">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-xl shadow-2xl p-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Image
                                src="/female-doctor-smiling.png"
                                alt="One India, One Caredo"
                                className="w-24 h-24 rounded-full object-cover border-4 border-teal-200"
                            />
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800">
                                &quot;One <span className="text-teal-600">INDIA</span>,
                                </h3>
                                <h3 className="text-2xl font-bold text-gray-800">
                                    All Doctors, One <span className="text-teal-600">Caredo</span>
                                </h3>
                                <p className="text-sm text-gray-500">&#34;Caredo-Skip the line&#34;</p>
                            </div>
                        </div>
                        <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                            <li>Now NO waiting in hospital lines.</li>
                            <li>FREE Booking</li>
                            <li>Choose your hospital timing.</li>
                            <li>Waiting time : 0 minutes</li>
                            <li>Find trusted doctors near you .</li>
                            <li>Live tracking of current patient number.</li>
                            <li>In and out of the hospital in few minutes.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}