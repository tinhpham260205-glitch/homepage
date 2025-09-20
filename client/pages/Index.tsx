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
  ChevronDown,
  Search,
  FileText,
  Image as ImageIcon,
  CheckCircle2,
  CreditCard,
  Clock3,
  QrCode,
  FileSignature,
  Handshake,
  Camera,
  ReceiptText,
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
import LeafletMap from "@/components/map/LeafletMap";

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
    alert(`Đặt xe thành công!\nHình thức: ${mode}\nT���: ${pickup}\nĐến: ${dropoff}\nNgày: ${date}\nLoại xe: ${type}`);
  }

  const [hoveredCar, setHoveredCar] = useState<number | null>(null);

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
      <section className="relative overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1606661344937-6d8f1f9a4a5e?q=80&w=1920&auto=format&fit=crop"
            alt="EV hero"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/20" />
        </div>
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:gap-8 md:py-24 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm dark:bg-background/80">
              <Zap className="h-3.5 w-3.5" />
              Thuê ô tô điện dễ như gọi đồ ăn
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Thuê Xe Điện <span className="text-emerald-400">Lái Tương Lai</span>
            </h1>
            <p className="mt-4 text-white/80">
              Truy cập xe điện cao cấp tại các trạm khắp thành phố. Bền vững, giá dễ chịu và luôn sẵn sàng cho hành trình của bạn.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-white/80 sm:max-w-md">
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-500" /> Bảo hiểm toàn diện</li>
              <li className="flex items-center gap-2"><BatteryCharging className="h-4 w-4 text-emerald-500" /> Sạc miễn phí</li>
              <li className="flex items-center gap-2"><Leaf className="h-4 w-4 text-emerald-500" /> Không khí sạch</li>
              <li className="flex items-center gap-2"><Car className="h-4 w-4 text-emerald-500" /> Xe đời mới</li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#tim-tram" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground shadow-lg shadow-emerald-200/50 hover:shadow-emerald-300/60">
                <MapPin className="h-4 w-4" /> Tìm Trạm Xe
              </a>
              <a href="#huong-dan" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10">
                Cách Thức Hoạt Động
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-white/80 sm:max-w-md">
              <div>
                <div className="text-2xl font-extrabold text-white">500+</div>
                <div className="text-xs">Trạm</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white">50k+</div>
                <div className="text-xs">Người dùng</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white">99%</div>
                <div className="text-xs">Hài lòng</div>
              </div>
            </div>
          </div>

          {/* Booking card */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 opacity-30 blur-xl" />
            <form onSubmit={submit} className="relative rounded-2xl border border-white/10 bg-slate-900/80 p-6 text-white shadow-xl backdrop-blur dark:border-border dark:bg-card/80 dark:text-foreground">
              <h3 className="text-lg font-semibold">Đặt xe ngay</h3>
              <div className="mt-3 inline-flex rounded-md border border-white/10 bg-slate-900/50 p-1 text-xs font-medium dark:border-border dark:bg-background">
                {["Đặt trước", "Đến trực tiếp"].map((m) => (
                  <button
                    type="button"
                    key={m}
                    onClick={() => setMode(m as typeof mode)}
                    className={
                      "rounded px-3 py-1.5 transition-colors " +
                      (mode === m ? "bg-emerald-50 text-emerald-700 border border-emerald-300" : "text-foreground/80 hover:bg-muted")
                    }
                  >
                    {m}
                  </button>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="grid gap-1 text-sm">
                  <span className="flex items-center gap-2 text-foreground/80"><MapPin className="h-4 w-4" /> Điểm đón</span>
                  <select value={pickup} onChange={(e) => setPickup(e.target.value)} className="w-full rounded-md border bg-background px-3 py-2">
                    <option>Hà Nội</option>
                    <option>Đà Nẵng</option>
                    <option>Hồ Chí Minh</option>
                  </select>
                </label>
                <label className="grid gap-1 text-sm">
                  <span className="flex items-center gap-2 text-foreground/80"><MapPin className="h-4 w-4" /> Điểm trả</span>
                  <select value={dropoff} onChange={(e) => setDropoff(e.target.value)} className="w-full rounded-md border bg-background px-3 py-2">
                    <option>Hồ Chí Minh</option>
                    <option>Hà Nội</option>
                    <option>Đà Nẵng</option>
                  </select>
                </label>
                <label className="grid gap-1 text-sm sm:col-span-2">
                  <span className="flex items-center gap-2 text-foreground/80"><Calendar className="h-4 w-4" /> Ngày nhận xe</span>
                  <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-md border bg-background px-3 py-2" />
                </label>
                <label className="grid gap-1 text-sm sm:col-span-2">
                  <span className="text-foreground/80">Loại xe</span>
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
              <p className="mt-2 text-center text-xs text-foreground/70">Không phí ẩn, hủy miễn phí trong 24h</p>
            </form>
          </div>
        </div>
      </section>


      {/* Booking: Map + List (redesigned) */}
      <section id="tim-tram" className="bg-gradient-to-b from-muted/60 to-transparent py-16 sm:py-24">
        <div className="container">
          <SectionTitle eyebrow="Đặt xe" title="Tìm điểm thuê trên bản đồ & xe có sẵn" />

          {/* Search + filters */}
          <div className="mx-auto mt-8 max-w-6xl">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <label className="relative col-span-1 sm:col-span-2 lg:col-span-4">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
                <input
                  placeholder="Tìm kiếm"
                  className="w-full rounded-lg border bg-background pl-9 pr-3 py-2.5 shadow-sm"
                />
              </label>
              {[
                { label: "Loại xe" },
                { label: "Giá" },
                { label: "Dung lượng pin" },
              ].map((f) => (
                <button
                  key={f.label}
                  className="inline-flex items-center justify-between gap-2 rounded-lg border bg-card px-3 py-2 text-sm shadow-sm hover:bg-muted"
                >
                  {f.label}
                  <ChevronDown className="h-4 w-4 text-foreground/60" />
                </button>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Map card */}
            <div className="lg:col-span-2 overflow-hidden rounded-2xl border bg-card">
              <LeafletMap
                className="aspect-[16/10] bg-white"
                activeIndex={hoveredCar ?? undefined}
                points={[
                  { name: "Dịch Vọng Hậu", position: [21.0289, 105.7904] },
                  { name: "Cầu Giấy", position: [21.032, 105.801] },
                  { name: "Trung Hoà", position: [21.0105, 105.8003] },
                  { name: "Q1 TP.HCM", position: [10.776, 106.7009] },
                ]}
                center={[21.028511, 105.804817]}
                zoom={12}
              />
              <div className="border-t p-4">
                <div className="flex items-center gap-2 text-sm text-foreground/70"><MapPin className="h-4 w-4" /> Gợi ý địa điểm gần bạn: THH ĐÔ, Dịch Vọng Hậu</div>
              </div>
            </div>

            {/* Car list */}
            <div className="grid content-start gap-4 lg:max-h-[28rem] lg:overflow-y-auto pr-1">
              {cars.map((c, i) => (
                <div
                  key={c.name}
                  onMouseEnter={() => setHoveredCar(i)}
                  onMouseLeave={() => setHoveredCar(null)}
                  className="group rounded-xl border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <img src={c.img} alt={c.name} className="h-16 w-28 rounded-lg object-cover" />
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-base font-semibold">{c.name}</h3>
                      <p className="text-xs text-foreground/60">{c.location}</p>
                      <div className="mt-2 flex items-center gap-3 text-xs">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 font-medium text-emerald-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {c.battery}% pin
                        </span>
                        <span className="font-semibold">{c.price}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-end gap-2">
                    <button className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground">Đặt xe ngay</button>
                    <button className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-xs font-medium hover:bg-muted">Chi tiết</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pickup (Nhận xe) */}
      <section id="huong-dan" className="container py-16 sm:py-24">
        <SectionTitle eyebrow="Nhận xe" title="Check-in, ký hợp đồng, bàn giao minh bạch" />

        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border bg-card">
          <ul className="divide-y">
            <li className="flex items-start gap-4 p-5 sm:p-6">
              <span className="mt-1 grid h-7 w-7 place-items-center rounded-full bg-emerald-500 text-xs font-bold text-white">01</span>
              <div className="flex-1">
                <h3 className="flex items-center gap-2 text-base font-semibold">
                  <QrCode className="h-5 w-5 text-emerald-600" /> Check-in tại quầy/ứng dụng
                </h3>
                <p className="mt-1 text-sm text-foreground/70">Quét mã đặt xe để xác nhận thông tin tài khoản.</p>
              </div>
              <Car className="hidden h-8 w-8 text-emerald-600 sm:block" />
            </li>

            <li className="flex items-start gap-4 p-5 sm:p-6">
              <span className="mt-1 grid h-7 w-7 place-items-center rounded-full bg-emerald-500 text-xs font-bold text-white">02</span>
              <div className="flex-1">
                <h3 className="flex items-center gap-2 text-base font-semibold">
                  <FileSignature className="h-5 w-5 text-emerald-600" /> Ký hợp đồng điện tử
                </h3>
                <p className="mt-1 text-sm text-foreground/70">Xem kỹ điều khoản, ký nhanh trên điện thoại hoặc máy tính bảng.</p>
              </div>
            </li>

            <li className="flex items-start gap-4 p-5 sm:p-6">
              <span className="mt-1 grid h-7 w-7 place-items-center rounded-full bg-emerald-500 text-xs font-bold text-white">03</span>
              <div className="flex-1">
                <h3 className="flex items-center gap-2 text-base font-semibold">
                  <Handshake className="h-5 w-5 text-emerald-600" /> Bàn giao cùng nhân viên
                </h3>
                <p className="mt-1 text-sm text-foreground/70">Kiểm tra tình trạng xe và chụp ảnh trước khi nhận khóa.</p>
              </div>
            </li>

            <li className="flex items-start gap-4 p-5 sm:p-6">
              <span className="mt-1 grid h-7 w-7 place-items-center rounded-full bg-emerald-500 text-xs font-bold text-white">04</span>
              <div className="flex-1">
                <h3 className="flex items-center gap-2 text-base font-semibold">
                  <MapPin className="h-5 w-5 text-emerald-600" /> Trả xe đúng điểm và hoàn tất thanh toán
                </h3>
                <p className="mt-1 text-sm text-foreground/70">Trả xe tại đúng điểm đã thuê để tránh phụ phí.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Return (Trả xe) */}
      <section className="bg-gradient-to-b from-transparent to-muted/60 py-16 sm:py-24">
        <div className="container">
          <SectionTitle eyebrow="Trả xe" title="Trả xe đúng điểm và hoàn tất thanh toán" />

          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border bg-card p-4 sm:p-6">
            <ol className="relative mx-1 space-y-6 sm:space-y-8 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-px before:bg-emerald-100">
              <li className="relative pl-10">
                <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full bg-emerald-500 text-xs font-bold text-white">01</span>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="flex items-center gap-2 text-base font-semibold">
                      <MapPin className="h-5 w-5 text-emerald-600" /> Trả xe đúng điểm thuê
                    </h3>
                    <p className="mt-1 text-sm text-foreground/70">Trả xe tại đúng điểm đã thuê để tránh phụ phí.</p>
                  </div>
                </div>
              </li>
              <li className="relative pl-10">
                <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full bg-emerald-500 text-xs font-bold text-white">02</span>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="flex items-center gap-2 text-base font-semibold">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" /> Kiểm tra & xác nhận tình trạng
                    </h3>
                    <p className="mt-1 text-sm text-foreground/70">Nhân viên kiểm tra nhanh, bạn ký xác nhận biên bản bàn giao.</p>
                  </div>
                </div>
              </li>
              <li className="relative pl-10">
                <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full bg-emerald-500 text-xs font-bold text-white">03</span>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="flex items-center gap-2 text-base font-semibold">
                      <CreditCard className="h-5 w-5 text-emerald-600" /> Hoàn tất thanh toán
                    </h3>
                    <p className="mt-1 text-sm text-foreground/70">Thanh toán chi phí phát sinh (nếu có) trực tiếp tại quầy hoặc trong ứng dụng.</p>
                  </div>
                </div>
              </li>
              <li className="relative pl-10">
                <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full bg-emerald-500 text-xs font-bold text-white">04</span>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="flex items-center gap-2 text-base font-semibold">
                      <ReceiptText className="h-5 w-5 text-emerald-600" /> Nhận biên lai / hoàn tất hợp đồng
                    </h3>
                    <p className="mt-1 text-sm text-foreground/70">Nhận biên lai điện tử qua email/ứng dụng để lưu trữ minh bạch.</p>
                  </div>
                </div>
              </li>
            </ol>
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
