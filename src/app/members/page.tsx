import { columns } from "@/components/custome/DatatableContainer/columns";
import { DataTable } from "@/components/custome/DatatableContainer/data-table";
import React from "react";

export const metadata = {
  title: "Members",
};
export async function getDataMembers() {
  const res = await fetch("http://localhost:3000/api/member");
  const data = await res.json();
  return data;
}
export default async function PerformPage() {
  const data = await getDataMembers();
  console.log(data);
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
