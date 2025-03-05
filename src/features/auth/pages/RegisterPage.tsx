import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { Pagecontainer } from "~/components/layout/PageContainer";
import { SectionContainer } from "~/components/layout/SectionContainer";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import type { RegisterFormSchema } from "../forms/register";

const RegisterPage = () => {
  const form = useForm<RegisterFormSchema>();
  return (
    <Pagecontainer>
      <SectionContainer
        padded
        className="flex min-h-[calc(100vh-144px)] w-full flex-col justify-center"
      >
        <Card className="w-full max-w-[480px] self-center">
          <CardHeader className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-primary">Buat Akun</h1>
            <p className="text-muted-foreground">Solve Semua Pertanyaan Mu</p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form action="" className="flex flex-col gap-y-1">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Label className="flex items-center gap-2">
                  <Checkbox />
                  Show Password
                </Label>

                <Button type="submit" className="mt-4 w-full">
                  {" "}
                  Buat Akun
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </SectionContainer>
    </Pagecontainer>
  );
};

export default RegisterPage;
