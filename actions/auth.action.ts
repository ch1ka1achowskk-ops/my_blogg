'use server'

import prisma from "@/lib/prisma";
import  bcrypt  from "bcrypt";
import { redirect } from "next/dist/server/api-utils";


export const registerUserAction = async ( formData: FormData ) => {
    const name = formData.get("email") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
   const confirmPassword = formData.get("confirm-Password") as string;
   const userExist = await prisma.user.findUnique({
        where: { email},
   })
   if (userExist)  throw new Error("Пользователь с таким email уже существует");

    if (password !== confirmPassword)  throw new Error("Пароли не совпадают");

    const hashPassword = await bcrypt.hashSync(password, 10);

    await prisma.user.create({
        data: {
            name,
            email,
            password: hashPassword
        },
    });

    redirect("/auth/login");
};
