import { useLoaderData } from "react-router-dom";
import NewCard from "../NewCard";
const CategoryNews = () => {
    const {data} = useLoaderData();
   
    return (
        <div>
            <h2 className="font-semibold">Dragon News Home</h2>
             <h1>{data.length} news found in this category</h1>
             <div>
                {
                    data.map(news=><NewCard key={news._id} news ={news}></NewCard>)
                }
             </div>
        </div>
    );
};

export default CategoryNews;