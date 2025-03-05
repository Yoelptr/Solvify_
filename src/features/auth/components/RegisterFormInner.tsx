import { useFormContext } from "react-hook-form";
import { Button } from "~/components/ui/button";

import { Checkbox } from "~/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { type RegisterFormSchema } from "../forms/register";
import { useState } from "react";

type RegisterFormProps = {
  onRegsiterSubmit: (values: RegisterFormSchema) => void;
};

export const RegisterFormInner = (props: RegisterFormProps) => {
  const form = useFormContext<RegisterFormSchema>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <form
      onSubmit={form.handleSubmit(props.onRegsiterSubmit)}
      className="flex flex-col gap-y-1"
    >
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
                type={showPassword ? "text" : "password"}
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
        <Checkbox
          checked={showPassword}
          onCheckedChange={(checked) => setShowPassword(!!checked)}
        />
        Show Password
      </Label>

      <Button type="submit" className="mt-4 w-full">
        {" "}
        Buat Akun
      </Button>
    </form>
  );
};
