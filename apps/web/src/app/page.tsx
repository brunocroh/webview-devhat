import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2 mt-6 overflow-x-none overflow-hidden">
      <div className="w-full max-w-xl h-full mt-12">
        <Card className="m-2">
          <CardHeader className="flex items-center">
            <CardTitle>Demo Select</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col w-full gap-3">
            <Link href="/voice" className="w-full">
              <Button className="w-full">
                Go to Voice <ArrowRight />
              </Button>
            </Link>
            <Link href="/nes" className="w-full">
              <Button className="w-full">
                Go to NES <ArrowRight />
              </Button>
            </Link>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </main>
  );
}
