import CardCustomeContent from "@/components/common/CardCustomeContent";
import axiosClient from "@/lib/axiosClient";
import { cn } from "@/lib/utils";

async function getDataHomePage() {
  try {
    const res = await axiosClient.get("/api/home");
    return res.data;
  } catch (error: any) {
    console.log(error.message);
    return error;
  }
}

export default async function Home() {
  const data = await getDataHomePage();
  // console.log(data);
  return (
    <main className="flex flex-col justify-between">
      <h2 className="text-3xl font-bold text-center h-20 w-full mt-20 mb-8">
        Số liệu thống kê
      </h2>
      <div className="md:flex justify-between h-full">
        <CardCustomeContent>
          <h2
            className={cn(
              "border w-fit p-[3px] text-sm my-4  rounded-xl",
              `border-green-400`
            )}
          >
            Thiếu nhi
          </h2>
          <h3 className="font-bold text-xl text-green-600">
            Tổng : {data?.childs?.sumChilds}
          </h3>
          <div className="text-green-600 my-3 flex">
            <h3 className="font-bold w-36 ">
              Hiện tại : {data?.childs?.sumChildsCheckInToday}
            </h3>
            <p>
              Tỷ lệ :
              {Math.round(
                (data?.childs?.sumChildsCheckInToday /
                  data?.childs?.sumChilds) *
                  100
              )}
              %
            </p>
          </div>
          <div className="text-green-600 my-3 flex">
            <h3 className="font-bold  w-36 ">
              Vắng :{" "}
              {data?.childs?.sumChilds - data?.childs?.sumChildsCheckInToday}
            </h3>
            <p>
              Tỷ lệ :
              {Math.round(
                ((data?.childs?.sumChilds -
                  data?.childs?.sumChildsCheckInToday) /
                  data?.childs?.sumChilds) *
                  100
              )}
              %
            </p>
          </div>
        </CardCustomeContent>
        <CardCustomeContent color="blue">
          <h2
            className={cn(
              "border w-fit p-[3px] text-sm my-4  rounded-xl text-black  dark:text-white",
              `border-blue-600`
            )}
          >
            Thanh niên
          </h2>
          <h3 className="font-bold text-xl">Tổng : {data?.youth?.sumYouth}</h3>
          <div className=" my-3 flex">
            <h3 className="font-bold w-36 ">
              Hiện tại : {data?.youth?.sumYouthCheckInToday}
            </h3>
            <p>
              Tỷ lệ :
              {(data?.youth?.sumYouthCheckInToday / data?.youth?.sumYouth) *
                100}
              %
            </p>
          </div>
          <div className="my-3 flex">
            <h3 className="font-bold  w-36 ">
              Vắng : {data?.youth?.sumYouth - data?.youth?.sumYouthCheckInToday}
            </h3>
            <p>
              {" "}
              Tỷ lệ :
              {Math.round(
                ((data?.youth?.sumYouth - data?.youth?.sumYouthCheckInToday) /
                  data?.youth?.sumYouth) *
                  100
              )}
              %
            </p>
          </div>
        </CardCustomeContent>
        <CardCustomeContent>
          <div className="md:h-full">
            <h3 className=" font-bold text-sm text-orange-500 border-orange-500 rounded-md p-2 border-[0.05rem]">
              Số dư hiện tại : 500.000 VND
            </h3>
            <div className="flex h-full flex-col justify-evenly">
              <p>Chi tiết thu chi hiện tại</p>
              <p>Chi tiết thu chi dự kiến</p>
            </div>
          </div>
        </CardCustomeContent>
        <CardCustomeContent>
          <div className="md:h-full">
            <h3 className="font-bold text-sm border-separate-500 rounded-md p-2 border-[0.05rem]">
              Hoạt động : 3
            </h3>
            <div className="flex h-full flex-col justify-center">
              <p>Đang diễn ra : {data?.actions?.qty}</p>
              <h3>Hoạt động chuẩn bị:0</h3>
              <div className="w-full">
                {data?.actions?.data?.map((item:any, index: number) => (
                  <div className="flex my-2 " key={index}>
                    <p className="font-bold border w-40">
                      {index + 1}. {item.name}:
                    </p>
                    <p> 0 người</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardCustomeContent>
      </div>
    </main>
  );
}
