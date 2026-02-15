"use client";

import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5 font-body">
            Họ và tên *
          </label>
          <input
            type="text"
            required
            placeholder="Nguyễn Văn A"
            className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm font-body text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5 font-body">
            Số điện thoại *
          </label>
          <input
            type="tel"
            required
            placeholder="0901 234 567"
            className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm font-body text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1.5 font-body">
          Email *
        </label>
        <input
          type="email"
          required
          placeholder="email@example.com"
          className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm font-body text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1.5 font-body">
          Ngày dự kiến tổ chức
        </label>
        <input
          type="date"
          className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm font-body text-neutral-900 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1.5 font-body">
          Dịch vụ quan tâm
        </label>
        <div className="grid grid-cols-2 gap-2">
          {[
            "Bưng quả trọn gói",
            "Áo dài cô dâu",
            "Áo dài bê tráp",
            "Trọn gói lễ cưới",
          ].map((service) => (
            <label
              key={service}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-neutral-300 text-primary-500 focus:ring-primary-500"
              />
              <span className="text-sm text-neutral-600 font-body">
                {service}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1.5 font-body">
          Lời nhắn
        </label>
        <textarea
          rows={4}
          placeholder="Chia sẻ thêm về ngày cưới của bạn..."
          className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm font-body text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 resize-none"
        />
      </div>

      <Button size="lg" className="w-full rounded-lg">
        Gửi yêu cầu tư vấn
      </Button>
    </form>
  );
}
