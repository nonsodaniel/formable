import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <SignUp
      appearance={{
        elements: {
          rootBox: "w-full max-w-sm",
          card: "shadow-none border border-border rounded-xl bg-background p-8",
          headerTitle: "text-xl font-semibold text-foreground",
          headerSubtitle: "text-sm text-muted-foreground",
          socialButtonsBlockButton:
            "border border-border bg-background text-foreground text-sm font-medium hover:bg-accent transition-colors",
          dividerLine: "bg-border",
          dividerText: "text-muted-foreground text-xs",
          formFieldLabel: "text-sm font-medium text-foreground",
          formFieldInput:
            "border border-input bg-background text-foreground text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring",
          formButtonPrimary:
            "bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors rounded-md",
          footerActionLink: "text-primary text-sm hover:underline",
          identityPreviewText: "text-foreground text-sm",
          identityPreviewEditButton: "text-primary text-sm hover:underline",
          formResendCodeLink: "text-primary text-sm hover:underline",
          alertText: "text-sm",
          formFieldErrorText: "text-destructive text-xs",
        },
        variables: {
          borderRadius: "0.5rem",
        },
      }}
    />
  );
}
