import Link from "next/link";

interface Props {
  href: string;
  icon: string;
  text: string;
}

export default function BottomNavLink(props: Props) {
  return (
    <Link
      href={props.href}
      className="flex aspect-square flex-col place-content-center place-items-stretch text-center active:bg-accent-200 select-none w-full"
    >
      <div className="text-2xl">{props.icon}</div>
      <div>{props.text}</div>
    </Link>
  );
}
