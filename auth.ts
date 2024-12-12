import { prisma } from "@/lib/prisma";
import NextAuth, { Account, Profile, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

interface CustomSession extends Session {
  user: {
    id?: string;
  } & Session["user"];
}
interface CustomJWT extends JWT {
  id?: string; // idをカスタムフィールドとして追加
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  basePath: "/api/auth",
  providers: [Google, GitHub],
  session: {
    maxAge: 7 * 24 * 60 * 60,
  },
  callbacks: {
    authorized({ auth }) {
      if (!auth) {
        return false;
      }
      return true;
    },

    async jwt({ token, account, profile }) {
      if (account?.provider === "google") {
        if (account && profile) {
          token.id = profile.sub; // Google ID (sub) をJWTトークンに追加
        }
      }
      if (account?.provider === "github") {
        if (account && profile) {
          token.id = profile.id?.toString(); // Google ID (sub) をJWTトークンに追加
        }
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log(session);
      const customSession = session as CustomSession; // 型アサーション
      const customToken = token as CustomJWT; // 型アサーション
      if (customToken.id) {
        customSession.user.id = customToken.id; // セッションにGoogle IDを追加
      }
      // session.user.id = user.id;
      return customSession;
    },
    async signIn({ account, profile, user }) {
      try {
        if (account?.provider === "google" && profile?.sub) {
          await upsertUserInfo(user, account.provider, profile.sub);
        } else if (account?.provider === "github" && profile?.id) {
          await upsertUserInfo(user, account.provider, profile.id);
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

// 認証情報とユーザ情報のupsert処理の関数
async function upsertUserInfo(
  user: User,
  providerImg: string,
  providerId: string
) {
  await prisma.auth_data.upsert({
    where: {
      providerId: providerId.toString(),
    },
    update: {
      providerId: providerId ? providerId.toString() : undefined,
      profile: {
        update: {
          image: user.image,
          email: user.email ? user.email : "",
        },
      },
    },
    create: {
      providerId: providerId.toString(),
      provider: providerImg,
      profile: {
        create: {
          image: user.image,
          name: user.name,
          email: user.email ? user.email : "",
        },
      },
    },
  });
}
