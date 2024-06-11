import { columns } from "@/components/custome/DatatableContainer/columns";
import { DataTable } from "@/components/custome/DatatableContainer/data-table";
import { headers } from "next/headers";
import React from "react";

async function getData() {
  const baseURL = headers().get("referer")?.split("/").slice(0, 3).join("/");
  const data = await fetch(`${baseURL}/api/member`);
  const dataJson = await data.json();
  return dataJson;
}

export default async function PerformPage() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <h1>Perform</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
