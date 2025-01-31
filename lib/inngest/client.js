import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "spenzly",
name: "Spenzly",
retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2, // Maximum 5 attempts
}),
 });
