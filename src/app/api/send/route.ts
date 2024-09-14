// import { type NextRequest } from 'next/server'

import { Resend } from 'resend';

import { ContactMeEmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, contactNo, message } = await req.json()

        const { data, error } = await resend.emails.send({
            from: 'Amankch <contact@amankch.in>',
            to: ['amankch@gmail.com', 'amankchdev@gmail.com'],
            subject: 'Contact Me Form',
            react: ContactMeEmailTemplate({ name, contactNo, email, message }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
