import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createNewEstablishment = async (resData) => {
  const [newEstablishment] = await prisma.$transaction([
    prisma.establishment.create({
      data: {
        name: resData.name,
        description: resData.description,
        rate: Number(resData.rate),
        address: resData.address,
        hours: resData.hours,
        images: { create: resData.images },
        categories: { create: resData.categories },
      },
    }),
  ]);
  console.log("cheguei")
  return "Establishment Created"
};

export const findEstablishments = async () => {
  const dados = await prisma.establishment.findMany({
    include: { images: true, categories: true },
  });

  return dados;
};

export const deleteEstablishment = async ({id}) => {
  let res = ''
  const find = await prisma.establishment.findUnique({
    where: { id : Number(id)},
  })

  if (find) {
    await prisma.establishment.delete({
      where: { id: Number(id) },
    });
    res = 'Item Deletado'
  } else {
    res = 'Item não encontrado'
  }
  return res;
};

export const deleteAll = async () => {
  await prisma.establishment.deleteMany();
  return "Tudo Deletado";
};
