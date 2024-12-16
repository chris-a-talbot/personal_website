import { jsx as _jsx } from "react/jsx-runtime";
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
const App = () => {
    return (_jsx("main", { className: "min-h-screen bg-background text-foreground", children: _jsx(RouterProvider, { router: router }) }));
};
export default App;
