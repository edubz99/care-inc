import { Resend } from 'resend';

// Initialize Resend with your API key
// In production, this should be stored in an environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Parse the request body
    const { name, email, phone, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'Name, email, and message are required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Prepare email subject
    const emailSubject = subject 
      ? `Contact Form: ${subject}` 
      : 'New Contact Form Submission';

    // Prepare the email content with phone number if provided
    const phoneSection = phone ? `\nPhone: ${phone}` : '';
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Replace with your verified domain
      to: 'info@careinclusive.co.uk', // The recipient email address
      subject: emailSubject,
      text: `
Name: ${name}
Email: ${email}${phoneSection}

Message:
${message}
      `,
      // You can also use HTML for a formatted email
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return new Response(
        JSON.stringify({ message: 'Failed to send email', error: error.message }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        message: 'Email sent successfully', 
        id: data.id 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Server error:', error);
    return new Response(
      JSON.stringify({ message: 'Server error', error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}