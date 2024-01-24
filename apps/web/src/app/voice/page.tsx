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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { speak } from "@repo/elevenlabs";
import { useCallback, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [voice, setVoice] = useState("");
  const [message, setMessage] = useState("");

  const handleSpeak = useCallback(async () => {
    const audio = await speak(message, voice);
    const url = URL.createObjectURL(new Blob([audio]));

    setLoaded(true);

    if (videoRef.current) {
      videoRef.current.src = url;
    }
  }, [message, voice]);

  return (
    <main className="flex min-h-screen flex-col items-center p-2 mt-6">
      <div className="w-full max-w-xl h-full mt-12">
        <Card className="m-2">
          <CardHeader>
            <CardTitle>Voice</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <Select onValueChange={setVoice}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Escolha uma voz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="f2ZMXxlhinxO7WVysdcJ">Ale</SelectItem>
                  <SelectItem value="Jx8YyCmL25lLJ635eG8w">Nico</SelectItem>
                </SelectContent>
              </Select>
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></Input>

              <video
                className={loaded ? "" : "hidden"}
                ref={videoRef}
                id="videoPlayer"
                width="320"
                height="240"
                controls
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSpeak}>Criar</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
