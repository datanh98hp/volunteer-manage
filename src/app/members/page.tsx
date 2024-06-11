import { columns } from "@/components/custome/DatatableContainer/columns-member";
import { DataTable } from "@/components/custome/DatatableContainer/data-table";
import { headers } from "next/headers";
import React from "react";

export const metadata = {
  title: "Members",
};
async function getDataMembers() {
  const referer = headers().get("referer");
  const baseURL = referer?.split("/")[0] + "//" + referer?.split("/")[2];
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
    <div className="w-full">
      <DataTable columns={columns} data={data || []} filterByKey="fullname" />
    </div>
  );
}
