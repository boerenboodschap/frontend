"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  icon: string;
  text: string;
}

export default function BottomNavLink(props: Props) {
  const pathname = usePathname();
  const activeRoute: boolean = pathname === props.href;

  return (
    <Link
      href={props.href}
      className="justify-content-center flex w-full select-none flex-col place-content-center place-items-stretch gap-1 text-center"
    >
      <div className="text-lg">{props.icon}</div>
      <div className="w-full">
        <span
          className={
            activeRoute ? "w-max rounded-full bg-accent-200 px-2 py-1 " : ""
          }
        >
          {props.text}
        </span>
      </div>
    </Link>
  );
}
