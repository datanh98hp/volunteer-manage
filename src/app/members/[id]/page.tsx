import FormDetail from "@/components/custome/MemberDetailForm/Form";
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
      <div className="md:w-full md:flex justify-between">
        <FormDetail data={data || null}  />
        <div>List Join In</div>
      </div>
    </div>
  );
}
