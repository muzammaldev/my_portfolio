import { NextResponse } from "next/server";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

// Define your schema and model
const contactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);
const dbConnect = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(
        process.env.MONGODB_URI ||
          "mongodb+srv://muzammaldev:Iv0Gl3thKZTbw36A@cluster0.v8mwkvq.mongodb.net/My_Portfolio"
      );
    }
  } catch (error) {
    throw new Error(`Database connection error: ${error.message}`);
  }
};

export async function POST(req) {
  try {
    await dbConnect();

    const { email, message } = await req.json();

    // Validate input
    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    // Save form data to the database
    const contact = new Contact({ email, message });
    await contact.save();

    // Set up Nodemailer to send email
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER || "muzammaldev@gmail.com", // your email address
        pass: process.env.EMAIL_PASS || "ucgpkmtmboewyrtd", // your email password
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: "muzammaldev@gmail.com",
      subject: "Thank you for contacting us",
      text: `You have a new message from ${email}: ${message}}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error:", error); // Log the error for debugging
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
