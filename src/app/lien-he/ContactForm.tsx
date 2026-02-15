"use client";

import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-xs uppercase tracking-[0.12em] text-neutral-400 mb-2 font-body">
            Họ và tên *
          </label>
          <input
            type="text"
            required
            placeholder="Nguyễn Văn A"
            className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-base font-body text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.12em] text-neutral-400 mb-2 font-body">
            Số điện thoại *
          </label>
          <input
            type="tel"
            required
            placeholder="0901 234 567"
            className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-base font-body text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.12em] text-neutral-400 mb-2 font-body">
          Email *
        </label>
        <input
          type="email"
          required
          placeholder="email@example.com"
          className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-base font-body text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.12em] text-neutral-400 mb-2 font-body">
          Ngày dự kiến tổ chức
        </label>
        <input
          type="date"
          className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-base font-body text-neutral-900 focus:border-neutral-900 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.12em] text-neutral-400 mb-3 font-body">
          Dịch vụ quan tâm
        </label>
        <div className="grid grid-cols-2 gap-3">
          {[
            "Bưng quả trọn gói",
            "Áo dài cô dâu",
            "Áo dài bê tráp",
            "Phụ kiện cưới",
          ].map((service) => (
            <label
              key={service}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded-none border-neutral-300 text-neutral-900 focus:ring-neutral-900"
              />
              <span className="text-base text-neutral-600 font-body group-hover:text-neutral-900 transition-colors">
                {service}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.12em] text-neutral-400 mb-2 font-body">
          Lời nhắn
        </label>
        <textarea
          rows={4}
          placeholder="Chia sẻ thêm về ngày cưới của bạn..."
          className="w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-base font-body text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none transition-colors resize-none"
        />
      </div>

      <Button size="lg" className="w-full mt-2">
        Gửi yêu cầu tư vấn
      </Button>
    </form>
  );
}
