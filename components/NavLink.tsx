import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export default function BottomNavLink(props: Props) {
  return (
    <Link
      href={props.href}
      className="flex h-full w-full items-center justify-center p-4 hover:text-primary-700"
    >
      {props.text}
    </Link>
  );
}
