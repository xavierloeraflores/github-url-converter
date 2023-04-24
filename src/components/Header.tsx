import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  function gitHubOnClick() {
    void router.push("https://github.com/xavierloeraflores");
  }
  return (
    <header className="flex max-h-16 flex-row justify-between bg-slate-800">
      <div className="mx-4  flex">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Github color="white" size={32} />
          <h1 className="hidden font-bold sm:inline-block">GitHub Converter</h1>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/about">About</Link>
          <Link href="https://github.com/xavierloeraflores/github-url-converter">
            GitHub
          </Link>
        </nav>
      </div>
      <HoverCard>
        <HoverCardTrigger className="flex items-center text-sm">
          <span className="hidden sm:inline-block">Created By</span>
          <Button variant="link" onClick={gitHubOnClick}>
            @XavierLoeraFlores
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-60 space-y-1">
          <h3 className="text-center text-sm font-semibold">
            @xavierloeraflores
          </h3>
          I am a Software Engineer based in San Jose, CA.
        </HoverCardContent>
      </HoverCard>
    </header>
  );
};
export default Header;
