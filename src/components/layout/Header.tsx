import Link from "next/link";

export const Header = () => {
  return (
    <header className="h-18 justify-berween flex items-center border-b-2 border-border bg-white px-4 md:h-20 md:px-8">
      <Link
        href={""}
        className="text-2xl font-bold text-primary hover:cursor-pointer md:text-3xl"
      >
        Solvify
      </Link>
    </header>
  );
};
