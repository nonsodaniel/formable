import Link from "next/link";
import React, { ReactNode } from "react";
import { FiCheckCircle } from "react-icons/fi";

const features = [
  "Build forms with a drag-and-drop editor",
  "Publish and share forms instantly",
  "Track submissions in real time",
  "Multiple field types: text, date, ratings, and more",
];

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left panel — branding */}
      <div className="hidden lg:flex flex-col justify-between bg-muted/40 border-r border-border px-12 py-10">
        <Link href="/" className="font-bold text-xl tracking-tight text-foreground">
          Formable
        </Link>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground leading-snug">
              The form builder for
              <br />
              modern teams.
            </h1>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Create, publish, and analyse forms without writing a single line of code.
            </p>
          </div>

          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Formable. All rights reserved.
        </p>
      </div>

      {/* Right panel — auth widget */}
      <div className="flex flex-col items-center justify-center px-6 py-12">
        {/* Mobile-only logo */}
        <Link
          href="/"
          className="mb-8 font-bold text-xl tracking-tight text-foreground lg:hidden"
        >
          Formable
        </Link>
        {children}
      </div>
    </div>
  );
}

export default Layout;
