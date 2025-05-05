import { NextResponse } from "next/server";
import { db } from "../../../lib/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { name, email, password } = await req.json();

  // Validasi input
  if (!name || !email || !password) {
    return NextResponse.json({ message: "Name, email, dan password wajib diisi" }, { status: 400 });
  }

  // Cek apakah email sudah terdaftar
  const [existingUsers] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

  // Pastikan `existingUsers` adalah array yang valid
  if (!Array.isArray(existingUsers) || existingUsers.length > 0) {
    return NextResponse.json({ message: "Email sudah digunakan" }, { status: 400 });
  }

  // Hash password sebelum disimpan
  const hashedPassword = await bcrypt.hash(password, 10);

  // Menyimpan user baru ke dalam database
  await db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );

  return NextResponse.json({ message: "Registrasi berhasil" }, { status: 201 });
}