import Navbar from "@/components/Navbar";

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
  }