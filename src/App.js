import { BlogDetail, BlogListing, ContactUs, Home, NotFound,} from "./components";
import { Route, Routes } from "react-router-dom";
import { BasicLayout } from "./layout/BasicLayout";
import "./App.css";


const App = () => {
  
  return (
    <BasicLayout>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="BlogListing" element={<BlogListing />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path=":id" element={<BlogDetail />} />
      </Routes>
    </BasicLayout>
  );
};
export default App;