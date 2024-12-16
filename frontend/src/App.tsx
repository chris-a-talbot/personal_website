import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

const App = () => {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <RouterProvider router={router} />
        </main>
    );
};

export default App;