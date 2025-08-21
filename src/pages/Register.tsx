import { useForm } from "react-hook-form";
import { Form, FormItem, FormLabel, FormControl, FormMessage, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Register = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      remember: false,
      terms: false,
    },
  });

  const onSubmit = (data: any) => {
    // Handle register logic here
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-card-gradient border border-border rounded-2xl shadow-lg text-foreground">
        <h2 className="text-2xl font-bold text-center gradient-text text-glow">Register</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="email"
              control={form.control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="confirmPassword"
              control={form.control}
              rules={{ required: "Please confirm your password" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Confirm your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="remember"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="mb-0">Remember me</FormLabel>
                </FormItem>
              )}
            />
            <FormField
              name="terms"
              control={form.control}
              rules={{ required: "You must agree to the terms and policy" }}
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="mb-0">
                    I agree to the <a href="#" className="text-blue-600 underline">terms and policy</a>
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Register</Button>
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-border" />
              <span className="mx-2 text-muted-foreground text-xs">or</span>
              <div className="flex-grow h-px bg-border" />
            </div>
            <Button type="button" variant="outline" className="w-full flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><g><path d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.484 3.648-5.617 3.648-3.375 0-6.125-2.789-6.125-6.148s2.75-6.148 6.125-6.148c1.922 0 3.211.82 3.953 1.523l2.703-2.633c-1.711-1.57-3.922-2.523-6.656-2.523-5.523 0-10 4.477-10 10s4.477 10 10 10c5.75 0 9.547-4.023 9.547-9.695 0-.648-.07-1.148-.156-1.352z" fill="#4285F4"/><path d="M3.545 7.441l3.273 2.402c.891-1.781 2.578-2.953 4.482-2.953 1.094 0 2.125.375 2.922 1.094l2.484-2.422c-1.484-1.367-3.391-2.162-5.406-2.162-3.672 0-6.75 2.484-7.859 5.844z" fill="#34A853"/><path d="M12 22c2.438 0 4.484-.805 5.977-2.188l-2.766-2.266c-.781.547-2.188.938-3.211.938-2.484 0-4.594-1.68-5.352-3.953l-3.242 2.5c1.453 2.898 4.523 4.969 8.594 4.969z" fill="#FBBC05"/><path d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.484 3.648-5.617 3.648-3.375 0-6.125-2.789-6.125-6.148s2.75-6.148 6.125-6.148c1.922 0 3.211.82 3.953 1.523l2.703-2.633c-1.711-1.57-3.922-2.523-6.656-2.523-5.523 0-10 4.477-10 10s4.477 10 10 10c5.75 0 9.547-4.023 9.547-9.695 0-.648-.07-1.148-.156-1.352z" fill="none"/></g></svg>
              Continue with Google
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Register;
