import Image from "next/image";

type BrowserFrameProps = {
  src: string;
  alt: string;
  /** Live URL — its hostname is shown in the address bar */
  url: string;
  sizes: string;
  /** Natural screenshot size [w, h]; lets a tall page pan on hover */
  shot?: number[];
  /** Tailwind aspect class for the visible window */
  aspect?: string;
  priority?: boolean;
};

/* A screenshot shown as a page in a browser window, with the real host in
   the address bar. Inside a `.group`, hovering scrolls the page through
   the window (see .shot-page in globals.css). */
export default function BrowserFrame({
  src,
  alt,
  url,
  sizes,
  shot,
  aspect = "aspect-[16/10]",
  priority = false,
}: BrowserFrameProps) {
  const host = new URL(url).hostname.replace(/^www\./, "");

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-surface">
      <div className="flex items-center gap-3 border-b border-line px-3 py-2">
        {/* three window dots drawn by one element (shadows) to keep the DOM small */}
        <span
          aria-hidden="true"
          className="ms-0.5 h-2 w-2 shrink-0 rounded-full bg-line shadow-[14px_0_0_var(--color-line),28px_0_0_var(--color-line)] me-7"
        />
        <span className="truncate rounded-sm bg-sunken px-2 py-0.5 font-mono text-2xs text-muted">
          {host}
        </span>
      </div>
      <div className={`shot-frame relative w-full overflow-hidden ${aspect}`}>
        <div
          className="shot-page relative w-full"
          style={{ aspectRatio: shot ? `${shot[0]} / ${shot[1]}` : undefined, height: shot ? undefined : "100%" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
