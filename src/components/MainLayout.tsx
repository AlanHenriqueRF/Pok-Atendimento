import Footer from "./Footer";
import NavBar from "./NavBar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            <>
                {children}
            </>
            <Footer />
        </>
    )
};