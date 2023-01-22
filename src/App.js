import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Button from "./components/Button";
import Home from "./pages/Home";
import Error from "./pages/Error";
import classes from "./pages/Error.module.css";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <Layout>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div role='alert' className={classes["err-container"]}>
            <div>Error in fetching data. Please try again.</div>
            <p className={classes["error-text"]}>{error.message}</p>
            <Button
              onBtnClick={() => {
                resetErrorBoundary();
              }}
              btnText='Try again'
            />
          </div>
        )}
      >
        <Routes>
          <Route path='/' element={<Navigate replace to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </ErrorBoundary>
    </Layout>
  );
}

export default App;
