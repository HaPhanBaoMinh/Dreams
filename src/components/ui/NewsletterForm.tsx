"use client";

interface NewsletterFormProps {
  variant?: "light" | "dark";
}

export function NewsletterForm({ variant = "dark" }: NewsletterFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder="Email của bạn"
        className={`flex-1 border-b bg-transparent px-0 py-3 text-base font-body focus:outline-none transition-colors ${
          variant === "dark"
            ? "border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900"
            : "border-white/40 text-white placeholder:text-white/60 focus:border-white"
        }`}
      />
      <button
        type="submit"
        className={`text-base font-body font-medium tracking-wide uppercase transition-colors py-3 ${
          variant === "dark"
            ? "text-neutral-900 hover:text-secondary-600"
            : "text-white hover:text-secondary-300"
        }`}
      >
        Đăng ký
      </button>
    </form>
  );
}
