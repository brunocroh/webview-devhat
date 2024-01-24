"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { speak } from "@repo/elevenlabs";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleSpeak = useCallback(async () => {
    console.log({ message });
    const audio = await speak(message);
    const url = URL.createObjectURL(new Blob([audio]));

    videoRef.current.src = url;

    console.log({ audio });
  }, [message]);

  return (
    <main className="flex min-h-screen flex-col items-center p-2 mt-6">
      <div className="w-full h-full mt-12">
        <Card className="m-2">
          <CardHeader>
            <CardTitle>Voice</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></Input>
            <video
              ref={videoRef}
              id="videoPlayer"
              width="320"
              height="240"
              controls
            >
              Your browser does not support the video tag.
            </video>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSpeak}>Criar</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}