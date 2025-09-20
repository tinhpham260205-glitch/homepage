import { Link, NavLink, Outlet } from "react-router-dom";
import { Menu, X, Car, Phone, Percent, Calendar, LogIn, User, LogOut, Home } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const nav = [
  { to: "/", label: "Trang chủ", icon: Home },
  { to: "/xe", label: "Dòng xe", icon: Car },
  { to: "/dat-xe", label: "Đặt xe", icon: Calendar },
  { to: "/uu-dai", label: "Ưu đãi", icon: Percent },
  { to: "/lien-he", label: "Liên hệ", icon: Phone },
];

export default function MainLayout() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-background/70">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-emerald-400 text-white shadow-lg shadow-emerald-200/50 dark:shadow-emerald-900/30">
              <Car className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">EVRide</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  classNames(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="ml-2 inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback>{user.name.slice(0,1).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  {user.name}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/tai-khoan" className="flex items-center gap-2"><User className="h-4 w-4" /> Tài khoản cá nhân</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/lich-su" className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Lịch sử thuê xe</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/cai-dat" className="flex items-center gap-2"><Percent className="h-4 w-4" /> Cài đặt</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" /> Đăng xuất
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                to="/dang-nhap"
                className="ml-2 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-emerald-200/50 hover:shadow-emerald-300/50 transition-shadow"
              >
                <LogIn className="h-4 w-4" />
                Đăng nhập
              </Link>
            )}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground hover:bg-muted"
            onClick={() => setOpen((v) => !v)}
            aria-label="Mở menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t bg-background">
            <div className="container py-2">
              <div className="flex flex-col gap-1 py-2">
                {nav.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      classNames(
                        "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium",
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-foreground/80 hover:bg-muted"
                      )
                    }
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </NavLink>
                ))}
                {user ? (
                  <>
                    <Link to="/tai-khoan" onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"><User className="h-4 w-4" /> Tài khoản cá nhân</Link>
                    <Link to="/lich-su" onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"><Calendar className="h-4 w-4" /> Lịch sử thuê xe</Link>
                    <Link to="/cai-dat" onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"><Percent className="h-4 w-4" /> Cài đặt</Link>
                    <button onClick={() => { logout(); setOpen(false); }} className="mt-1 inline-flex items-center gap-2 rounded-md bg-destructive px-3 py-2 text-sm font-semibold text-destructive-foreground"><LogOut className="h-4 w-4" /> Đăng xuất</button>
                  </>
                ) : (
                  <Link
                    to="/dang-nhap"
                    onClick={() => setOpen(false)}
                    className="mt-1 inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground"
                  >
                    <LogIn className="h-4 w-4" />
                    Đăng nhập
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t bg-white/70 dark:bg-background/70">
        <div className="container py-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-emerald-400 text-white">
                <Car className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold">EVRide</span>
            </Link>
            <p className="mt-3 text-sm text-foreground/70">
              Thuê xe ô tô điện tiện lợi, tiết kiệm và thân thiện môi trường.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Công ty</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li><Link to="/ve-chung-toi" className="hover:text-foreground">Về chúng tôi</Link></li>
              <li><Link to="/tuyen-dung" className="hover:text-foreground">Tuyển dụng</Link></li>
              <li><Link to="/bao-chi" className="hover:text-foreground">Báo chí</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Hỗ trợ</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li><Link to="/cau-hoi-thuong-gap" className="hover:text-foreground">Câu hỏi thường gặp</Link></li>
              <li><Link to="/chinh-sach" className="hover:text-foreground">Chính sách & điều khoản</Link></li>
              <li><Link to="/lien-he" className="hover:text-foreground">Liên hệ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Kết nối</h3>
            <p className="mt-3 text-sm text-foreground/70">Hotline: 1900-1234</p>
            <p className="text-sm text-foreground/70">Email: support@evride.vn</p>
          </div>
        </div>
        <div className="border-t">
          <div className="container py-4 text-center text-xs text-foreground/60">
            © {new Date().getFullYear()} EVRide. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
