import { QueryClientProvider } from "react-query";
import { AppRoutes } from "./components/appRoutes/AppRoutes";
import Layout from "./components/layout/layout";
import { queryClient } from "./react-query/client";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <AppRoutes />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
