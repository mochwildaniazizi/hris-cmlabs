export async function POST(req) {
    const { email, password } = await req.json();
  
    if (email === "polinema@gmail.com" && password === "joss") {
      // Di sini biasanya kasih token atau session
      return new Response(JSON.stringify({ message: "Login berhasil" }), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify({ message: "Email atau password salah" }), {
        status: 401,
      });
    }
  }
  