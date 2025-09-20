import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Car, History, Gift, Hand } from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();
  const name = user?.name ?? "bạn";
  return (
    <section className="container py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold">Xin chào, {name} <span className="inline-block">👋</span></h1>
        <p className="mt-2 text-foreground/70">Bạn muốn làm gì tiếp theo?</p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Link to="/dat-xe" className="group rounded-xl border bg-card p-5 transition hover:shadow">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500/10 text-emerald-700"><Car className="h-5 w-5" /></div>
              <div>
                <h3 className="font-semibold">Đặt xe nhanh</h3>
                <p className="text-xs text-foreground/60">Chọn địa điểm và loại xe</p>
              </div>
            </div>
          </Link>
          <Link to="/lich-su" className="group rounded-xl border bg-card p-5 transition hover:shadow">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500/10 text-emerald-700"><History className="h-5 w-5" /></div>
              <div>
                <h3 className="font-semibold">Xem lịch sử</h3>
                <p className="text-xs text-foreground/60">Các chuyến đã thuê</p>
              </div>
            </div>
          </Link>
          <Link to="/uu-dai" className="group rounded-xl border bg-card p-5 transition hover:shadow">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500/10 text-emerald-700"><Gift className="h-5 w-5" /></div>
              <div>
                <h3 className="font-semibold">Ưu đãi dành riêng</h3>
                <p className="text-xs text-foreground/60">Mã giảm giá cho bạn</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
