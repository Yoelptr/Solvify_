import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Pagecontainer } from "~/components/layout/PageContainer";
import { SectionContainer } from "~/components/layout/SectionContainer";
import { Button } from "~/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { Form } from "~/components/ui/form";
import { RegisterFormInner } from "../components/RegisterFormInner";
import { registerFormSchema, type RegisterFormSchema } from "../forms/register";

const RegisterPage = () => {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleRegisterSubmit = (values: RegisterFormSchema) => {
    alert("tre");
  };
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
              <RegisterFormInner onRegsiterSubmit={handleRegisterSubmit} />
            </Form>
          </CardContent>

          <CardFooter className="fex flex-col gap-4">
            <div className="flex w-full items-center justify-between">
              <div className="h-[2px] w-full border-t-2" />
              <p className="flex-1 text-nowrap text-muted-foreground">
                atau daftar dengan
              </p>
              <div className="h-[2px] w-full border-t-2" />
            </div>

            <Button variant="secondary" className="w-full" size="lg">
              <FcGoogle />
              Google
            </Button>

            <p>
              Sudah punya akun?{" "}
              <Link className="font-bold text-purple-700" href="/login">
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </SectionContainer>
    </Pagecontainer>
  );
};

export default RegisterPage;
