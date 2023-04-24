import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import { useRouter } from "next/router";
const Footer: React.FC = () => {
  const router = useRouter();

  function T3Onclick() {
    void router.push("https://create.t3.gg");
  }
  return (
    <footer className="flex max-h-4 flex-row items-center justify-between p-4">
      <span className="text-lg">
        ⚡ Made by Xavier using the{" "}
        <HoverCard>
          <HoverCardTrigger className="underline">
            {" "}
            <Button
              variant="link"
              onClick={T3Onclick}
              className="m-0 p-0 text-lg"
            >
              T3 Stack
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 space-y-1">
            <h3 className="text-center font-semibold">T3 Stack</h3>
            <p>
              The “T3 Stack” is a web development stack made by Theo focused on
              simplicity, modularity, and full-stack typesafety. The core pieces
              are Next.js and TypeScript. Tailwind CSS is almost always
              included.
            </p>
          </HoverCardContent>
        </HoverCard>
      </span>
    </footer>
  );
};
export default Footer;
