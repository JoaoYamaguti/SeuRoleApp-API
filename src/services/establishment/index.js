import { Prisma, PrismaClient } from "@prisma/client";
import { create } from "domain";
import path from "path";

const prisma = new PrismaClient();

export const createNewEstablishment = async (resData) => {
  console.log(resData);
  const [newEstablishment] = await prisma.$transaction([
    prisma.establishment.create({
      data: {
        name: resData.name,
        description: resData.description,
        rate: resData.rate,
        address: resData.address,
        hours: resData.hours,
        images: { create: resData.imgs },
        categories: { create: resData.categories },
      },
    }),
  ]);
  return "Establishment Created"
};

export const findEstablishments = async () => {
  const dados = await prisma.establishment.findMany({
    include: { images: true, categories: true },
  });

  return dados;
};

export const deleteEstablishment = async (resId) => {
  await prisma.establishment.delete({
    where: { id: resId.id },
  });
  return "Item Deletado";
};

export const deleteAll = async () => {
  await prisma.establishment.deleteMany();
  return "Tudo Deletado";
};
