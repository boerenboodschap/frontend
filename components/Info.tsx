interface Props {
  type?: string;
  message: string;
}

export default function Info(props: Props) {
  const isError = props.type === "error";
  const isSuccess = props.type === "success";
  return (
    <div
      className={`${
        isSuccess ? "bg-green-500" : isError ? "bg-red-500" : "bg-blue-500"
      }
      rounded-md p-2
      `}
    >
      <div className="text-center">{props.message}</div>
    </div>
  );
}
