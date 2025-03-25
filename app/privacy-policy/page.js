import React from "react";

export const metadata = {
  title: "Privacy Policy | Bookease",
  description: "Privacy Policy for Bookease scheduling platform",
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
          <p>
            At Bookease, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you use our scheduling platform. Please read this
            policy carefully. If you do not agree with the terms of this privacy
            policy, please do not access the application.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Information We Collect
          </h2>
          <p className="mb-3">
            We collect information that you provide directly to us when you:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li>Create an account</li>
            <li>Set up your availability</li>
            <li>Create event types</li>
            <li>Schedule meetings</li>
            <li>Connect third-party services like Google Calendar</li>
          </ul>
          <p>
            This information may include your name, email address, profile
            picture, calendar data, and any other information you choose to
            provide.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Google Calendar Integration
          </h2>
          <p className="mb-3">
            When you connect your Google Calendar to Bookease, we request access
            to:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li>View and manage your calendar</li>
            <li>Create and modify events on your calendar</li>
            <li>Create Google Meet video conferences</li>
          </ul>
          <p>
            We only use these permissions to provide the scheduling services you
            request, such as checking your availability, creating events, and
            generating meeting links. We do not access your calendar data for
            any other purpose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            How We Use Your Information
          </h2>
          <p className="mb-3">We use the information we collect to:</p>
          <ul className="list-disc pl-6">
            <li>Provide, maintain, and improve our services</li>
            <li>Create and manage your account</li>
            <li>Process and manage your bookings</li>
            <li>Communicate with you about your bookings</li>
            <li>Generate meeting links</li>
            <li>Sync events with your connected calendars</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Send you technical notices and updates</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Sharing Your Information
          </h2>
          <p className="mb-3">
            We may share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-6">
            <li>With other users when you schedule meetings with them</li>
            <li>
              With third-party service providers that perform services on our
              behalf
            </li>
            <li>To comply with legal obligations</li>
            <li>In connection with a business transfer</li>
            <li>With your consent or at your direction</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            accidental loss, alteration, or destruction. However, no method of
            transmission over the Internet or electronic storage is 100% secure,
            so we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
          <p className="mb-3">You have the right to:</p>
          <ul className="list-disc pl-6">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate personal information</li>
            <li>Request deletion of your personal information</li>
            <li>
              Disconnect third-party services like Google Calendar at any time
            </li>
            <li>Object to the processing of your personal information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this privacy policy from time to time to reflect
            changes to our practices or for other operational, legal, or
            regulatory reasons. We will notify you of any material changes by
            posting the new privacy policy on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p>
            If you have any questions or concerns about this privacy policy or
            our data practices, please contact us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> privacy@bookease.com
            <br />
            <strong>Address:</strong> 123 Booking Street, Calendar City
          </p>
        </section>

        <section>
          <p className="text-sm text-gray-600">Last updated: March 25, 2025</p>
        </section>
      </div>
    </div>
  );
}
