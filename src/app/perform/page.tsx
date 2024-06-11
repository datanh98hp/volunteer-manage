import { columns } from "@/components/custome/PerformDatatable/columns-perform";
import { DataTable } from "@/components/custome/PerformDatatable/data-table";
import { headers } from "next/headers";
import React from "react";

async function getData() {
  const baseURL = headers().get("referer")?.split("/").slice(0, 3).join("/");
  // const data = await fetch(
  //   `${baseURL || process.env.API_BASE_URIF}/api/perform`
  // );
  const data = await fetch(
    `${process.env.API_BASE_URI}/api/perform`
  );
  const dataJson = await data.json();
  return dataJson;
}

export default async function PerformPage() {
  const data = await getData();
  return (
    <div>
      <h1>Perform</h1>
      <DataTable columns={columns} data={data} filterByKey="name" />
    </div>
  );
}
