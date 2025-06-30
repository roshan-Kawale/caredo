
const doctors = [
    {
      area_id: 101,
      bio: "Dr. Sarah Johnson is a board-certified dermatologist with over 10 years of experience in skincare and cosmetic treatments.",
      clinic_address: "123 Wellness Blvd, Suite 200, Springfield, IL",
      created_at: "2024-03-15T10:45:00Z",
      full_name: "Dr. Sarah Johnson",
      phone: "+1-555-123-4567",
      photo_url: "https://example.com/photos/dr-sarah-johnson.jpg",
      search_vector: null,
      specialty_id: 5,
      subscription_active: true,
      subscription_end: "2025-12-31T23:59:59Z",
      subscription_start: "2024-01-01T00:00:00Z",
      user_id: "user_abc123"
    },
    {
      area_id: 102,
      bio: "Dr. Miguel Torres specializes in internal medicine and preventive healthcare, with a focus on chronic conditions.",
      clinic_address: "456 Care St, Floor 3, Austin, TX",
      created_at: "2023-08-10T08:30:00Z",
      full_name: "Dr. Miguel Torres",
      phone: "+1-555-987-6543",
      photo_url: "https://example.com/photos/dr-miguel-torres.jpg",
      search_vector: null,
      specialty_id: 2,
      subscription_active: true,
      subscription_end: "2025-08-10T23:59:59Z",
      subscription_start: "2023-08-10T00:00:00Z",
      user_id: "user_xyz789"
    },
    {
      area_id: 103,
      bio: "Dr. Aisha Khan is a pediatrician who has been serving families for over 15 years with compassionate, personalized care.",
      clinic_address: "789 Kids Clinic Rd, Suite 100, Miami, FL",
      created_at: "2022-11-20T12:00:00Z",
      full_name: "Dr. Aisha Khan",
      phone: "+1-555-321-9876",
      photo_url: "https://example.com/photos/dr-aisha-khan.jpg",
      search_vector: null,
      specialty_id: 3,
      subscription_active: false,
      subscription_end: "2024-11-20T23:59:59Z",
      subscription_start: "2022-11-20T00:00:00Z",
      user_id: "user_lmn456"
    }
];

export function getDoctors() {
    // const res = await fetch("https://your-api.com/doctors" , {
    //     next : {
    //         revalidate : 60
    //     }
    // }) // Use your API endpoint
    // const data = await res.json()
    // return data

    return doctors;
}

