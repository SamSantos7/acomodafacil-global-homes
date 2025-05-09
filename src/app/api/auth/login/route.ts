
import { db } from "@/lib/db";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await db.user.findUnique({
      where: { email }
    });

    if (!user) {
      return new Response("Usuário não encontrado", { status: 404 });
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      return new Response("Senha incorreta", { status: 401 });
    }

    const token = sign(
      { userId: user.id },
      process.env.JWT_SECRET || "fallback_secret",
      { expiresIn: "7d" }
    );

    return Response.json({ token });
  } catch (error) {
    return new Response("Erro ao fazer login", { status: 500 });
  }
}
