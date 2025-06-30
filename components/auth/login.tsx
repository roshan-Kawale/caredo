"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Phone, Stethoscope, User } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"

type UserType = "patient" | "doctor"
type AuthStep = "phone" | "otp" | "success"

export function LoginForm() {
  const [userType, setUserType] = useState<UserType>("patient")
  const [currentStep, setCurrentStep] = useState<AuthStep>("phone")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const router = useRouter();

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phoneNumber || phoneNumber.length < 10) {
      setError("Please enter a valid mobile number")
      return
    }

    setIsLoading(true)
    setError("")

    // Simulate API call to send OTP
    setTimeout(() => {
      setIsLoading(false)
      setCurrentStep("otp")
    }, 2000)
  }

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    if (otp.length !== 6) {
      setError("Please enter the complete 6-digit OTP")
      return
    }

    setIsLoading(true)
    setError("")

    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false)
      if (otp === "123456") {
        setCurrentStep("success");
        router.push('/');
      } else {
        setError("Invalid OTP. Please try again.")
      }
    }, 1500)
  }

  const handleResendOTP = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setError("")
    }, 2000)
  }

  const resetForm = () => {
    setCurrentStep("phone")
    setPhoneNumber("")
    setOtp("")
    setError("")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md bg-white">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-center">
            {userType === "doctor" ? (
              <Stethoscope className="h-8 w-8 text-blue-600" />
            ) : (
              <User className="h-8 w-8 text-green-600" />
            )}
          </div>
          <div className="text-center">
            <CardTitle className="text-2xl font-bold text-black">
              {currentStep === "success" ? "Welcome!" : "Sign In / Sign Up"}
            </CardTitle>
            <CardDescription>
              {currentStep === "success"
                ? `Successfully logged in as ${userType}`
                : `Enter your mobile number to continue as a ${userType}`}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {currentStep !== "success" && (
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg bg-white text-black border-2">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="text-sm font-medium">Patient</span>
              </div>
              <Switch
                checked={userType === "doctor"}
                onCheckedChange={(checked) => setUserType(checked ? "doctor" : "patient")}
              />
              <div className="flex items-center space-x-2">
                <Stethoscope className="h-4 w-4" />
                <span className="text-sm font-medium">Doctor</span>
              </div>
            </div>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {currentStep === "phone" && (
            <form onSubmit={handleSendOTP} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Mobile Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending OTP..." : "Send OTP"}
              </Button>
            </form>
          )}

          {currentStep === "otp" && (
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">We&apos;ve sent a 6-digit code to {phoneNumber}</p>
              </div>

              <form onSubmit={handleVerifyOTP} className="space-y-4">
                <div className="space-y-2">
                  <Label>Enter OTP</Label>
                  <div className="flex justify-center">
                    <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Verifying..." : "Verify OTP"}
                </Button>
              </form>

              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">Didn&apos;t receive the code?</p>
                <Button variant="link" onClick={handleResendOTP} disabled={isLoading} className="p-0 h-auto">
                  Resend OTP
                </Button>
                <br />
                <Button variant="link" onClick={resetForm} className="p-0 h-auto text-sm">
                  Change mobile number
                </Button>
              </div>
            </div>
          )}

          {currentStep === "otp" && (
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                For demo purposes, use OTP: <strong>123456</strong>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
