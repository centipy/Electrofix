import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const { name, phone, appliance, message } = body;

    // Basic validation
    if (!name || !phone || !appliance || !message) {
      return new Response(JSON.stringify({
        message: "Todos los campos son obligatorios."
      }), { status: 400 });
    }

    // --- Simulate sending email and WhatsApp ---
    console.log("--- NUEVA SOLICITUD DE COTIZACIÓN ---");
    console.log("Nombre:", name);
    console.log("Teléfono:", phone);
    console.log("Electrodoméstico:", appliance);
    console.log("Mensaje:", message);
    console.log("------------------------------------");
    // In a real application, you would use a service like Nodemailer, Resend, or Twilio here.
    // -----------------------------------------

    return new Response(JSON.stringify({
      message: "¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto."
    }), { status: 200 });
  }
  return new Response(null, { status: 400 });
};
