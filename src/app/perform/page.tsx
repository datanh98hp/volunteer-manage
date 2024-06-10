import { columns } from "@/components/custome/DatatableContainer/columns";
import { DataTable } from "@/components/custome/DatatableContainer/data-table";
import React from "react";

export async function getData() {
  const data = await fetch("http://localhost:3000/api/member");
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
