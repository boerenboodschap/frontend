import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export default function BottomNavLink(props: Props) {
  return (
    <Link href={props.href} className="hover:text-primary-700">
      {props.text}
    </Link>
  );
}
