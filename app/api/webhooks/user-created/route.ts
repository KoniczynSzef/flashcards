import { db } from "@/database";
import { UserTable } from "@/database/schema";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";

import { Webhook } from "svix";

export async function POST(request: Request) {
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET_USER_CREATED;

    if (!WEBHOOK_SECRET) {
        throw new Error("Please add WEBHOOK_SECRET");
    }

    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response("Error occured -- no svix headers", {
            status: 400,
        });
    }

    const payload = await request.json();
    const body = JSON.stringify(payload);

    const webhook = new Webhook(WEBHOOK_SECRET);

    let evt: WebhookEvent;

    try {
        evt = webhook.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent;
    } catch (err) {
        console.error("Error verifying webhook:", err);
        return new Response("Error occured", {
            status: 400,
        });
    }

    const eventType = evt.type;

    if (eventType !== "user.created") {
        return new Response("Error occured -- wrong event type", {
            status: 400,
        });
    }

    const data = evt.data;

    try {
        const username =
            data.username ??
            "User#" + crypto.getRandomValues(new Uint32Array(1)).join("");

        await db.insert(UserTable).values({
            username,
            email: data.email_addresses[0].email_address,
            lastLogin: new Date(),
            clerkId: data.id,
        });

    } catch (err) {
        if (err instanceof Error) {
            console.error("Error inserting user:", err.message);
        }

        return new Response("Error occured -- could not insert user", {
            status: 400,
        });
    }

    return new Response(`User ${data.username} created successfully!`, {
        status: 200,
    });
}
