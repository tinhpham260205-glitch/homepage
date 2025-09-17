import { useState } from "react";
import {
  Car,
  BatteryCharging,
  Leaf,
  ShieldCheck,
  Zap,
  MapPin,
  Calendar,
  ChevronRight,
  FileText,
  Image as ImageIcon,
  CheckCircle2,
  CreditCard,
  Clock3,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

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
  const [mode, setMode] = useState<"Đặt trước" | "Đến trực tiếp">("Đặt trước");
  const [license, setLicense] = useState<string>("");
  const [idCard, setIdCard] = useState<string>("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Đặt xe thành công!\nHình thức: ${mode}\nTừ: ${pickup}\nĐến: ${dropoff}\nNgày: ${date}\nLoại xe: ${type}`);
  }

  const cars = [
    {
      name: "Tesla Model 3",
      img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1600&auto=format&fit=crop",
      tag: "Sedan điện",
      price: "1.390.000đ/ngày",
      battery: 86,
      location: "Quận 1, TP.HCM",
    },
    {
      name: "VinFast VF8",
      img: "https://images.unsplash.com/photo-1620891549027-942fdc95b9f1?q=80&w=1600&auto=format&fit=crop",
      tag: "SUV điện",
      price: "1.590.000đ/ngày",
      battery: 72,
      location: "Cầu Giấy, Hà Nội",
    },
    {
      name: "Kia EV6",
      img: "https://images.unsplash.com/photo-1629890346328-9a8c9cfd85b8?q=80&w=1600&auto=format&fit=crop",
      tag: "Crossover",
      price: "1.490.000đ/ngày",
      battery: 64,
      location: "Sơn Trà, Đà Nẵng",
    },
  ];

  const historyData = [
    { hour: "6h", trips: 2 },
    { hour: "9h", trips: 5 },
    { hour: "12h", trips: 3 },
    { hour: "15h", trips: 6 },
    { hour: "18h", trips: 8 },
    { hour: "21h", trips: 4 },
  ];

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
              <div className="mt-3 inline-flex rounded-md border bg-background p-1 text-xs font-medium">
                {["Đặt trước", "Đến trực tiếp"].map((m) => (
                  <button
                    type="button"
                    key={m}
                    onClick={() => setMode(m as typeof mode)}
                    className={
                      "rounded px-3 py-1.5 transition-colors " +
                      (mode === m ? "bg-emerald-50 text-emerald-700 border border-emerald-300" : "text-foreground/70 hover:bg-muted")
                    }
                  >
                    {m}
                  </button>
                ))}
              </div>
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
                    {["Sedan điện", "SUV điện", "Compact"].map((t) => (
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

      {/* Registration & Verification */}
      <section className="container py-16 sm:py-24">
        <SectionTitle
          eyebrow="Đăng ký & xác thực"
          title="Tạo tài khoản trong 1 phút"
          desc="Tải lên giấy phép lái xe và CMND/CCCD. Có thể xác thực nhanh tại điểm thuê với nhân viên."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Thông tin cơ bản</h3>
            <div className="mt-4 grid gap-4">
              <input placeholder="Họ và tên" className="w-full rounded-md border bg-background px-3 py-2" />
              <input type="tel" placeholder="Số điện thoại" className="w-full rounded-md border bg-background px-3 py-2" />
              <input type="email" placeholder="Email" className="w-full rounded-md border bg-background px-3 py-2" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="grid gap-1 text-sm">
                  <span className="flex items-center gap-2 text-foreground/70"><FileText className="h-4 w-4" /> GPLX</span>
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={(e) => setLicense(e.target.files?.[0]?.name ?? "")}
                    className="w-full rounded-md border bg-background px-3 py-2"
                  />
                  {license && <span className="text-xs text-foreground/60">Đã chọn: {license}</span>}
                </label>
                <label className="grid gap-1 text-sm">
                  <span className="flex items-center gap-2 text-foreground/70"><ImageIcon className="h-4 w-4" /> CMND/CCCD</span>
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={(e) => setIdCard(e.target.files?.[0]?.name ?? "")}
                    className="w-full rounded-md border bg-background px-3 py-2"
                  />
                  {idCard && <span className="text-xs text-foreground/60">Đã chọn: {idCard}</span>}
                </label>
              </div>
              <button className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                Tạo tài khoản
              </button>
              <p className="text-xs text-foreground/60">Bảo mật thông tin theo chuẩn PCI DSS.</p>
            </div>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Xác thực nhanh tại điểm</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Mang theo bản gốc GPLX và CCCD</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Xác minh danh tính với nhân viên</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Hoàn tất trong 3 phút</li>
            </ul>
            <div className="mt-6 rounded-lg border bg-muted p-4 text-sm text-foreground/70">
              Hoặc xác thực online qua ứng dụng bằng eKYC.
            </div>
          </div>
        </div>
      </section>

      {/* Booking: Map + List */}
      <section className="bg-gradient-to-b from-muted/60 to-transparent py-16 sm:py-24">
        <div className="container">
          <SectionTitle eyebrow="Đặt xe" title="Tìm điểm thuê trên bản đồ & xe có sẵn" />
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 overflow-hidden rounded-2xl border">
              <div className="aspect-[16/10] bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="border-t p-4">
                <div className="flex items-center gap-2 text-sm text-foreground/70"><MapPin className="h-4 w-4" /> Gợi ý điểm gần bạn: Thủ Đức, Q1, Q7, Cầu Giấy</div>
              </div>
            </div>
            <div className="grid content-start gap-4">
              {cars.map((c) => (
                <div key={c.name} className="group overflow-hidden rounded-xl border bg-card shadow-sm">
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img src={c.img} alt={c.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h3 className="text-base font-semibold">{c.name}</h3>
                        <p className="text-xs text-foreground/60">{c.location}</p>
                      </div>
                      <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-700">{c.tag}</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-foreground/70">
                        <BatteryCharging className="h-4 w-4 text-emerald-600" /> {c.battery}%
                      </div>
                      <span className="font-semibold">{c.price}</span>
                    </div>
                    <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md border bg-background px-3 py-2 text-sm font-medium hover:bg-muted">
                      Chọn xe này
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pickup (Nhận xe) */}
      <section className="container py-16 sm:py-24">
        <SectionTitle eyebrow="Nhận xe" title="Check-in, ký hợp đồng, bàn giao minh bạch" />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: "Check-in tại quầy/ứng dụng", desc: "Quét mã đặt xe và xác thực tài khoản để bắt đầu." },
            { title: "Ký hợp đồng điện tử", desc: "Xem chi tiết điều khoản, ký nhanh trên điện thoại hoặc giấy tại chỗ." },
            { title: "Bàn giao cùng nhân viên", desc: "Kiểm tra tình trạng xe và chụp ảnh lưu hồ sơ trước khi nhận chìa khóa." },
          ].map((s, i) => (
            <div key={i} className="relative rounded-2xl border bg-card p-6">
              <span className="absolute -top-3 left-6 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground shadow">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Return (Trả xe) */}
      <section className="bg-gradient-to-b from-transparent to-muted/60 py-16 sm:py-24">
        <div className="container">
          <SectionTitle eyebrow="Trả xe" title="Trả xe đúng điểm và hoàn tất thanh toán" />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-card p-6"><p className="text-sm"><MapPin className="mr-2 inline h-4 w-4 text-emerald-600" /> Trả xe tại đúng điểm đã thuê để tránh phụ phí.</p></div>
            <div className="rounded-2xl border bg-card p-6"><p className="text-sm"><CheckCircle2 className="mr-2 inline h-4 w-4 text-emerald-600" /> Nhân viên kiểm tra nhanh tình trạng xe và xác nhận.</p></div>
            <div className="rounded-2xl border bg-card p-6"><p className="text-sm"><CreditCard className="mr-2 inline h-4 w-4 text-emerald-600" /> Thanh toán chi phí phát sinh (nếu có) ngay tại quầy/ứng dụng.</p></div>
          </div>
        </div>
      </section>

      {/* History & Personal Analytics */}
      <section className="container py-16 sm:py-24">
        <SectionTitle
          eyebrow="L���ch sử & phân tích cá nhân"
          title="Theo dõi hành trình và thói quen thuê"
          desc="Xem lại các chuyến trước, chi phí và thời điểm thường thuê (giờ cao/thấp điểm)."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-card p-6 shadow-sm md:col-span-2">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">Phân bổ theo khung giờ</h3>
              <div className="inline-flex items-center gap-2 rounded-md border bg-background px-2 py-1 text-xs text-foreground/70">
                <Clock3 className="h-3.5 w-3.5" /> 30 ngày gần đây
              </div>
            </div>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={historyData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-40" />
                  <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip cursor={{ stroke: "#10b981", strokeWidth: 1 }} />
                  <Area type="monotone" dataKey="trips" stroke="#10b981" fillOpacity={1} fill="url(#g)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="grid content-start gap-4">
            <div className="rounded-2xl border bg-card p-6">
              <p className="text-sm text-foreground/70">Tổng chuyến</p>
              <p className="mt-1 text-3xl font-bold">24</p>
              <p className="text-xs text-emerald-700">+12% so với tháng trước</p>
            </div>
            <div className="rounded-2xl border bg-card p-6">
              <p className="text-sm text-foreground/70">Chi phí trung bình</p>
              <p className="mt-1 text-3xl font-bold">1.45 triệu</p>
              <p className="text-xs text-emerald-700">-5% nhờ ưu đãi</p>
            </div>
            <div className="rounded-2xl border bg-card p-6">
              <p className="text-sm text-foreground/70">Khung giờ ưa thích</p>
              <p className="mt-1 text-3xl font-bold">18:00</p>
              <p className="text-xs text-foreground/60">Giờ cao điểm</p>
            </div>
          </div>
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
