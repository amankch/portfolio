"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// import { toast } from "@/components//use-toast";

import { useForm } from "react-hook-form";

export type ContatcMeFormFields = {
  name: string;
  email: string;
  contactNo: string;
  message: string;
  error?: string;
};

function ContactMe() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContatcMeFormFields>();

  const { toast } = useToast();

  const onSubmit = async (data: ContatcMeFormFields) => {
    try {
      console.log(data);
      const res = await fetch("/api/send/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data?.name ?? "",
          contactNo: data?.contactNo ?? "",
          email: data?.email ?? "",
          message: data?.message ?? "",
        }),
      });
      const resData = await res.json();
      console.log({ resData });
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      reset();
    } catch (error: unknown) {
      console.error("Error in sending mail and error is:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            Want to discuss about your project/app, just fill out the form
            below:-
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message as string}
                </p>
              )}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message as string}
                </p>
              )}
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Your Mobile No."
                {...register("contactNo", {
                  required: "Mobile no. is required",
                  pattern: {
                    value: /^[0-9]{10,}$/i,
                    message: "Invalid mobile number",
                  },
                })}
              />
              {errors.contactNo && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contactNo.message as string}
                </p>
              )}
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message as string}
                </p>
              )}
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

export default ContactMe;
