"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

export type CheckIn = {
  id: string;
  note: string;
  member: any;
  createdAt: string;
};

export const columns: ColumnDef<CheckIn>[] = [
  {
    accessorKey: "id",
    header: ({ table }) => {
      return (
        <div>
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "note",
    header: "Ghi chú",
  },

  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          T.gian
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "member",
    header: "Thành viên",
    cell: ({ row }) => {
      return <>{row.original.member.fullname}</>;
    },
  },
  {
    accessorKey: "actions",
    header: () => {
      return (
        <div>
          <MoreHorizontal className="h-5 w-5" />
        </div>
      );
    },
  },
];
