import { columns } from "@/components/custome/CheckInDatatable/columns-checkin";
import { DataTable } from "@/components/custome/CheckInDatatable/data-table";
import axiosClient from "@/lib/axiosClient";
import { headers } from "next/headers";
import React from "react";

export const metadata = {
  title: "Members",
};
async function getData() {
  // const referer = headers().get("referer");
  // const baseURL = referer?.split("/")[0] + "//" + referer?.split("/")[2];
  const res = await axiosClient(`/api/checkin`);

  if (!res.data) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.data;
  return data;
}
async function getDataMember() {
  // const referer = headers().get("referer");
  // const baseURL = referer?.split("/")[0] + "//" + referer?.split("/")[2];
  const res = await axiosClient(`/api/member`);

  if (!res.data) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.data;
  return data;
}
export default async function CheckinListPage() {
  const data = await getData();
  const dataMember = await getDataMember();
  return (
    <div className="w-full">
      <DataTable
        columns={columns}
        data={data || []}
        dataMember={dataMember || []}
        filterByKey="createdAt"
      />
    </div>
  );
}
