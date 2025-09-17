import { Link, useLocation } from "react-router-dom";

export default function Placeholder() {
  const { pathname } = useLocation();
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Trang đang được xây dựng</h1>
        <p className="mt-4 text-foreground/70">
          Nội dung cho "{pathname}" sẽ được cập nhật theo yêu cầu của bạn. Hãy tiếp tục đưa thêm chỉ dẫn để mình hoàn thiện trang này.
        </p>
        <div className="mt-8 inline-flex rounded-lg border bg-card px-4 py-2 text-sm text-foreground/70">
          <span className="mr-2 inline-flex h-2 w-2 translate-y-1 rounded-full bg-emerald-500"></span>
          Giao diện chung, header, và footer đã sẵn sàng.
        </div>
        <div className="mt-8">
          <Link to="/" className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow hover:shadow-md">
            Quay lại trang chủ
          </Link>
        </div>
      </div>
    </section>
  );
}
