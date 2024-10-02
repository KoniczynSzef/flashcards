import { WebhookEvent } from "@clerk/nextjs/server";

export async function POST(request: Request) {
    const payload: WebhookEvent = await request.json();

    return {
        status: 200,
        body: {
            message: JSON.stringify(payload),
        },
    };
}

export async function GET() {
    return new Response("GET request", { status: 200 });
}
