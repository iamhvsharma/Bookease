"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Mahendra Kumawat",
    role: "Developer",
    content:
      "Bookease is a simple and efficient scheduling tool that helps you manage your time and appointments with ease.",
    image: "https://avatars.githubusercontent.com/u/117855423?v=4",
  },
  {
    name: "Kartik Mehta",
    role: "UI/UX Designer",
    content:
      " I've seen a 30% increase in my meeting bookings since using Bookease. It's a game-changer for sales professionals.",
    image: "https://avatars.githubusercontent.com/u/125860170?v=4",
  },
  {
    name: "Alex",
    role: "Marketing for Startups",
    content:
      "Bookease has helped me save time and increase my productivity. I can now focus on what matters most.",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Jane Doe",
    role: "Sales Professional",
    content:
      "I really like the simplicity of Bookease. It's easy to use and has helped me save time and increase my productivity.",
    image: "https://i.pravatar.cc/150?img=4",
  },
];

const TestimonialsCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-full">
              <CardContent className="flex flex-col justify-between h-full p-6">
                <p className="text-gray-600 mb-4">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center mt-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TestimonialsCarousel;
