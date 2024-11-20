import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

export default function NavLink({
  setSelected,
  selected,
  children,
  href,
  value,
}) {
  return (
    <MotionLink
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      href={href}
      onClick={() => {
        setSelected(value);
      }}
      className={`writing-vertical h-24 shrink-0 flex items-center justify-center border-r-2 text-sm transition-all w-full ${
        selected === value
          ? "bg-zinc-800 border-indigo-500 opacity-100"
          : "border-transparent hover:border-r-zinc-50 opacity-50 hover:bg-zinc-900"
      }`}
    >
      {children}
    </MotionLink>
  );
}
