import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-primary shadow-md h-16">
      <Link href="/">
        <span className="text-xl font-bold text-secondary">MuteShop</span>
      </Link>
    </header>
  );
}