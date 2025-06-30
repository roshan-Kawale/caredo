"use client"

import { useEffect, useState } from "react"
import { DoctorFilters } from "./doctors-filters"

export function DoctorFiltersClient() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleToggle = () => setIsOpen((prev) => !prev)
        document.addEventListener("toggleFiltersPanel", handleToggle)
        return () => document.removeEventListener("toggleFiltersPanel", handleToggle)
    }, [])

    return (
        <>
            {isOpen && <DoctorFilters isOpen={isOpen} onClose={() => setIsOpen(false)} />}
        </>
    )
}