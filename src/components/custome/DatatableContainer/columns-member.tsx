"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import axiosClient from "@/lib/axiosClient";
import Link from "next/link";
export type Member = {
  id: string;
  fullname: string;
  type: "CHILDREND" | "YOUTH";
  class: string;
  school: string;
};

export const columns: ColumnDef<Member>[] = [
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
            onCheckedChange={(value) => {
              table.toggleAllPageRowsSelected(!!value);
            }}
            aria-label="Select all"
          />
        </div>
      );
    },

    cell: ({ row }) => {
      if (row.getIsSelected()) {
      }
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      );
    },
  },
  {
    accessorKey: "fullname",
    header: "Họ & tên",
  },
  {
    accessorKey: "type",
    header: "Loại",
    cell: ({ row }) => {
      return <>{row.original.type === "YOUTH" ? "Thanh niên" : "Thiếu nhi"}</>;
    },
  },
  {
    accessorKey: "class",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-center"
        >
          Lớp
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "school",
    header: "Trường",
  },
  {
    accessorKey: "actions",
    header: () => {
      return (
        <>
          <MoreHorizontal className="h-5 w-5" />
        </>
      );
    },
    cell: ({ row }) => {
      const member = row.original;
      // console.log(member);
      const { id } = member;
      // get list perform

      const handleDelete = async () => {
        await fetch(`/api/member/${id}`, {
          method: "DELETE",
        });

        row.getCanExpand() && row.toggleExpanded();
        location.reload();
        toast({
          title: "Success",
          description: "Delete member successfully",
        });
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
            <Link href={`/members/${id}`}>
              <DropdownMenuItem>Chi tiết</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleDelete()}>
              Xóa
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
