import FormDetail from "@/components/custome/MemberDetailForm/Form";
import { columns } from "@/components/custome/MemberDetailForm/column-members";
import { DataTable } from "@/components/custome/MemberDetailForm/data-table";
import axiosClient from "@/lib/axiosClient";

async function getMemberById(id: string) {
  try {
    const res = await axiosClient.get(`/api/member/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
export default async function DetailMember({
  params,
}: {
  params: { id: string };
}) {
  const data = await getMemberById(params.id);

  return (
    <div>
      <div className="md:w-full md:flex justify-evenly gap-4 my-10">
        <FormDetail data={data || null} />
        <div className="border p-2 md:w-[40rem]">
          <div className=" my-6">
            <h3 className="p-4">Hoạt động tham gia</h3>
            <div className="flex flex-wrap p-4">
              {data.JoinIn?.map((item: any, index: number) => (
                <div
                  className="mr-2 p-2 border-[0.1rem] w-fit rounded-full mx-2x"
                  key={item.id}
                >
                  <p>{item.name}</p>
                </div>
              ))}
              <div className="mr-1 p-2 border-[0.1rem] w-fit rounded-full mx-2x">
                <p>Đồng diễn võ</p>
              </div>

            </div>
          </div>
          <div>
            <h3 className="p-4">Lich sử điểm danh</h3>
            <div className="p-4">
              <DataTable columns={columns} data={data.CheckIn || []} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
