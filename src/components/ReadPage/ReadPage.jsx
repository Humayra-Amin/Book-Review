import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import axios from "axios";

const ReadPage = () => {

    const [readPages, setReadPages] = useState([]);

    useEffect( () => {
        axios.get('books.json')
        .then(res => {
            setReadPages(res.data);
        })

        .catch(error => {
            console.error('Error in getting the data:', error);
        });
    }, []);

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'brown', 'green', 'skyblue'];

    const bookData = readPages.map (book => ({
        name: book.bookName,
        uv:book.totalPages,
    }));
    
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const fontSize = window.innerWidth >= 768 ? 12 : 10;
   


    return (
        <div className="container mx-auto lg:w-[800px] lg:h-[550px] border-2 rounded-xl bg-base-200">
            <div className='lg:mt-10 lg:w-[0]'>
                <BarChart className=''
                    width={window.innerWidth >= 1480 ? 800 : window.innerWidth - 2}
                    height={480}
                    data={bookData}
                    margin={{
                        top: 50,
                        right: 50,
                        left: 50,
                        bottom: 50,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={window.innerWidth >= 500 ? -12 : -45} textAnchor="end" interval={0} fontSize={fontSize} />
                    <YAxis />
                    <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {bookData.map((entry, idx) => (
                            <Cell key={`cell-${idx}`} fill={colors[idx % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default ReadPage;