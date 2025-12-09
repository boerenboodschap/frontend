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
      className="justify-content-center flex w-full select-none flex-col place-content-center place-items-stretch gap-y-0.5 text-center"
    >
      <div className="text-lg">{props.icon}</div>
      <div className="w-full">
        <span
          className={
            activeRoute
              ? "w-full rounded-full bg-accent-200 px-1.5 py-0.5 "
              : ""
          }
        >
          {props.text}
        </span>
      </div>
    </Link>
  );
}
