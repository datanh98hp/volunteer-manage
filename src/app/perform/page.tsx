import { columns } from "@/components/custome/PerformDatatable/columns-perform";
import { DataTable } from "@/components/custome/PerformDatatable/data-table";
import { headers } from "next/headers";
import React from "react";

async function getData() {
  const referer = headers().get("referer");
  const baseURL = referer?.split("/")[0] + "//"+referer?.split("/")[2];
  // console.log(baseURL, process.env.API_BASE_URI);
  const res = await fetch(
    `${ baseURL|| process.env.API_BASE_URI}/api/checkin`
  );
  // const data = await fetch(
  //   `${process.env.API_BASE_URI}/api/perform`
  // );
  const dataJson = await res.json();
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
