    import { NextResponse } from "next/server";
    import { db } from "../../../lib/db";
    import bcrypt from "bcryptjs";

    export async function POST(req) {
        try {
        const body = await req.json();
    
        const { email, password } = body;
    
        if (!email || !password) {
            return NextResponse.json({ message: "Email dan password harus diisi" }, { status: 400 });
        }
    
        const [users] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
        const user = users[0];
    
        if (!user) {
            return NextResponse.json({ message: "Email tidak ditemukan" }, { status: 401 });
        }
    
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return NextResponse.json({ message: "Password salah" }, { status: 401 });
        }
    
        return NextResponse.json({ message: "Login berhasil" });
    
        } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ message: "Terjadi kesalahan pada server" }, { status: 500 });
        }
    }