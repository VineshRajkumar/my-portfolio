
export default function CurrentTime() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
  <div className="text-[13px] max-[410px]:text-[15px] text-gray-700 dark:text-gray-400 normal-case">Pune, {time}</div>
  );
}

