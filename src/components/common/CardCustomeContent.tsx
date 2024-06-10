"use client";
import { cn } from "@/lib/utils";
import React from "react";
export default function CardCustomeContent({
  children,
  color,
}: Readonly<{
  children: React.ReactNode;
  color?: string;
}>) {
  return (
    <div
      className={cn(
        "p-4 border-[0.08rem] md:w-fit w-full my-4 md:my-8 rounded-md",
        `border-${color}-200 dark:border-${color}-700`,
        `text-${color}-600`
      )}
    >
      {children}
    </div>
  );
}
