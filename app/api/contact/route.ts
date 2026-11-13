import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      inquiryType = "consultation",
      fullName,
      email,
      companyName,
      selectedServices,
      budgetRange,
      projectTimeline,
      projectDetails,
      websiteUrl,
      currentChallenge
    } = body;

    // Anti-spam honeypot detection
    if (body.website) {
      return NextResponse.json(
        { success: true, message: "Thank you for your submission." },
        { status: 200 }
      );
    }

    // Basic server-side validation
    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Full Name and Work Email)." },
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

    const typeLabels: Record<string, string> = {
      consultation: "30-Min Consultation Request",
      quote: "Fixed-Price Quote Request",
      audit: "Complimentary X-Ray Audit Request"
    };

    const typeTitle = typeLabels[inquiryType] || "General Inquiry";

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
            to: [process.env.CONTACT_TO_EMAIL || process.env.CONTACT_EMAIL || "mehboobakbar@kreaitx.com"],
            reply_to: email,
            subject: `[KreaitX ${typeTitle}] from ${fullName} (${companyName || "Independent"})`,
            text: `Inquiry Type: ${typeTitle}\nName: ${fullName}\nEmail: ${email}\nCompany: ${companyName || "N/A"}\nWebsite URL: ${websiteUrl || "N/A"}\nServices/Offerings: ${(selectedServices || []).join(", ") || "N/A"}\nBudget: ${budgetRange || "Not Specified"}\nTimeline: ${projectTimeline || "Flexible"}\nChallenge / Notes: ${currentChallenge || "N/A"}\n\nProject Details:\n${projectDetails || "No additional details provided."}`
          })
        });
      } catch (emailErr) {
        console.error("[Email Dispatch Error]:", emailErr);
      }
    }

    // Structured logging for audit trail
    console.log("[KreaitX Contact Inquiry Received]:", {
      inquiryType,
      fullName,
      email,
      companyName: companyName || "N/A",
      websiteUrl: websiteUrl || "N/A",
      selectedServices: selectedServices || [],
      budgetRange: budgetRange || "Not Specified",
      projectTimeline: projectTimeline || "Flexible",
      projectDetails: projectDetails || currentChallenge || "",
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      {
        success: true,
        message:
          inquiryType === "audit"
            ? "Thank you. Your X-Ray Audit request has been received. Mehboob Akbar and our senior team will review your presence and deliver your Credibility Gap Report within 3 to 5 business days."
            : inquiryType === "consultation"
            ? "Thank you. Your consultation request has been received. Our team will reach out within 24 business hours with scheduling options aligned to your time zone."
            : "Thank you for requesting a proposal. Our team will prepare a structured fixed-price USD quote and reach out within 3 to 5 business days."
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
