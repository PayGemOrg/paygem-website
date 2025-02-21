"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Wrench, ListChecks, LineChart } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "./card"

const steps = [
  {
    icon: Wrench,
    title: "Create a Service",
    description: "Define your offerings and set up services for customers to subscribe to.",
  },
  {
    icon: ListChecks,
    title: "Add Plans",
    description: "Customize subscription plans with pricing, billing cycles, and features.",
  },
  {
    icon: LineChart,
    title: "Monitor Earnings",
    description: "Track your revenue, manage subscriptions, and withdraw funds effortlessly.",
  },
]

export const HowItWorksForMerchants: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background to-primary/5">
      <div className="container px-4 md:px-6">
        <h2 className="text-black text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-black to-[#ffffff]">
          How It Works for Merchants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

