import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return new NextResponse('Não autorizado', { status: 401 });
    }

    const document = await prisma.upload.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!document) {
      return new NextResponse('Documento não encontrado', { status: 404 });
    }

    if (document.userId !== session.user.id) {
      return new NextResponse('Não autorizado', { status: 401 });
    }

    await prisma.upload.delete({
      where: {
        id: params.id,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Erro ao excluir documento:', error);
    return new NextResponse('Erro interno do servidor', { status: 500 });
  }
} 