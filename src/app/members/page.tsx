import { columns } from "@/components/custome/DatatableContainer/columns";
import { DataTable } from "@/components/custome/DatatableContainer/data-table";
import { headers } from "next/headers";
import React from "react";

export const metadata = {
  title: "Members",
};
export async function getDataMembers() {
  const baseURL = headers().get("referer")?.split("/").slice(0, 3).join("/");
  const res = await fetch(`${baseURL}/api/member`);
  // const res = await fetch(`${process.env.API_BASE_URI}/api/member`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}
export default async function PerformPage() {
  const data = await getDataMembers();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
