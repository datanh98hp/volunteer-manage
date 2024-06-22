"use client";

import {
  ColumnDef,
  flexRender,
  SortingState,
  VisibilityState,
  ColumnFiltersState,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CheckCheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeft,
  ChevronsRight,
  GripHorizontal,
  PlusCircle,
  TrashIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filterByKey: string;
  performs: Array<any>;
}
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, useToast } from "@/components/ui/use-toast";
import exportFromJSON from "export-from-json";
import { useRouter } from "next/navigation";
export function DataTable<TData, TValue>({
  columns,
  data,
  filterByKey,
  performs,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  //get rows is selected
  // console.log("SELECTED row ", table.getFilteredSelectedRowModel().rows);
  const [exportType, setExportType] = React.useState("XLS");
  const { toast } = useToast();
  const router = useRouter();
  const handleCheckIn = async () => {
    // alert("CHECK IN");
    const selectRows = table.getFilteredSelectedRowModel().rows;
    const listIdMember = selectRows.map((row: any) => row.original.id);
    console.log("ID MEMBER", listIdMember);
    //call api insert data checkin
    await fetch(`/api/checkin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listIdMember),
    });
    toast({
      title: "Success",
      description: "Check in successfully",
    });
  };

  const formSchema = z.object({
    fullname: z.string().min(2).max(50),
    type: z.string().min(2).max(50),
    class: z.string().min(2).max(4),
    school: z.string().min(2).max(150),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      type: "",
      class: "",
      school: "",
    },
  });
  function exportDataHandler(value: string) {
    console.log("EXPORT DATA");
    setExportType(value);
    const selectRows = table.getFilteredSelectedRowModel().rows;
    const listMember = selectRows.map((row: any) => row.original);
    console.log(listMember);
    let typeExport;
    switch (value) {
      case "txt":
        typeExport = exportFromJSON.types.txt;
        break;
      case "csv":
        typeExport = exportFromJSON.types.csv;
        break;
      case "xls":
        typeExport = exportFromJSON.types.xls;
        break;
      default:
        break;
    }
    exportFromJSON({
      data: listMember,
      fileName: `list-member-export-${new Date().getTime()}`,
      exportType: typeExport,
    });
  }
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    await fetch(`/api/member`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    // reset form
    form.reset();
    router.refresh();
    toast({
      title: "Success",
      color: "green",
      description: "Member added successfully",
    });
  }

  async function handleDeteles() {
    const selectRows = table.getFilteredSelectedRowModel().rows;
    const listId = selectRows.map((row: any) => row.original.id);
    // console.log("LIST ID be delete ---",listId);
    await fetch(`/api/member`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listId),
    });
    router.refresh();
    toast({
      title: "Success",
      color: "green",
      description: "Delete successfully",
    });
  }
  async function handleAddToPerform(idPerform: string) {
    const selectRows = table.getFilteredSelectedRowModel().rows;
    const listId = selectRows.map((row: any) => row.original.id);
    // console.log("LIST ID be delete ---",listId);
    await fetch(`/api/perform/${idPerform}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listId),
    });
    router.refresh();
    toast({
      title: "Success",
      color: "green",
      description: "Add to perform successfully",
    });
  }
  return (
    <div>
      <div className="flex items-center justify-between gap-2 py-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder={`Tìm kiếm theo ${
              filterByKey === "fullname" ? "họ & tên" : ""
            }`}
            value={
              (table.getColumn(filterByKey)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(filterByKey)?.setFilterValue(event.target.value)
            }
            className="md:w-60 w-32 outline-none"
          />
          <Button variant="outline" onClick={handleCheckIn} className="w-12">
            <CheckCheckIcon className="h-4 w-" />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <div className="border rounded-lg p-2">
                <PlusCircle className="h-5 w-5" />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center my-6">
                  Thêm thành viên
                </DialogTitle>
                <DialogDescription>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Họ và tên</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Họ và tên"
                                className="outline-none"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              {/* This is your public display name. */}
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex w-full justify-between">
                        <FormField
                          control={form.control}
                          name="type"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Type</FormLabel>
                              <FormControl>
                                {/* <Input placeholder="shadcn" {...field} /> */}
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  {...field}
                                >
                                  <SelectTrigger className="outline-none">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent className="outline-none">
                                    <SelectItem value="CHILDREND">
                                      Thiếu nhi
                                    </SelectItem>
                                    <SelectItem value="YOUTH">
                                      Thanh niên
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormDescription>
                                {/* This is your public display name. */}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="class"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Lớp</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Lớp ..."
                                  className="w-20 outline-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                {/* This is your public display name. */}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="school"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Trường</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Trường ..."
                                  className="w-50"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                {/* This is your public display name. */}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="w-full flex justify-end">
                        <DialogClose asChild>
                          <Button type="button" variant="ghost">
                            Đóng
                          </Button>
                        </DialogClose>
                        <Button
                          type="submit"
                          variant={"secondary"}
                          className="w-fit"
                        >
                          Tạo mới
                        </Button>
                      </div>
                    </form>
                  </Form>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          {/* <div className="mx-4">Epxort</div> */}
          <Select onValueChange={(value) => exportDataHandler(value)}>
            <SelectTrigger className="md:w-[150px]">
              <SelectValue placeholder="Xuất dữ liệu " />
            </SelectTrigger>
            <SelectContent className="w-[80px] outline-none">
              <SelectItem value="txt">TXT</SelectItem>
              <SelectItem value="csv">CSV</SelectItem>
              <SelectItem value="xls">XLS</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto text-center h-10 lg:flex"
            >
              <GripHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[150px]">
            <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {table
              .getAllColumns()
              .filter(
                (column) =>
                  typeof column.accessorFn !== "undefined" &&
                  column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu> */}
        <Button
          variant="secondary"
          className=""
          onClick={() => handleDeteles()}
        >
          <TrashIcon className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex mb-3">
        <Select
          value={
            (table.getColumn(filterByKey)?.getFilterValue() as string) ?? ""
          }
          onValueChange={(value) =>
            table.getColumn("type")?.setFilterValue(value)
          }
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Loại thành viên" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Loại thành viên</SelectLabel>
              <SelectItem value="CHILDREND">Thiếu nhi</SelectItem>
              <SelectItem value="YOUTH">Thanh niên</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/*  */}
        {
          table.getFilteredSelectedRowModel().rows.length > 0 && (
            <Select onValueChange={(value) => handleAddToPerform(value)}>
              <SelectTrigger className="md:w-[176px] mx-2">
                <SelectValue placeholder="Them vao tiet muc" />
              </SelectTrigger>
              <SelectContent className="w-[180px] outline-none">
                {performs.map((perform) => (
                  <SelectItem key={perform.id} value={perform.id}>
                    {perform.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )
        }
       
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between px-2 my-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value));
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue
                  placeholder={table.getState().pagination.pageSize}
                />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to first page</span>
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to last page</span>
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
