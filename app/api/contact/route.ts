import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, companyName, selectedServices, budgetRange, projectTimeline, projectDetails } = body;

    // Anti-spam honeypot detection
    if (body.website) {
      return NextResponse.json(
        { success: true, message: "Thank you for your submission." },
        { status: 200 }
      );
    }

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

    // Dispatch email via Resend if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            from: "KreaitX Inquiries <onboarding@resend.dev>",
            to: [process.env.CONTACT_EMAIL || "contact@kreaitx.com"],
            reply_to: email,
            subject: `New Project Inquiry from ${fullName} (${companyName || "Independent"})`,
            text: `Name: ${fullName}\nEmail: ${email}\nCompany: ${companyName || "N/A"}\nServices: ${(selectedServices || []).join(", ") || "General"}\nBudget: ${budgetRange || "Not Specified"}\nTimeline: ${projectTimeline || "Flexible"}\n\nProject Details:\n${projectDetails}`
          })
        });
      } catch (emailErr) {
        console.error("[Email Dispatch Error]:", emailErr);
      }
    }

    // Structured logging for audit trail
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
