"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from "@/components/ui/drawer";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export type Perform = {
  id: string;
  name: string;
  description: string;
  JoinIn: Array<any>;
};

export const columns: ColumnDef<Perform>[] = [
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
          {/* <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            #
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button> */}
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
    accessorKey: "name",
    header: "Title",
  },

  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Description
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "JoinIn",
    header: "JoinIn",
    cell: ({ row }) => {
      const data = row.original;
      //console.log("Data cell", data);
      return (
        <div className="">
          <Drawer direction="bottom">
            <DrawerTrigger className="cursor-pointer  underline">Danh sách tham gia</DrawerTrigger>
            <DrawerContent className="fixed h-[80%] bottom-0 left-0 right-0">
              <DrawerHeader>
                <ScrollArea className="h-[70%] w-full md:flex md:text-center  rounded-md">
                  <Table className="text-sm">
                    <TableCaption>Danh sách thành viên tham gia hoạt động </TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-center hidden md:block">
                          Full name
                        </TableHead>
                        <TableHead className="text-center">Full name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead className="text-center">Class</TableHead>
                        <TableHead className="text-center">School</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data?.JoinIn.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="hidden md:block">
                            {item.member.id}
                          </TableCell>
                          <TableCell className="text-center">
                            {item.member.fullname}
                          </TableCell>
                          <TableCell className="text-center">
                            {item.member.class}
                          </TableCell>
                          <TableCell className="">{item.member.type}</TableCell>
                          <TableCell className="text-center">
                            {item.member.school}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </div>
      );
    },
  },
  // {
  //   accessorKey: "actions",
  //   header: () => {
  //     return (
  //       <>
  //         <MoreHorizontal className="h-5 w-5" />
  //       </>
  //     );
  //   },
  //   cell: ({ row }) => {
  //     const member = row.original;
  //     console.log(member);
  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(member.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
