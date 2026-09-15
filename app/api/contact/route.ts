import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, companyName, selectedServices, budgetRange, projectTimeline, projectDetails } = body;

    // Basic server-side validation
    if (!fullName || !email || !projectDetails) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, and Project Details)." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // In production with RESEND_API_KEY, we could dispatch email via Resend
    // For now, log the structured inquiry payload
    console.log("[KreaitX Contact Inquiry Received]:", {
      fullName,
      email,
      companyName: companyName || "N/A",
      selectedServices: selectedServices || [],
      budgetRange: budgetRange || "Not Specified",
      projectTimeline: projectTimeline || "Flexible",
      projectDetails,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out to KreaitX. Our senior team has received your inquiry and will respond within 24 business hours."
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Contact API Error]:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while submitting your message. Please try again or email us directly at contact@kreaitx.com." },
      { status: 500 }
    );
  }
}
