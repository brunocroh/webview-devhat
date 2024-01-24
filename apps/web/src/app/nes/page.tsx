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
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { ChangeEvent, useRef } from "react";

declare var NesJs: any;

const Joypad = {
  A: 0,
  B: 1,
  SELECT: 2,
  START: 3,
  UP: 4,
  DOWN: 5,
  LEFT: 6,
  RIGHT: 7,
};

export default function Home() {
  const NES = useRef<typeof NesJs>(null);
  const nesRef = useRef<typeof NesJs>(null);
  const gameLoaded = useRef(null);
  const canvasRef = useRef(null);

  const startGame = () => {
    var buffer = gameLoaded.current;
    NES.current = NesJs;
    nesRef.current = new NesJs.Nes();

    nesRef.current.setRom(new NesJs.Rom(buffer));
    nesRef.current.setDisplay(
      new NesJs.Display(document.getElementById("gameCanvas")),
    );
    nesRef.current.setAudio(new NesJs.Audio());

    window.onkeydown = function (e) {
      nesRef.current.handleKeyDown(e);
    };
    window.onkeyup = function (e) {
      nesRef.current.handleKeyUp(e);
    };

    nesRef.current.bootup();
    nesRef.current.run();
  };

  const handleFileSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files: File[] = Array.from(e.target.files);
      if (files.length) {
        files[0].arrayBuffer().then((buffer: any) => {
          gameLoaded.current = buffer;
        });
      }
    }
  };

  const pressPadButton = (KEY: number) => {
    if (!nesRef.current) return;
    nesRef.current.pad1.pressButton(KEY);
  };

  const releasePadButton = (KEY: number) => {
    if (!nesRef.current) return;
    nesRef.current.pad1.releaseButton(KEY);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-2 mt-6">
      <div className="w-full h-full mt-12">
        <Card className="m-2">
          <CardHeader>
            <CardTitle>Nes</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div className="w-full flex flex-row gap-2">
              <Input onChange={handleFileSelected} type="file" />
              <Button onClick={startGame}>Criar</Button>
            </div>
            <div className="w-full items-center">
              <Card className="w-82 h-82 flex items-center">
                <canvas
                  className="w-full h-full"
                  ref={canvasRef}
                  id="gameCanvas"
                ></canvas>
              </Card>
            </div>
            <div className="flex flex-row justify-evenly items-center">
              <div className="flex flex-col w-40 justify-center">
                <div className="flex justify-center w-full">
                  <Button
                    onMouseDown={() => pressPadButton(Joypad.UP)}
                    onClick={() => releasePadButton(Joypad.UP)}
                    onTouchStart={() => pressPadButton(Joypad.UP)}
                    onPress={() => releasePadButton(Joypad.UP)}
                  >
                    <ArrowUp />
                  </Button>
                </div>
                <div className="flex justify-between">
                  <Button
                    onMouseDown={() => pressPadButton(Joypad.LEFT)}
                    onClick={() => releasePadButton(Joypad.LEFT)}
                    onTouchStart={() => pressPadButton(Joypad.LEFT)}
                    onPress={() => releasePadButton(Joypad.LEFT)}
                  >
                    <ArrowLeft />
                  </Button>
                  <Button
                    onMouseDown={() => pressPadButton(Joypad.RIGHT)}
                    onClick={() => releasePadButton(Joypad.RIGHT)}
                    onTouchStart={() => pressPadButton(Joypad.RIGHT)}
                    onPress={() => releasePadButton(Joypad.RIGHT)}
                  >
                    <ArrowRight />
                  </Button>
                </div>
                <div className="flex justify-center w-full">
                  <Button
                    onMouseDown={() => pressPadButton(Joypad.DOWN)}
                    onClick={() => releasePadButton(Joypad.DOWN)}
                    onTouchStart={() => pressPadButton(Joypad.DOWN)}
                    onPress={() => releasePadButton(Joypad.DOWN)}
                  >
                    <ArrowDown />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  onMouseDown={() => pressPadButton(Joypad.START)}
                  onClick={() => releasePadButton(Joypad.START)}
                  onTouchStart={() => pressPadButton(Joypad.START)}
                  onPress={() => releasePadButton(Joypad.START)}
                >
                  START
                </Button>
                <Button
                  onMouseDown={() => pressPadButton(Joypad.SELECT)}
                  onClick={() => releasePadButton(Joypad.SELECT)}
                  onTouchStart={() => pressPadButton(Joypad.SELECT)}
                  onPress={() => releasePadButton(Joypad.SELECT)}
                >
                  Select
                </Button>
              </div>
              <div className="flex flex-row justify-between w-40">
                <div>
                  <Button
                    onMouseDown={() => pressPadButton(Joypad.A)}
                    onClick={() => releasePadButton(Joypad.A)}
                    onTouchStart={() => pressPadButton(Joypad.A)}
                    onPress={() => releasePadButton(Joypad.A)}
                  >
                    A
                  </Button>
                </div>
                <div>
                  <Button
                    onMouseDown={() => pressPadButton(Joypad.B)}
                    onClick={() => releasePadButton(Joypad.B)}
                    onTouchStart={() => pressPadButton(Joypad.B)}
                    onPress={() => releasePadButton(Joypad.B)}
                  >
                    B
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </main>
  );
}
