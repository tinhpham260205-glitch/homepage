import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import AuthLayout from "@/components/auth/AuthLayout";

export default function SignUp() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "", confirm: "" });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (form.password !== form.confirm) {
      toast.error("Mật khẩu không khớp");
      return;
    }
    login({ name: form.name || form.email.split("@")[0] || "Khách" });
    toast.success("Đăng ký thành công. Chào mừng bạn đến EV-Rental!");
    nav("/dashboard");
  }

  return (
    <AuthLayout title="Tham gia EV-Rental ngay hôm nay" subtitle="Tạo tài khoản miễn phí trong 1 phút">
      <form onSubmit={onSubmit} className="grid gap-3">
        <label className="text-sm">Họ và tên<input className="mt-1 w-full rounded-md border bg-background px-3 py-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
        <label className="text-sm">Số điện thoại<input className="mt-1 w-full rounded-md border bg-background px-3 py-2" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></label>
        <label className="text-sm">Email<input type="email" className="mt-1 w-full rounded-md border bg-background px-3 py-2" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
        <label className="text-sm">Mật khẩu<input type="password" className="mt-1 w-full rounded-md border bg-background px-3 py-2" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></label>
        <label className="text-sm">Xác nhận mật khẩu<input type="password" className="mt-1 w-full rounded-md border bg-background px-3 py-2" value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} /></label>
        <button className="mt-1 rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground">Đăng ký</button>
        <p className="text-xs text-foreground/60">Đã có tài khoản? <Link to="/dang-nhap" className="text-emerald-700 hover:underline">Đăng nhập</Link></p>
      </form>
    </AuthLayout>
  );
}
