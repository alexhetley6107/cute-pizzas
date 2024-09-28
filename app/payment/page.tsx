import { prisma } from '@/prisma/prisma-client';

export default async function PaymentPage({ params: { id } }: { params: { id: string } }) {
  return <>Payment</>;
}
