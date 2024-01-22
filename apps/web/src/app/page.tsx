import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2">
      <div className="z-10 max-w-5xl relative flex-row w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full min-w-80 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <div className="fixed left-1 top-[-20px]  lg:left-[-45px] lg:top-[-45px] flex z-10">
            <Image
              className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/devhat.png"
              alt="Next.js Logo"
              width={110}
              height={25}
              priority
            />
          </div>
          <code className="font-mono font-bold">
            HatTalk/webview by brunocroh
          </code>
        </div>
      </div>
      <Card className="w-full h-full m-1">
        <CardHeader>
          <CardTitle>Teste</CardTitle>
        </CardHeader>
        <CardContent> conteudo </CardContent>
        <CardFooter>
          <Button>Criar</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
