"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axiosClient from "@/lib/axiosClient";
import { toast } from "@/components/ui/use-toast";
const formSchema = z.object({
  fullname: z
    .string()
    .min(2, {
      message: "Tối thiểu 2 kí tự",
    })
    .max(50, {
      message: "Tối đa 50 kí tự",
    }),
  type: z.enum(["CHILDREND", "YOUTH"], {
    required_error: "Vui lòng chọn",
  }),
  class: z
    .string()
    .min(2, {
      message: "Tối thiểu 2 kí tự",
    })
    .max(6, {
      message: "Tối đa 50 kí tự",
    }),
  school: z
    .string()
    .min(2, {
      message: "Tối thiểu 2 kí tự",
    })
    .max(30, {
      message: "Tối đa 2 kí tự",
    }),
});
export default function FormDetail({ data }: { data: any }) {
  const [listType, setlistType] = React.useState<Array<string>>([]);
  React.useEffect(() => {
    // axiosClient.get("/api/member").then((res) => {
    //   setlistType(res.data);
    // });
    setlistType(["CHILDREND", "YOUTH"]);
  }, []);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: data.fullname,
      type: data.type,
      class: data.class,
      school: data.school,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // call  update user data
    console.log(values);
    axiosClient
      .put(`/api/member/${data.id}`, values)
      .then((res) => {
        console.log(res);
        toast({
          title: "Success",
          color: "green",
          description: "Cập nhật thành công.",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="border rounded-lg p-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => {
              return (
                <FormItem className="m-2">
                  <FormLabel>Họ và tên</FormLabel>
                  <FormControl>
                    <Input
                      className=" outline-none"
                      placeholder="Nhập họ và tên"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div className="m-2 flex gap-4">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => {
                // console.log(field.value);
                field.value = data.type;
                return (
                  <FormItem className="">
                    <FormLabel>Loại</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="">
                          <SelectValue placeholder={field.value==="CHILDREND"?"Thiếu nhi":"Thanh niên"} {...field} />
                        </SelectTrigger>
                        <SelectContent>
                          {listType.map((item, index) => (
                            <SelectItem
                              key={index}
                              value={item}
                              
                            >
                              {item === "CHILDREND"
                                ? "Thiếu nhi"
                                : "Thanh niên"}
                            </SelectItem>
                          ))}
                        
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="class"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Lớp</FormLabel>
                  <FormControl>
                    <Input
                      className="outline-none"
                      placeholder="Lớp"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="school"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Trường</FormLabel>
                <FormControl>
                  <Input
                    className="outline-none"
                    placeholder="Trường"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="text-end">Cập nhật</Button>
        </form>
      </Form>
    </div>
  );
}
