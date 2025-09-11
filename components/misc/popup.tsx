"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  // DialogOverlay,
  // DialogPortal,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { techStack } from "../ui/tech-stack-marquee";
import { Badge } from "../ui/badge";
import StatusBadge from "./status-badge";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

export default function ProjectPopup({ name, liveurl, githuburl, image, popupImage, description, tech = [], status = ["In Progress"] }: { name: string, liveurl?: string, githuburl?: string, image: string, popupImage: string, description: string, tech?: string[], status?: string[] }) {
  const [loading, setLoading] = useState(true);
  return (

    <Dialog modal={false}>

      <DialogTrigger asChild>
        <button className="lowercase p-2 rounded-full gap-2 flex-wrap hover:rotate-1 hover:scale-105 transition-all duration-300 flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-[#1F1F1F] dark:hover:bg-[#2F2F2F]">
          <Image
            src={image}
            alt={name}
            className='size-9 rounded-xl'
            width={36}
            height={36}
          />
          <span className='mr-2'>{name}</span>
        </button>
      </DialogTrigger>



      <DialogContent className="sm:max-w-md " overlayClasses="fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px]  transition-opacity animate-fade-in" >

        <div className="w-full mb-1 mt-3 relative">
          {loading && (
            <Skeleton className="absolute inset-0 w-full max-h-60 rounded-md" />
          )}


          {popupImage.match(/\.(webm|mp4|ogg)$/i) ? (
            <video
              src={popupImage}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              preload="auto"
              className={cn(
                "rounded-md border shadow-sm object-cover w-full max-h-60 transition-opacity duration-300",
                loading ? "opacity-0" : "opacity-100"
              )}
              onLoadedData={() => setLoading(false)}
            />
          ) : (
            <Image
              src={popupImage}
              alt={`Preview of ${name}`}
              width={600}
              height={350}
              className={cn(
                "rounded-md border shadow-sm object-cover w-full max-h-60 transition-opacity duration-300",
                loading ? "opacity-0" : "opacity-100"
              )}
              unoptimized={popupImage.endsWith('.gif')}
              onLoadingComplete={() => setLoading(false)}
            />
          )}
        </div>

        <DialogHeader>
          <DialogTitle className="pb-1">{name}</DialogTitle>

          {/* Badges  */}
          <div className="flex flex-row flex-wrap gap-2">
            {status.map((s) => (
              <StatusBadge key={s} status={s} />
            ))}
          </div>

          <DialogDescription className=" whitespace-pre-line">
            {description}
          </DialogDescription>
        </DialogHeader>

        {tech?.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-4">
            {tech.map((t) => {
              const match = techStack.find((item) => item.name === t);
              return (
                <Badge
                  key={t}
                  className=" px-3 py-1 text-xs font-medium flex items-center gap-2 rounded-md"
                  variant="outline"
                >
                  <span className="text-sm">{match?.icon}</span>
                  {t}
                </Badge>
              );
            })}
          </div>
        )}

        <div className="flex gap-4 mt-4">
          {liveurl ? <Link
            href={liveurl}
            className="flex items-center gap-1 text-sm font-medium underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4" />
            Live
          </Link> : ''}

          {githuburl ? <Link
            href={githuburl}
            className="flex items-center gap-1 text-sm font-medium underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link> : ''}
        </div>
      </DialogContent>

    </Dialog>
  );
}
