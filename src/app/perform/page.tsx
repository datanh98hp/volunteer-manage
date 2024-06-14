import { columns } from "@/components/custome/PerformDatatable/columns-perform";
import { DataTable } from "@/components/custome/PerformDatatable/data-table";
import axiosClient from "@/lib/axiosClient";
import { headers } from "next/headers";
import React from "react";

async function getData() {
  const referer = headers().get("referer");
  const baseURL = referer?.split("/")[0] + "//" + referer?.split("/")[2];
  // console.log(baseURL, process.env.API_BASE_URI);
  // const res = await fetch(`${process.env.API_URI_PROD}/api/perform`);
  const res = await axiosClient.get("/api/perform");
  // const data = await fetch(
  //   `${process.env.API_BASE_URI}/api/perform`
  // );
  const dataJson = await res.data;
  return dataJson;
}

export default async function PerformPage() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <DataTable columns={columns} data={data} filterByKey="name" />
    </div>
  );
}
