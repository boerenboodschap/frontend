export default function ButtonPrimary({ children }: any) {
  return (
    <button className="flex h-full w-fit self-center rounded-full bg-primary-300 p-2 px-4 outline outline-1 outline-gray-400 hover:bg-primary-300/75">
      {children}
    </button>
  );
}
