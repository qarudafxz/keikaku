import app from './index.ts';

const PORT = process.env.PORT || 3009;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}🚀`))
