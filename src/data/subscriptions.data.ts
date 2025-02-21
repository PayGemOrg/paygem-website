import { Subscription } from "../pages/_components/SubscriptionCard";

// subscriptions.data.ts
export const subscriptions: Subscription[] = [
    {
        id: "1",
        name: "Premium Service A",
        description: "Access to premium features and content",
        amount: 0.1,
        nextPayment: "2024-01-30",
        status: "active",
    },
    {
        id: "2",
        name: "Service B Plus",
        description: "Enhanced service package",
        amount: 0.05,
        nextPayment: "2024-01-30",
        status: "paused",
    },
    {
        id: "3",
        name: "Premium Service A",
        description: "Access to premium features and content",
        amount: 0.1,
        nextPayment: "2024-01-30",
        status: "active",
    },
];
