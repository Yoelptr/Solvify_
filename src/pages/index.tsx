import { Button } from "~/components/ui/button";
import { api } from "~/utils/api";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-y-8">
        <h1 className="text-3xl text-primary">Hello word</h1>
        <Button> Test</Button>
        <Button onClick={() => setTheme("dark")} size="icon">
          <Moon />
        </Button>
        <Button onClick={() => setTheme("light")} size="icon">
          <Sun />
        </Button>
      </main>
    </>
  );
}
