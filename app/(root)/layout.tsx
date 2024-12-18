import Footer from "@/components/root/homepage/Footer";
import Navbar from "@/components/root/homepage/Navbar";
import Title from "@/components/root/homepage/Title";



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full bg-black">
            <div className="max-w-[2000px] mx-auto">
                <Title />
                <div className="text-white bg-black">
                    <Navbar />
                    <div className="w-full">{children}</div>
                </div>
                <Footer />
            </div>
        </div>
    );
}