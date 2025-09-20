import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [name, setName] = useState("Tính");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    login({ name });
    toast.success(`Đăng nhập thành công. Chào mừng bạn quay lại, ${name}!`);
    nav("/dashboard");
  }

  return (
    <section className="container py-24">
      <div className="mx-auto w-full max-w-md rounded-2xl border bg-card p-6 shadow">
        <h1 className="text-xl font-semibold">Đăng nhập</h1>
        <form onSubmit={onSubmit} className="mt-4 grid gap-4">
          <label className="text-sm">
            Họ tên
            <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border bg-background px-3 py-2" />
          </label>
          <button className="rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground">Đăng nhập</button>
        </form>
      </div>
    </section>
  );
}
