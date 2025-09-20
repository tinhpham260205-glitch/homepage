import { FormEvent, useState } from "react";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import AuthLayout from "@/components/auth/AuthLayout";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const name = email.split("@")[0] || "Khách";
    login({ name });
    toast.success(`Đăng nhập thành công. Chào mừng bạn quay lại, ${name}!`);
    nav("/dashboard");
  }

  return (
    <AuthLayout title="Hân hạnh được gặp bạn" subtitle="Vui lòng đăng nhập để tiếp tục">
      <form onSubmit={onSubmit} className="grid gap-4">
        <label className="text-sm">
          Email
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-md border bg-background px-3 py-2" />
        </label>
        <label className="text-sm">
          Mật khẩu
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full rounded-md border bg-background px-3 py-2" />
        </label>
        <div className="flex items-center justify-between text-xs">
          <Link to="#" className="text-emerald-700 hover:underline">Quên mật khẩu?</Link>
        </div>
        <button className="rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground">Đăng nhập</button>
        <p className="text-xs text-foreground/60">
          Không có tài khoản? <Link to="/dang-ky" className="text-emerald-700 hover:underline">Đăng ký</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
