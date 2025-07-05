import Link from "next/link";
import { House, Search, ShoppingCart, User } from "@deemlol/next-icons";
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-primary shadow-t p-2 flex justify-around border-t z-50 h-16 items-center">
      <Link href="/" className="text-center text-secondary"><House size={24}  /></Link>
      <Link href="/categories" className="text-center text-secondary"><Search size={24} /></Link>
      <Link href="/cart" className="text-center text-secondary"><ShoppingCart size={24} /></Link>
      <Link href="/account" className="text-center text-secondary"><User size={24} /></Link>
    </footer>
  );
}
