"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type MemberDetail = {
  id: string;
  note: string;
  memberId:number;
  createdAt: string;
};

export const columns: ColumnDef<MemberDetail>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "note",
    header: "Ghi chú",
  },
  {
    accessorKey: "createdAt",
    header: "T.gian",
  },
];
