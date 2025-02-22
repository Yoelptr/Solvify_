import { Pagecontainer } from "~/components/layout/PageContainer";
import { SectionContainer } from "~/components/layout/SectionContainer";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const RegisterPage = () => {
  return (
    <Pagecontainer>
      <SectionContainer
        padded
        className="flex min-h-[calc(100vh-144px)] w-full flex-col justify-center"
      >
        <Card className="mx-auto w-full max-w-md">
          <CardHeader className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-primary">Buat Akun</h1>
            <p className="text-muted-foreground">Solve Semua Pertanyaan Mu</p>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </SectionContainer>
    </Pagecontainer>
  );
};

export default RegisterPage;
