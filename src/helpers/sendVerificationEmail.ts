import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verificationCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "vpm00718897@gmail.com",
      to: "vpm18897@gmail.com",
      subject: "Secret Message | Verification Code",
      react: VerificationEmail({ username, otp: verificationCode }),
    });
    return { success: true, message: "Verification email sent successfully!" };
  } catch (error) {
    console.log("Sending verification email error", error);
    return { success: false, message: "Failed to send verification email" };
  }
}
