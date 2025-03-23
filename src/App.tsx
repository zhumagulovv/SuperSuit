import { withErrorBoundary } from "react-error-boundary";

import MyRoutes from "./routes/routes";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={"Loading..."}>
      <MyRoutes />
    </Suspense>
  );
}

export default withErrorBoundary(App, {
  fallback: <div>Something went wrong!</div>,
});
