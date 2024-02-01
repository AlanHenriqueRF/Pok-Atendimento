import Reset from "../styles/reset.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Reset/>
            <NavBar />
            <>
                {children}
            </>
            <Footer />
        </>
    )
};