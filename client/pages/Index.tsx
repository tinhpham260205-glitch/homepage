import { useState } from "react";
import { Car, BatteryCharging, Leaf, ShieldCheck, Zap, MapPin, Calendar, ChevronRight } from "lucide-react";

function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-foreground/70">{desc}</p>}
    </div>
  );
}

export default function Index() {
  const [pickup, setPickup] = useState("Hà Nội");
  const [dropoff, setDropoff] = useState("Hồ Chí Minh");
  const [date, setDate] = useState("");
  const [type, setType] = useState("SUV điện");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Đặt xe thành công!\nTừ: ${pickup}\nĐến: ${dropoff}\nNgày: ${date}\nLoại xe: ${type}`);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-20 h-[32rem] w-[32rem] rounded-full bg-emerald-300/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-teal-300/30 blur-3xl" />
        </div>
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:gap-8 md:py-24 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm dark:bg-background/80">
              <Zap className="h-3.5 w-3.5" />
              Thuê ô tô điện dễ như gọi đồ ăn
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Thuê xe ô tô điện tiện lợi, xanh và thông minh
            </h1>
            <p className="mt-4 text-foreground/70">
              EVRide mang đến trải nghiệm di chuyển bền vững với đội xe điện hiện đại, giá minh bạch, đặt nhanh trong 30 giây.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-foreground/70 sm:max-w-md">
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600" /> Bảo hiểm toàn diện</li>
              <li className="flex items-center gap-2"><BatteryCharging className="h-4 w-4 text-emerald-600" /> Sạc miễn phí</li>
              <li className="flex items-center gap-2"><Leaf className="h-4 w-4 text-emerald-600" /> Không khí sạch</li>
              <li className="flex items-center gap-2"><Car className="h-4 w-4 text-emerald-600" /> Xe đời mới</li>
            </ul>
          </div>

          {/* Booking card */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 opacity-30 blur-xl" />
            <form onSubmit={submit} className="relative rounded-2xl border bg-card/80 p-6 shadow-xl backdrop-blur">
              <h3 className="text-lg font-semibold">Đặt xe ngay</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="grid gap-1 text-sm">
                  <span className="flex items-center gap-2 text-foreground/70"><MapPin className="h-4 w-4" /> Điểm đón</span>
                  <select value={pickup} onChange={(e) => setPickup(e.target.value)} className="w-full rounded-md border bg-background px-3 py-2">
                    <option>Hà Nội</option>
                    <option>Đà Nẵng</option>
                    <option>Hồ Chí Minh</option>
                  </select>
                </label>
                <label className="grid gap-1 text-sm">
                  <span className="flex items-center gap-2 text-foreground/70"><MapPin className="h-4 w-4" /> Điểm trả</span>
                  <select value={dropoff} onChange={(e) => setDropoff(e.target.value)} className="w-full rounded-md border bg-background px-3 py-2">
                    <option>Hồ Chí Minh</option>
                    <option>Hà Nội</option>
                    <option>Đà Nẵng</option>
                  </select>
                </label>
                <label className="grid gap-1 text-sm sm:col-span-2">
                  <span className="flex items-center gap-2 text-foreground/70"><Calendar className="h-4 w-4" /> Ngày nhận xe</span>
                  <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-md border bg-background px-3 py-2" />
                </label>
                <label className="grid gap-1 text-sm sm:col-span-2">
                  <span className="text-foreground/70">Loại xe</span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      "Sedan điện",
                      "SUV điện",
                      "Compact",
                    ].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setType(t)}
                        className={
                          "rounded-md border px-3 py-2 text-sm transition-colors " +
                          (type === t ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "hover:bg-muted")
                        }
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </label>
              </div>
              <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 font-semibold text-primary-foreground shadow-lg shadow-emerald-200/60 hover:shadow-emerald-300/60">
                Tìm xe phù hợp <ChevronRight className="h-4 w-4" />
              </button>
              <p className="mt-2 text-center text-xs text-foreground/60">Không phí ẩn, hủy miễn phí trong 24h</p>
            </form>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-16 sm:py-24">
        <SectionTitle
          eyebrow="Lợi ích vượt trội"
          title="Tại sao chọn xe điện EVRide?"
          desc="Giải pháp di chuyển bền vững cho mọi hành trình, từ công việc đến du lịch."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: BatteryCharging,
              title: "Sạc miễn phí",
              desc: "H��� thống đối tác trạm sạc phủ khắp, tặng kèm thẻ sạc.",
            },
            { icon: ShieldCheck, title: "An toàn tối đa", desc: "Cảm biến, hỗ trợ lái, bảo hiểm toàn diện." },
            { icon: Leaf, title: "Thân thiện môi trường", desc: "Giảm phát thải CO₂ và tiếng ồn khi di chuyển." },
            { icon: Zap, title: "Vận hành mạnh mẽ", desc: "Mô-men xoắn tức thì, trải nghiệm lái thú vị." },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-700">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet */}
      <section className="bg-gradient-to-b from-muted/60 to-transparent py-16 sm:py-24">
        <div className="container">
          <SectionTitle eyebrow="Đội xe nổi bật" title="Chọn chiếc phù hợp với bạn" />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                name: "Tesla Model 3",
                img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1600&auto=format&fit=crop",
                tag: "Sedan điện",
                price: "1.390.000đ/ngày",
              },
              {
                name: "VinFast VF8",
                img: "https://images.unsplash.com/photo-1620891549027-942fdc95b9f1?q=80&w=1600&auto=format&fit=crop",
                tag: "SUV điện",
                price: "1.590.000đ/ngày",
              },
              {
                name: "Kia EV6",
                img: "https://images.unsplash.com/photo-1629890346328-9a8c9cfd85b8?q=80&w=1600&auto=format&fit=crop",
                tag: "Crossover",
                price: "1.490.000đ/ngày",
              },
            ].map((c) => (
              <div key={c.name} className="group overflow-hidden rounded-2xl border bg-card shadow-sm">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img src={c.img} alt={c.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{c.name}</h3>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700">{c.tag}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-foreground/70">Từ</span>
                    <span className="font-semibold">{c.price}</span>
                  </div>
                  <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border bg-background px-3 py-2 text-sm font-medium hover:bg-muted">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container py-16 sm:py-24">
        <SectionTitle eyebrow="Quy trình" title="Đặt xe trong 3 bước" />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { step: "01", title: "Chọn điểm đón & xe", desc: "Nhập địa điểm, ngày giờ và loại xe mong muốn." },
            { step: "02", title: "Xác nhận & thanh toán", desc: "Giá hiển thị minh bạch, thanh toán an toàn." },
            { step: "03", title: "Nhận xe & tận hưởng", desc: "Tài xế/điểm nhận xe theo yêu cầu của bạn." },
          ].map((s) => (
            <div key={s.step} className="relative rounded-2xl border bg-card p-6">
              <span className="absolute -top-3 left-6 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground shadow">{s.step}</span>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10" />
        <div className="container grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold tracking-tight">Sẵn sàng cho hành trình xanh?</h3>
            <p className="mt-3 text-foreground/70">Đặt xe ô tô điện ngay hôm nay để cảm nhận sự êm ái, tiết kiệm và hiện đại.</p>
          </div>
          <div className="flex justify-end">
            <a href="#" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-lg shadow-emerald-200/60 hover:shadow-emerald-300/60">
              Bắt đầu đặt xe
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
