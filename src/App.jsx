import BlogList from "./pages/BlogList";
import ChatButton from "./components/ChatButton";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-zinc-900">
      <Header />
      <main className="flex-1">
        <BlogList />
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
}
