export interface Doctor {
    area_id: number
    bio: string | null
    clinic_address: string | null
    created_at: string
    full_name: string
    phone: string | null
    photo_url: string | null
    search_vector: unknown | null
    specialty_id: number
    subscription_active: boolean
    subscription_end: string | null
    subscription_start: string | null
    user_id: string
}