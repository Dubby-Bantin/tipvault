import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "./utils/Sonner";

const App = () => {
  return (
    <div className="bg-slate-950">
      <AppRoutes />
      <Toaster />
    </div>
  );
};

export default App;
