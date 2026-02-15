"use client";

interface NewsletterFormProps {
  variant?: "light" | "dark";
}

export function NewsletterForm({ variant = "dark" }: NewsletterFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  if (variant === "dark") {
    return (
      <form className="flex w-full max-w-md gap-2" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email của bạn..."
          className="flex-1 rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
        <button
          type="submit"
          className="rounded-md bg-primary-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-600 transition-colors whitespace-nowrap"
        >
          Đăng ký
        </button>
      </form>
    );
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder="Email của bạn..."
        className="flex-1 rounded-full px-5 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-400"
      />
      <button
        type="submit"
        className="rounded-full bg-secondary-500 px-6 py-3 text-sm font-semibold text-white hover:bg-secondary-600 transition-colors whitespace-nowrap"
      >
        Đăng ký nhận tư vấn
      </button>
    </form>
  );
}
