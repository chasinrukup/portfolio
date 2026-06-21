import clsx from "clsx";

type Props = {
  className?: string;
  vertical?: boolean;
};

export default function Hairline({ className, vertical = false }: Props) {
  return (
    <div
      aria-hidden
      className={clsx(
        vertical ? "w-px h-full" : "h-px w-full",
        "bg-ink-hairline",
        className
      )}
    />
  );
}
