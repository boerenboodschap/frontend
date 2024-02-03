export default function Card({ children }: any) {
  return (
    <div className="flex h-full w-full rounded-xl bg-background-50 outline outline-1 outline-gray-400">
      {children}
    </div>
  );
}
