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
    <main className="flex min-h-screen flex-col items-center p-2 mt-6 overflow-x-none">
      <div className="w-full h-full mt-12">
        <Card className="m-2">
          <CardHeader>
            <CardTitle>Teste</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <Link href="/voice">
              <Button>
                Go to Voice <ArrowRight />
              </Button>
            </Link>
            <Link href="/nes">
              <Button>
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
